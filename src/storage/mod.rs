use std::fmt::Error;

use go::initialize_go;
use js::initialize_js;

use crate::application::{application::Bot, manager::BotEngine};

// Will handle the on-disk storage for files for every application.
pub mod doctor;
pub mod fm;
pub mod go;
pub mod js;

pub fn initialize_application(bot: Bot) -> Result<bool, Error> {
    match bot.engine {
        BotEngine::Golang => {
            return initialize_go(&bot);
        }

        _ => {
            return initialize_js(&bot);
        }
    };
}
