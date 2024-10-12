use std::pin::Pin;
use tokio::sync::mpsc::channel;
use tokio_stream::wrappers::ReceiverStream;
use tokio_stream::Stream;
use tonic::{transport::Server, Request, Response, Status};

use bot::application_server::{Application, ApplicationServer};
use bot::{StartRequest, StartResponse};
use broadcast::broadcast_service_server::{BroadcastService, BroadcastServiceServer}; // Added BroadcastServiceServer for registering
use broadcast::{BroadcastMessage, Empty};

// Import generated protobuf modules
pub mod bot {
    tonic::include_proto!("bot");
}

pub mod broadcast {
    tonic::include_proto!("broadcast");
}

// Define the stream type for the broadcast service
type ResponseStream = Pin<Box<dyn Stream<Item = Result<BroadcastMessage, Status>> + Send>>;

// Implement BroadcastService for broadcasting messages
#[derive(Default)]
pub struct MyBroadcastService {}

#[tonic::async_trait]
impl BroadcastService for MyBroadcastService {
    type SubscribeStream = ResponseStream;

    async fn subscribe(
        &self,
        _request: Request<Empty>,
    ) -> Result<Response<Self::SubscribeStream>, Status> {
        let (tx, rx) = channel(4); // Buffered channel with capacity of 4

        tokio::spawn(async move {
            // Continuously broadcast messages
            for i in 0..10 {
                let message = BroadcastMessage {
                    message: format!("Broadcast message #{}", i),
                };

                // thread 'tokio-runtime-worker' panicked at src/core/mod.rs:44:44: called `Result::unwrap()` on an `Err` value: SendError { .. } note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
                match tx.send(Ok(message)).await {
                    Ok(()) => {}
                    Err(e) => {
                        println!("Broadcast Error: {:#?}", e)
                    }
                }

                tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
            }
        });

        let stream = ReceiverStream::new(rx);
        Ok(Response::new(Box::pin(stream) as Self::SubscribeStream))
    }
}

// Implement Application service (bot) for the Start method
#[derive(Debug, Default)]
pub struct MyApplication {}

#[tonic::async_trait]
impl Application for MyApplication {
    async fn start(
        &self,
        _request: Request<StartRequest>,
    ) -> Result<Response<StartResponse>, Status> {
        let reply = StartResponse { success: true };
        Ok(Response::new(reply))
    }
}

// Start the gRPC server and register both Application and Broadcast services
pub async fn start() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:50051".parse()?; // gRPC server address

    let application_service = MyApplication::default(); // Create bot service
    let broadcast_service = MyBroadcastService::default(); // Create broadcast service

    // Start the gRPC server and register both services
    Server::builder()
        .add_service(ApplicationServer::new(application_service)) // Register bot application service
        .add_service(BroadcastServiceServer::new(broadcast_service)) // Register broadcast service
        .serve(addr)
        .await?;

    Ok(())
}
