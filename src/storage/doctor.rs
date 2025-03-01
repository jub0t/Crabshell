use home::home_dir;
use std::fs;
use std::io::{self, ErrorKind};
use std::path::PathBuf;
use tracing::{error, info};

pub fn get_master_directory() -> Result<PathBuf, io::Error> {
    home_dir()
        .map(|home| home.join(".cancala"))
        .ok_or_else(|| io::Error::new(ErrorKind::NotFound, "Could not determine home directory"))
}

pub fn establish_master_directory() -> Result<bool, io::Error> {
    let path = get_master_directory()?;
    info!("Establishing master directory at: {}", path.display());

    match fs::create_dir_all(&path) {
        Ok(_) => {
            info!("Master directory created or already exists.");
            Ok(true)
        }
        Err(err) if err.kind() == ErrorKind::AlreadyExists => {
            error!("Master directory already exists.");
            Ok(false)
        }
        Err(err) => {
            error!("Failed to create master directory: {}", err);
            Err(err)
        }
    }
}
