use bot::{StartRequest, StartResponse};
use tonic::{transport::Server, Request, Response, Status};

use bot::application_server::{Application, ApplicationServer};

pub mod bot {
    tonic::include_proto!("bot"); // The string specified here must match the proto package name
}

#[derive(Debug, Default)]
pub struct MyApplication {}

#[tonic::async_trait]
impl Application for MyApplication {
    async fn start(
        &self,
        request: Request<StartRequest>,
    ) -> Result<Response<StartResponse>, Status> {
        let reply = StartResponse { success: true };
        Ok(Response::new(reply))
    }
}

pub async fn start() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:50051".parse()?;
    let greeter = MyApplication::default();

    Server::builder()
        .add_service(ApplicationServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}
