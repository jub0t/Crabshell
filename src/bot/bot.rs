use std::io::{BufRead, BufReader};
use std::process::{Child, Command, Stdio};
use std::sync::{Arc, Mutex};
use std::{fmt, fs, thread};

pub enum BotStatus {
    Running,
    Stopped,
    Paused,
    None,
}

pub struct Bot {
    pub name: String,
    pub process: Option<Child>,

    // Option<String> for now i guess.
    pub absolute_path: Option<String>,

    pub status: BotStatus,
}

impl Bot {
    pub fn new(name: &str) -> Self {
        Bot {
            name: name.to_string(),
            status: BotStatus::None,
            absolute_path: None,
            process: None,
        }
    }

    pub fn initialize(&self) -> bool {
        // Initialize a directory if absolute path exists
        match self.absolute_path.as_ref() {
            None => {
                return false;
            }
            Some(path) => {
                let result = fs::create_dir(path);
                return result.is_ok();
            }
        };
    }

    // Start the bot process
    pub fn start(
        &mut self,
        node_version: Option<String>,
        arguments: Vec<String>, // TODO: maybe we can use a better data type?
    ) -> std::io::Result<()> {
        if self.absolute_path == None {
            // TODO: Implement an error for this.
            return Ok(());
        }

        if self.process.is_none() {
            let mut child = Command::new("node");

            // Add all arguments
            for arg in arguments {
                child.arg(arg);
            }

            match node_version {
                None => {}
                Some(version) => {
                    // Make it use the "{version}" Version
                }
            }

            let mut spawned = child
                .stdout(Stdio::piped())
                .stderr(Stdio::piped())
                .spawn()?;

            let stdout = spawned.stdout.take().unwrap();
            let stderr = spawned.stderr.take().unwrap();
            let bot_name = Arc::new(Mutex::new(self.name.clone()));

            // Capture stdout in a separate thread
            let shared_bot_name = Arc::clone(&bot_name); // Clone Arc for stdout thread
            thread::spawn(move || {
                let stdout_reader = BufReader::new(stdout);
                for line in stdout_reader.lines() {
                    let line = line.unwrap(); // Handle errors properly in a production environment
                    let bot_name = shared_bot_name.lock().unwrap(); // Lock the mutex before accessing the bot name
                    println!("{} stdout: {}", *bot_name, line); // Use * to dereference the MutexGuard
                }
            });

            // Capture stderr in a separate thread
            let shared_bot_name = Arc::clone(&bot_name); // Clone Arc for stderr thread
            thread::spawn(move || {
                let stderr_reader = BufReader::new(stderr);
                for line in stderr_reader.lines() {
                    let line = line.unwrap(); // Handle errors properly in a production environment
                    let bot_name = shared_bot_name.lock().unwrap(); // Lock the mutex before accessing the bot name
                    eprintln!("{} stderr: {}", *bot_name, line); // Use * to dereference the MutexGuard
                }
            });

            self.process = Some(spawned);
            println!("Bot {} started", self.name);
        }

        Ok(())
    }

    // Stop the bot process
    pub fn stop(&mut self) -> std::io::Result<()> {
        if let Some(ref mut process) = self.process {
            process.kill()?;
            self.process = None;
        }

        Ok(())
    }
}
