use std::io::{BufRead, BufReader};
use std::process::{ChildStderr, ChildStdout};
use std::sync::mpsc::{Receiver, Sender};
use std::sync::{Arc, Mutex};
use std::thread::{self};

use super::bot::BotId;

pub type SafeOut = Arc<Mutex<ChildStdout>>;
pub type SafeErr = Arc<Mutex<ChildStderr>>;

#[derive(Debug, Clone, Copy)]
pub enum IoDataType {
    Err,
    Out,
    None,
}

#[derive(Debug, Clone)]
pub struct IoData {
    pub io_type: IoDataType,
    pub bot_id: BotId,
    pub data: Vec<u8>,
}

pub type SafeIoSender = Arc<Mutex<Sender<IoData>>>;
pub type SafeIoReceiver = Arc<Mutex<Receiver<IoData>>>;

pub struct IndependantIO {
    pub std_out: SafeOut,
    pub std_err: SafeErr,
    pub io_sender: SafeIoSender,
}

impl IndependantIO {
    pub fn new(std_out: SafeOut, std_err: SafeErr, io_sender: SafeIoSender) -> Self {
        Self {
            std_out,
            std_err,
            io_sender,
        }
    }

    pub fn activate(&self) {
        let std_out_clone = Arc::clone(&self.std_out); // Clone the Arc to pass into the thread

        // Capture stdout in a separate thread
        thread::spawn(move || {
            let mut out = std_out_clone.lock().unwrap(); // Lock the mutex and get mutable access to ChildStdout
            let stdout_reader = BufReader::new(&mut *out); // Pass a mutable reference to BufReader

            for line in stdout_reader.lines() {
                match line {
                    Ok(content) => {
                        // Logic to implement out
                        println!("{:#?}", content);
                    }
                    Err(e) => {
                        println!("{:#?}", e);
                        // Login to handle Error
                    } // Handle errors properly
                }
            }
        });
    }
}
