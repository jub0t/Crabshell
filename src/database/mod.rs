use std::borrow::Cow;

use serde::{Deserialize, Serialize};
use surrealdb::RecordId;
use surrealdb::{engine::local::Db, Error, Surreal};
use uuid::Uuid;

use crate::application::application::BotStatus;
use crate::application::manager::BotEngine;

pub struct DatabaseWrapper {
    conn: Surreal<Db>,
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
    user_id: Cow<'static, str>,
    token: Cow<'static, str>,
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

    pub async fn create_user(&self, user: User) -> Result<User, String> {
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
