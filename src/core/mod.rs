use std::sync::Arc;
use tokio::sync::Mutex;
use tonic::transport::Server;

pub mod app;
pub mod io;

use app::MyApplication;
use io::MyBroadcastService;

use application::application_server::ApplicationServer;
use broadcast::broadcast_service_server::BroadcastServiceServer;

use crate::{application::manager::SharedBotManager, database::DatabaseWrapper};

pub mod application {
    tonic::include_proto!("application");
}

pub mod broadcast {
    tonic::include_proto!("broadcast");
}

pub mod database {
    tonic::include_proto!("database");
}

/// Options for starting the gRPC API server.
pub struct StartAPIOptions {
    pub shman: SharedBotManager,
    pub db: Arc<Mutex<DatabaseWrapper>>,
}

/// Starts the gRPC server with both Application and Broadcast services.
pub async fn start(options: StartAPIOptions) -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:50051".parse()?; // gRPC server address

    // Pass both the bot manager and database handle into each service
    let application_service = MyApplication::new(options.shman.clone(), options.db.clone());
    let broadcast_service = MyBroadcastService::new(options.shman.clone(), options.db.clone());

    println!("Server listening on {}", addr);

    // Build and run the gRPC server
    Server::builder()
        .add_service(ApplicationServer::new(application_service))
        .add_service(BroadcastServiceServer::new(broadcast_service))
        .serve(addr)
        .await?;

    Ok(())
}

// In `app.rs` and `io.rs`, update constructors and store the database:

// app.rs
// ```rust
// pub struct MyApplication {
//     shman: SharedBotManager,
//     db: Arc<Mutex<DatabaseWrapper>>,
// }
//
// impl MyApplication {
//     pub fn new(shman: SharedBotManager, db: Arc<Mutex<DatabaseWrapper>>) -> Self {
//         Self { shman, db }
//     }
//     // ... service implementation, using `self.db` to access database
// }
// ```

// io.rs
// ```rust
// pub struct MyBroadcastService {
//     shman: SharedBotManager,
//     db: Arc<Mutex<DatabaseWrapper>>,
// }
//
// impl MyBroadcastService {
//     pub fn new(shman: SharedBotManager, db: Arc<Mutex<DatabaseWrapper>>) -> Self {
//         Self { shman, db }
//     }
//     // ... service implementation, using `self.db` to access database
// }
//
