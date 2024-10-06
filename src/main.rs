pub mod bot;
pub mod core;
pub mod utils;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .compile(&["proto/bot/bot.proto"], &["proto/bot"])?;

    // Let's start the gRPC("core") client for out-going and in-coming communications.
    core::start();
    utils::process::prevent_death();

    Ok(())
}
