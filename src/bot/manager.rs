use std::collections::HashMap;
use std::io::Result;
use std::sync::{Arc, Mutex};

use super::bot::Bot;

pub struct BotManager {
    bots: HashMap<String, Bot>,

    // Fallback node version if none is provided
    pub prefered_node_version: String,
}

pub type SharedBotManager = Arc<Mutex<BotManager>>;

impl BotManager {
    pub fn new() -> Self {
        BotManager {
            bots: HashMap::new(),
            prefered_node_version: "18.17.0".to_string(),
        }
    }

    // Add a new bot to the manager
    pub fn add(&mut self, name: &str) -> Result<()> {
        if self.bots.contains_key(name) {
            println!("Bot {} already exists", name);
            return Ok(());
        }

        let mut bot = Bot::new(name);
        bot.start(Some(self.prefered_node_version.clone()), Vec::new())?;
        self.bots.insert(name.to_string(), bot);

        Ok(())
    }

    // Start a bot
    pub fn start(&mut self, name: &str) -> Result<()> {
        if let Some(bot) = self.bots.get_mut(name) {
            bot.start(Some(self.prefered_node_version.clone()), Vec::new())?;
        // Replace with the actual path
        } else {
            println!("Bot {} not found", name);
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
