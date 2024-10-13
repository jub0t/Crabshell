use std::pin::Pin;
use std::sync::{Arc, Mutex};
use tokio::sync::mpsc::channel;
use tokio_stream::wrappers::ReceiverStream;
use tokio_stream::Stream;
use tonic::{transport::Server, Request, Response, Status};

use crate::bot::manager::SharedBotManager;

use super::bot::application_server::Application;
use super::bot::{ListRequest, ListResponse, StartRequest, StartResponse};

pub struct MyApplication {
    bot_manager: SharedBotManager, // Add this field
}

impl MyApplication {
    // Modify the constructor to accept a bot manager
    pub fn new(bot_manager: SharedBotManager) -> Self {
        MyApplication { bot_manager }
    }
}

#[tonic::async_trait]
impl Application for MyApplication {
    async fn start(
        &self,
        _request: Request<StartRequest>,
    ) -> Result<Response<StartResponse>, Status> {
        let reply = StartResponse { success: true };
        Ok(Response::new(reply))
    }

    async fn list_all(
        &self,
        _request: Request<ListRequest>,
    ) -> Result<Response<ListResponse>, Status> {
        let reply = ListResponse {
            ..Default::default()
        };

        Ok(Response::new(reply))
    }
}
