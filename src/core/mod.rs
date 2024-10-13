pub mod app;
pub mod io;

use app::MyApplication;
use io::MyBroadcastService;
use tonic::transport::Server;

use bot::application_server::ApplicationServer;
use broadcast::broadcast_service_server::BroadcastServiceServer;

use crate::bot::manager::SharedBotManager;

pub mod bot {
    tonic::include_proto!("bot");
}

pub mod broadcast {
    tonic::include_proto!("broadcast");
}

pub async fn start(shman: SharedBotManager) -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:50051".parse()?; // gRPC server address

    let application_service = MyApplication::new(shman.clone()); // Pass bot manager
    let broadcast_service = MyBroadcastService::new(shman.clone()); // Pass bot manager

    // Start the gRPC server and register both services
    Server::builder()
        .add_service(ApplicationServer::new(application_service)) // Register bot application service
        .add_service(BroadcastServiceServer::new(broadcast_service)) // Register broadcast service
        .serve(addr)
        .await?;

    Ok(())
}
