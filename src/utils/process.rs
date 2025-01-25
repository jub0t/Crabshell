use std::{thread::sleep, time::Duration};

// Function to prevent the main process from exiting
// TODO: Add thread sleep or user input with interval so the loop doesn't use to much cpu
pub fn prevent_death() {
    loop {
        sleep(Duration::from_secs(60));
    }
}
