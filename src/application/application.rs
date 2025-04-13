use serde::Serialize;
use std::borrow::Cow;
use std::process::{Child, Command, Stdio};
use uuid::Uuid;

use crate::application::io::IndependantIO;
use crate::utils::thead::to_arc_mutex;

use super::io::SafeIoSender;
use super::manager::BotEngine;

#[derive(Serialize)]
pub enum BotStatus {
    Stopped = 2,
    Running = 1,
    Paused = 3,
    None = 0,
}

impl BotStatus {
    pub fn as_uint32(&self) -> u32 {
        match self {
            Self::None => {
                return 0;
            }

            Self::Running => {
                return 1;
            }

            Self::Stopped => {
                return 2;
            }

            Self::Paused => {
                return 3;
            }
        }
    }
}

pub type BotId = String;

pub struct Bot {
    pub id: BotId,
    pub name: String,
    pub process: Option<Child>,

    // Option<String> for now i guess.
    // pub absolute_path: Option<String>,
    pub engine: BotEngine,
    pub status: BotStatus,
}

pub struct StartBotOptions {
    pub io_sender: SafeIoSender,
}

impl Bot {
    pub fn new(name: &str) -> Self {
        let id = Uuid::new_v4();

        Bot {
            id: id.to_string(),
            name: name.to_string(),
            engine: BotEngine::Node,
            status: BotStatus::None,
            // absolute_path: None,
            process: None,
        }
    }

    pub fn initialize(&self) {
        // Initialize a directory if absolute path exists
    }

    // Start the bot process
    pub fn start(
        &mut self,
        arguments: Vec<Cow<'static, str>>, // TODO: maybe we can use a better data type?
        options: StartBotOptions,
    ) -> std::io::Result<()> {
        // if self.absolute_path == None {
        //     // TODO: Implement an error for this.
        //     return Ok(());
        // }

        self.status = BotStatus::Running;
        if self.process.is_none() {
            let engine_cmd = self.engine.as_string();
            let mut child = Command::new(engine_cmd);

            // Add all arguments
            for arg in arguments {
                child.arg(arg.to_string());
            }

            let mut spawned = child
                .stdout(Stdio::piped())
                .stderr(Stdio::piped())
                .spawn()?;

            let stdout = spawned.stdout.take().unwrap();
            let safe_out = to_arc_mutex(stdout);

            let stderr = spawned.stderr.take().unwrap();
            let safe_err = to_arc_mutex(stderr);

            let bot_io = IndependantIO::new(safe_out, safe_err, options.io_sender);
            bot_io.activate();

            self.process = Some(spawned);
            println!("Bot {} started", self.name);
        }

        Ok(())
    }

    // Stop the bot process
    pub fn stop(&mut self) -> std::io::Result<()> {
        self.status = BotStatus::Stopped;
        if let Some(ref mut process) = self.process {
            process.kill()?;
            self.process = None;
        }

        Ok(())
    }

    pub fn restart(&mut self) {
        let _ = &self.stop();
        self.status = BotStatus::Stopped;
    }
}
