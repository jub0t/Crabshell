use std::fs::{self, ReadDir};

use crate::bot::bot::Bot;

pub fn get_directory_contents(bot: &Bot) -> Option<ReadDir> {
    match &bot.absolute_path {
        None => todo!(),
        Some(path) => {
            let contents = fs::read_dir(path);
            match contents {
                Err(e) => {
                    todo!(); // Add proper error handling
                    println!("{:#?}", e);
                    return None;
                }
                Ok(dir) => return Some(dir),
            }
        }
    }
}
