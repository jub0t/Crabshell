pub mod bot;
pub mod cache;
pub mod core;
pub mod utils;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Let's start the gRPC("core") client for out-going and in-coming communications.
    let _ = core::start().await;
    utils::process::prevent_death();

    Ok(())
}
