pub mod bot;
pub mod core;
pub mod utils;

fn main() {
    // Let's start the gRPC("core") client for out-going and in-coming communications.
    core::start();
    utils::process::prevent_death();
}
