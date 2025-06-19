// Implementation for Javascript-based application functions
// NODE.JS, DENO, BUN.JS

use serde::Serialize;
use serde_json::{Map, Value};

use crate::application::application::Bot;

#[derive(Serialize)]
struct PackageJson {
    name: String,
    version: String,
    main: String,
    scripts: Map<String, Value>, // Change to serde_json::Value to allow arbitrary JSON types
}

// TODO: Do this.
pub fn install_node_modules() {}

// npm init --yes or use custom json
pub fn initialize_js(bot: &Bot) -> Result<bool, std::fmt::Error> {
    let engine = &bot.engine;

    // BotEngine::Bun => bun init
    // BotEngine::Node => npm init --yes
    // BotEngine::Deno => TODO: ()

    return Ok(true);
    // fs::write(path, contents)
}
