pub struct NodeConfig {
    // d_version = (D)efault (Version)
    pub d_version: String,
}

pub struct DenoConfig {
    pub d_version: String,
}

pub struct BunConfig {
    pub d_version: String,
}

pub struct ManagerConfig {
    pub node: NodeConfig,
    pub deno: DenoConfig,
    pub bun: BunConfig,
}

impl ManagerConfig {
    pub fn new() -> Self {
        // TODO: Read the YAML Configuration file for this engine.
        // And populate the ManagerConfig using the data inside the config file.

        return Self {
            node: NodeConfig {
                d_version: "18.17.0".to_string(),
            },
            bun: BunConfig {
                d_version: "1.1.20".to_string(),
            },
            deno: DenoConfig {
                d_version: "0".to_string(),
            },
        };
    }
}
