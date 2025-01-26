// Accept the config file from CLI or obtain it by the default path {home}/.cancala/config.yml

use std::fs;

use serde::Serialize;

#[derive(Serialize)]
pub struct CancalaConfig {}

pub fn get_default_config(primary_path: String) -> CancalaConfig {
    // primary_path is the path supplied from the CLI. Use that first else return the default path.
    let config = CancalaConfig {};

    match home::home_dir() {
        None => {}
        Some(home_path) => {
            let cancala_path = format!("{}/.cancala", home_path.to_string_lossy());
            let main_dir_exists = match fs::exists(&cancala_path) {
                Err(_) => false,
                Ok(exists) => exists,
            };

            if !main_dir_exists {
                // .cancala home directory does not exist, create one.
                match fs::create_dir(cancala_path) {
                    Err(e) => todo!(),
                    Ok(()) => {
                        // Now create a new config file inside the main directory
                    }
                }
            };
        }
    };

    return config;
}
