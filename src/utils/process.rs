use std::{thread::sleep, time::Duration};

// Function to prevent the main process from exiting
pub fn prevent_death() {
    loop {
        sleep(Duration::from_secs(60));
    }
}
