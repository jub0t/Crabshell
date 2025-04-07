use std::collections::HashMap;
use std::fmt;
use std::io::{Error, Result};
use std::sync::mpsc::channel;
use std::sync::{Arc, Mutex};

use serde::Serialize;

use crate::core::application::UpdateStatusTypes;
use crate::utils::thead::to_arc_mutex;

use super::application::{Bot, BotStatus, StartBotOptions};
use super::config::ManagerConfig;
use super::io::{SafeIoReceiver, SafeIoSender};

#[derive(Serialize)]
pub enum BotEngine {
    Bun = 1,
    Deno = 2,
    Node = 3,
    Golang = 4,
}

impl BotEngine {
    pub fn as_string(&self) -> String {
        match self {
            Self::Bun => {
                return "bun".to_string();
            }
            Self::Node => {
                return "node".to_string();
            }
            Self::Deno => {
                return "deno".to_string();
            }
            Self::Golang => {
                return "golang".to_string();
            }
        }
    }
}

pub struct BotManager {
    pub config: ManagerConfig,
    pub bots: HashMap<String, Bot>,
    pub stdout_sender: SafeIoSender,
    pub stdout_receiver: SafeIoReceiver,
}

pub type SharedBotManager = Arc<Mutex<BotManager>>;

impl BotManager {
    pub fn new(config: ManagerConfig) -> Self {
        let (sender, receiver) = channel();
        BotManager {
            bots: HashMap::new(),
            config: config,
            stdout_sender: to_arc_mutex(sender),
            stdout_receiver: to_arc_mutex(receiver),
        }
    }

    // Add a new bot to the manager
    pub fn add(&mut self, name: &str) -> Option<&Bot> {
        if self.bots.contains_key(name) {
            println!("Bot {} already exists", name);
            return None;
        }

        let mut bot = Bot::new(name);
        // TODO: better handling needed
        let _ = bot.start(
            Vec::new(),
            StartBotOptions {
                io_sender: self.stdout_sender.clone(),
            },
        );
        self.bots.insert(name.to_string(), bot);

        return self.bots.get(&name.to_string());
    }

    // Start a bot
    pub fn start(&mut self, id: &str) -> Result<()> {
        if let Some(bot) = self.bots.get_mut(id) {
            bot.start(
                Vec::new(),
                StartBotOptions {
                    io_sender: self.stdout_sender.clone(),
                },
            )?;
            // Replace with the actual path
        } else {
            println!("Bot {} not found", id);
        }

        Ok(())
    }

    // Stop a bot
    pub fn stop(&mut self, name: &str) -> Result<()> {
        if let Some(bot) = self.bots.get_mut(name) {
            bot.stop()?;
        } else {
            println!("Bot {} not found", name);
        }

        Ok(())
    }

    // Restart a bot
    pub fn restart(&mut self, name: &str) -> Result<()> {
        self.stop(name)?;
        self.start(name)?;
        Ok(())
    }

    // List all bots
    pub fn list_all(&self) {
        for (name, _) in &self.bots {
            println!("Bot: {}", name);
        }
    }
}
