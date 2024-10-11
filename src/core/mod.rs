use std::{process::exit, thread, time::Duration};

use tonic::{transport::Server, Request, Response, Status};

use bot::{StartRequest, StartResponse};

#[derive(Debug, Default)]
pub struct MyGreeter {}

#[tonic::async_trait]
impl A for MyGreeter {
    async fn say_hello(
        &self,
        request: Request<StartRequest>, // Accept request of type HelloRequest
    ) -> Result<Response<StartResponse>, Status> {
        println!("Got a request: {:?}", request);

        let reply = StartResponse { success: true };

        Ok(Response::new(reply)) // Send back our formatted greeting
    }
}

pub mod bot {
    tonic::include_proto!("bot"); // The string specified here must match the proto package name
}

pub fn start() {
    let _t = thread::spawn(move || {});
}
