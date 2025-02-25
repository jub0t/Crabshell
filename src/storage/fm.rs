use std::{
    cell::{Ref, RefCell},
    fs::{self, ReadDir},
};

use crate::bot::bot::Bot;

// I hope this is not dangerous
pub struct FileTreeNode {
    name: String,
    // parent: Option<RefCell<FileTreeNode>>,
    children: Option<Vec<FileTreeNode>>,
}

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
