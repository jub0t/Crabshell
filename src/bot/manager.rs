use std::collections::HashMap;
use std::io::Result;
use std::sync::{Arc, Mutex};

use super::bot::Bot;
use super::config::ManagerConfig;

pub enum BotEngine {
    Bun = 1,
    Deno = 2,
    Node = 3,
}

pub struct BotManager {
    pub config: ManagerConfig,
    pub bots: HashMap<String, Bot>,
}

pub type SharedBotManager = Arc<Mutex<BotManager>>;

impl BotManager {
    pub fn new(config: ManagerConfig) -> Self {
        BotManager {
            bots: HashMap::new(),
            config: ManagerConfig::new(),
        }
    }

    // Add a new bot to the manager
    pub fn add(&mut self, name: &str) -> Result<()> {
        if self.bots.contains_key(name) {
            println!("Bot {} already exists", name);
            return Ok(());
        }

        let mut bot = Bot::new(name);
        bot.start(Vec::new())?;
        self.bots.insert(name.to_string(), bot);

        Ok(())
    }

    // Start a bot
    pub fn start(&mut self, id: &str) -> Result<()> {
        if let Some(bot) = self.bots.get_mut(id) {
            bot.start(Vec::new())?;
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
