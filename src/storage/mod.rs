use go::initialize_go;
use js::initialize_js;

use crate::application::{application::Bot, manager::BotEngine};

// Will handle the on-disk storage for files for every application.
pub mod doctor;
pub mod fm;
pub mod go;
pub mod js;

pub fn initialize_application(bot: Bot) {
    match bot.engine {
        BotEngine::Golang => {
            initialize_go(&bot);
        }

        // Rest are JavaScript engines.
        _ => {
            initialize_js(&bot);
        }
    }
}
