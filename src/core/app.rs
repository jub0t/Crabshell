use std::pin::Pin;
use std::sync::{Arc, Mutex};
use tokio::sync::mpsc::channel;
use tokio_stream::wrappers::ReceiverStream;
use tokio_stream::Stream;
use tonic::{transport::Server, Request, Response, Status};

use crate::bot::manager::SharedBotManager;

use super::bot::application_server::Application;
use super::bot::{
    self, BotInfo, CreateBotRequest, CreateBotResponse, ListRequest, ListResponse, StartRequest,
    StartResponse,
};

pub struct MyApplication {
    pub bot_manager: SharedBotManager, // Add this field
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
        // TODO: A LOT of optimizations and code improvements can be made here.
        println!("requested ListAll bots");
        let man = self.bot_manager.clone();
        let a = man.lock().unwrap();
        let bots = &a.bots;

        let mut bots_data = Vec::new();
        for bot in bots.iter() {
            let info = bot.1;
            bots_data.push(BotInfo {
                id: info.id.clone(),
                name: info.name.clone(),
            });
        }

        let reply = ListResponse { data: bots_data };
        Ok(Response::new(reply))
    }

    async fn create_bot(
        &self,
        _request: Request<CreateBotRequest>,
    ) -> Result<Response<CreateBotResponse>, Status> {
        Ok(Response::new(CreateBotResponse::default()))
    }
}
