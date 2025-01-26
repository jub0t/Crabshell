use crate::bot::{bot::Bot, manager::BotEngine};

// Will handle the on-disk storage for files for every application.
pub mod fm;
pub mod go;
pub mod js;

struct Storage {}

// Main Implementation
impl Storage {
    pub fn new() -> Self {
        return Self {};
    }

    pub fn initialize_application(&self, bot: Bot) {
        match bot.engine {
            BotEngine::Node => {
                self.initialize_js(&bot);
            }
            BotEngine::Bun => {
                todo!();
            }
            BotEngine::Deno => {
                todo!();
            }
            BotEngine::Golang => {
                self::Storage::initialize_go();
            }
        }
    }
}
