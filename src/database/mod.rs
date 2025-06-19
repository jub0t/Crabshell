use std::borrow::Cow;

use argon2::{
    password_hash::{rand_core::OsRng, PasswordHasher, SaltString},
    Argon2,
};
use serde::{Deserialize, Serialize};
use surrealdb::RecordId;
use surrealdb::{engine::local::Db, Error, Surreal};
use uuid::Uuid;

#[derive(Clone)]
pub struct DatabaseWrapper {
    pub conn: Surreal<Db>,
}

pub async fn new(conn: Surreal<Db>) -> Result<DatabaseWrapper, Error> {
    return Ok(DatabaseWrapper { conn });
}

// TODO: Tokens
// TODO: Users
#[derive(Debug, Serialize, serde::Deserialize)]
pub struct User {
    pub is_admin: bool,
    pub username: Cow<'static, str>,
    pub password: Cow<'static, str>,
}

#[derive(Serialize, Deserialize)]
pub struct AccessTokens {
    pub user_id: Cow<'static, str>,
    pub token: Cow<'static, str>,
}

#[derive(Debug, Deserialize)]
struct Record {
    #[allow(dead_code)]
    id: RecordId,
}

#[derive(Debug, Deserialize)]
pub struct Bot {
    pub id: Cow<'static, str>,
    pub name: Cow<'static, str>,

    pub engine: u8,
    pub status: u8,
}

impl DatabaseWrapper {
    pub async fn get_user_by_username(&self, username: String) -> Option<User> {
        let sql = "SELECT * FROM users WHERE username = $username".to_string();

        match self.conn.query(sql).bind(("username", username)).await {
            Ok(mut result) => {
                let users: Vec<User> = result.take(0).ok()?;
                users.into_iter().next() // Return the first user if exists
            }
            Err(_) => None,
        }
    }

    pub async fn verify_access_token(&self, user_id: String) -> bool {
        let sql = "SELECT * FROM access_tokens WHERE user_id = $user_id";

        match self.conn.query(sql).bind(("user_id", user_id)).await {
            Ok(mut result) => {
                let tokens: Vec<AccessTokens> = match result.take(0) {
                    Ok(t) => t,
                    Err(_) => return false,
                };
                !tokens.is_empty()
            }
            Err(_) => false,
        }
    }

    pub async fn create_access_token(
        &self,
        user_id: String,
        token: String,
    ) -> Result<AccessTokens, String> {
        let access_token = AccessTokens {
            user_id: Cow::Owned(user_id),
            token: Cow::Owned(token),
        };

        let record = self
            .conn
            .create::<Option<AccessTokens>>(("access_tokens", Uuid::new_v4().to_string()))
            .content(access_token)
            .await;

        match record {
            Ok(Some(t)) => Ok(t),
            Ok(None) => Err("Token creation failed".to_string()),
            Err(e) => Err(format!("Database error: {}", e)),
        }
    }

    pub async fn get_access_tokens_for_user(&self, user_id: String) -> Vec<AccessTokens> {
        let sql = "SELECT * FROM access_tokens WHERE user_id = $user_id";

        match self.conn.query(sql).bind(("user_id", user_id)).await {
            Ok(mut result) => result.take(0).unwrap_or_default(),
            Err(_) => vec![],
        }
    }

    pub async fn is_token_valid(&self, token: String) -> bool {
        let sql = "SELECT * FROM access_tokens WHERE token = $token";

        match self.conn.query(sql).bind(("token", token)).await {
            Ok(mut result) => {
                let tokens: Vec<AccessTokens> = result.take(0).unwrap_or_default();
                !tokens.is_empty()
            }
            Err(_) => false,
        }
    }

    pub async fn delete_all_tokens_for_user(&self, user_id: String) -> bool {
        let sql = "DELETE FROM access_tokens WHERE user_id = $user_id";

        match self.conn.query(sql).bind(("user_id", user_id)).await {
            Ok(_) => true,
            Err(_) => false,
        }
    }

    pub async fn get_or_create_access_token_by_username(
        &self,
        username: String,
    ) -> Result<AccessTokens, String> {
        // 1) Lookup the user’s RecordId from their username
        let sql_user = "SELECT id FROM users WHERE username = $username";
        let mut user_q = self
            .conn
            .query(sql_user)
            .bind(("username", username.clone()))
            .await
            .map_err(|e| e.to_string())?;

        // We expect exactly one result row with an `id` column
        #[derive(serde::Deserialize)]
        struct IdRow {
            id: RecordId,
        }
        let rows: Vec<IdRow> = user_q.take(0).map_err(|e| e.to_string())?;
        let record = rows
            .into_iter()
            .next()
            .ok_or_else(|| format!("No user found with username “{}”", username))?;
        let user_id_str = record.id.to_string();

        // 2) Try to fetch any existing tokens for that ID
        let mut tokens = self.get_access_tokens_for_user(user_id_str.clone()).await;
        if let Some(token) = tokens.pop() {
            return Ok(token);
        }

        // 3) No token found → generate & persist a brand‑new one
        let new_token = Uuid::new_v4().to_string();
        self.create_access_token(user_id_str, new_token).await
    }

    pub async fn create_user(&self, mut user: User) -> Result<User, String> {
        let salt = SaltString::generate(&mut OsRng);
        let argon2 = Argon2::default();
        let password_hash = argon2
            .hash_password(&user.password.as_bytes(), &salt)
            .unwrap()
            .to_string();
        user.password = password_hash.into();

        let id = Uuid::new_v4().to_string();
        let record = self
            .conn
            .create::<Option<User>>(("users", id))
            .content(user)
            .await;

        match record {
            Ok(Some(user)) => Ok(user),
            Ok(None) => Err("User creation failed: No user returned".to_string()),
            Err(e) => Err(format!("Database error: {}", e)),
        }
    }
}
