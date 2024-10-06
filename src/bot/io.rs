use std::io::{BufRead, BufReader};
use std::process::{ChildStderr, ChildStdout};
use std::sync::{Arc, Mutex};
use std::thread;

pub type SafeOut = Arc<Mutex<ChildStdout>>;
pub type SafeErr = Arc<Mutex<ChildStderr>>;

pub struct IndependantIO {
    pub std_out: SafeOut,
    pub std_err: SafeErr,
}

impl IndependantIO {
    pub fn new(std_out: SafeOut, std_err: SafeErr) -> Self {
        Self { std_out, std_err }
    }

    pub fn activate(&self) {
        let std_out_clone = Arc::clone(&self.std_out); // Clone the Arc to pass into the thread

        // Capture stdout in a separate thread
        let t_out = thread::spawn(move || {
            let mut out = std_out_clone.lock().unwrap(); // Lock the mutex and get mutable access to ChildStdout
            let stdout_reader = BufReader::new(&mut *out); // Pass a mutable reference to BufReader

            for line in stdout_reader.lines() {
                match line {
                    Ok(content) => {
                        // Loginc to implement out
                    }
                    Err(e) => {
                        // Login to handle Error
                    } // Handle errors properly
                }
            }
        });
    }
}
