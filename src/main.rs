use bot::{config::ManagerConfig, manager::BotManager};
use surrealdb::{engine::local::Mem, Surreal};
use utils::thead::to_arc_mutex;

pub mod bot;
pub mod config;
pub mod core;
pub mod database;
pub mod storage;
pub mod utils;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();

    let connection = Surreal::new::<Mem>(()).await?;
    connection.use_ns("test").use_db("test").await?;
    let db = database::new(connection).await?;

    // Let's start the gRPC("core") client for out-going and in-coming communications.
    let man = BotManager::new(ManagerConfig::new());
    let safe_man = to_arc_mutex(man);

    let _ = core::start(safe_man).await;
    utils::process::prevent_death();

    Ok(())
}

#[cfg(test)]
mod tests {
    use crate::database::User;

    use super::*;

    #[tokio::test]
    async fn test_user_creation() {
        let connection = Surreal::new::<Mem>(()).await.unwrap();
        connection.use_ns("test").use_db("test").await.unwrap();

        let db = database::new(connection).await.unwrap();
        let no_user = db.get_user_by_username("john".to_string()).await;
        assert!(no_user.is_none()); // Ensure the user doesn't exist initially

        let _ = db
            .create_user(User {
                is_admin: true,
                password: "secrethehe".to_string(),
                username: "john".to_string(),
                tokens: Vec::new(),
            })
            .await;

        let yes_user = db.get_user_by_username("john".to_string()).await;
        assert!(yes_user.is_some()); // Ensure the user is created successfully
    }
}
