use std::borrow::Cow;

use serde::{Deserialize, Serialize};
use surrealdb::RecordId;
use surrealdb::{engine::local::Db, Error, Surreal};
use uuid::Uuid;

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
    pub username: String,
    pub password: String,
    pub tokens: Vec<String>,
}

#[derive(Serialize, Deserialize)]
pub struct OptimizedExample {
    name: Cow<'static, str>,
}

#[derive(Debug, Deserialize)]
struct Record {
    #[allow(dead_code)]
    id: RecordId,
}
// TODO: Bots

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
