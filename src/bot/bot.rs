use std::io::{BufRead, BufReader};
use std::process::{Child, Command, Stdio};
use std::sync::{Arc, Mutex};
use std::{fs, thread};

use crate::bot::io::IndependantIO;
use crate::utils::thead::to_arc_mutex;

use super::manager::BotEngine;

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
    pub engine: BotEngine,

    pub status: BotStatus,
}

impl Bot {
    pub fn new(name: &str) -> Self {
        Bot {
            name: name.to_string(),
            engine: BotEngine::Node,
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
        arguments: Vec<String>, // TODO: maybe we can use a better data type?
    ) -> std::io::Result<()> {
        if self.absolute_path == None {
            // TODO: Implement an error for this.
            return Ok(());
        }

        if self.process.is_none() {
            let engine_cmd = match self.engine {
                BotEngine::Bun => "bun",
                BotEngine::Node => "node",
                BotEngine::Deno => "deno",
            };

            let mut child = Command::new(engine_cmd);

            // Add all arguments
            for arg in arguments {
                child.arg(arg);
            }

            let mut spawned = child
                .stdout(Stdio::piped())
                .stderr(Stdio::piped())
                .spawn()?;

            let stdout = spawned.stdout.take().unwrap();
            let safe_out = to_arc_mutex(stdout);

            let stderr = spawned.stderr.take().unwrap();
            let safe_err = to_arc_mutex(stderr);

            let bot_io = IndependantIO::new(safe_out, safe_err);

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
