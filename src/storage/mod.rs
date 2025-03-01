use std::{
    fmt::{self, Error},
    fs,
};

use doctor::get_master_directory;
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

pub fn make_space(bot: &Bot) -> Result<(), std::io::Error> {
    match get_master_directory() {
        Ok(home_dir) => {
            let bot_dir = home_dir.join(format!("/{}", &bot.id));
            match fs::create_dir(bot_dir) {
                Err(e) => return Err(e),
                Ok(_) => return Ok(()),
            }
        }

        Err(e) => return Err(e),
    };
}
