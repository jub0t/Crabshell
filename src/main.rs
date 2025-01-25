use bot::{config::ManagerConfig, manager::BotManager};
use utils::thead::to_arc_mutex;

pub mod bot;
pub mod core;
pub mod database;
pub mod storage;
pub mod utils;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Let's start the gRPC("core") client for out-going and in-coming communications.
    let man = BotManager::new(ManagerConfig::new());
    let safe_man = to_arc_mutex(man);

    let _ = core::start(safe_man).await;

    utils::process::prevent_death();
    Ok(())
}
