use application::{config::ManagerConfig, manager::BotManager};
use core::StartAPIOptions;
use surrealdb::{engine::local::Mem, Surreal};
use utils::thead::to_arc_mutex;

pub mod application;
pub mod config;
pub mod core;
pub mod database;
pub mod storage;
pub mod tests;
pub mod utils;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();
    let connection = Surreal::new::<Mem>(()).await?;
    connection.use_ns("test").use_db("test").await?;

    let db = database::new(connection).await?;
    let safe_db = to_arc_mutex(db);

    // TODO: maybe we move this function to init command on CLI
    match storage::doctor::establish_master_directory() {
        Err(_) => {}
        Ok(_) => {}
    };

    // Let's start the gRPC("core") client for out-going and in-coming communications.
    let man = BotManager::new(ManagerConfig::new());
    let safe_man = to_arc_mutex(man);

    let _ = core::start(StartAPIOptions {
        shman: safe_man,
        db: safe_db,
    })
    .await;
    utils::process::prevent_death();

    Ok(())
}
