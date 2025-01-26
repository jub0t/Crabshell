// Implementation for Javascript-based application functions
// NODE.JS, DENO, BUN.JS

use std::fs;

use serde::Serialize;
use serde_json::{Map, Value};

use crate::bot::bot::Bot;

use super::Storage;

#[derive(Serialize)]
struct PackageJson {
    name: String,
    version: String,
    main: String,
    scripts: Map<String, Value>, // Change to serde_json::Value to allow arbitrary JSON types
}

impl Storage {
    // TODO: Do this.
    pub fn install_node_modules() {}

    // npm init --yes or use custom json
    pub fn initialize_js(&self, bot: &Bot) {
        let package_json = PackageJson {
            main: "index.js".to_string(),
            version: "1".to_string(),
            scripts: Map::new(),
            name: bot.name.to_string(),
        };

        // fs::write(path, contents)
    }
}
