use std::fs::{self, ReadDir};

use crate::application::application::Bot;

// I hope this is not dangerous
pub struct FileTreeNode {
    name: String,
    size: Option<u64>,
    children: Option<Vec<FileTreeNode>>,
}

pub fn get_directory_contents(bot: &Bot) -> Option<ReadDir> {
    match &bot.absolute_path {
        None => todo!(),
        Some(path) => {
            let contents = fs::read_dir(path);
            match contents {
                Err(e) => {
                    println!("{:#?}", e);
                    todo!(); // Add proper error handling
                    return None;
                }
                Ok(dir) => return Some(dir),
            }
        }
    }
}
