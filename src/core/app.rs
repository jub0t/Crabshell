use tonic::{Request, Response, Status};

use crate::bot::manager::SharedBotManager;

use super::bot::application_server::Application;
use super::bot::{
    BotInfo, CreateBotRequest, CreateBotResponse, ListRequest, ListResponse, StartRequest,
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
        println!("Requested 'ListAll'");
        let man = self.bot_manager.clone();
        let a = man.lock().unwrap();
        let bots = &a.bots;

        let mut bots_data = Vec::new();
        for bot in bots.iter() {
            let info = bot.1;

            bots_data.push(BotInfo {
                id: info.id.clone(),
                name: info.name.clone(),
                status: info.status.as_uint32(),
                engine: info.engine.as_string(),
                absolute_path: info.absolute_path.clone(),
            });
        }

        println!("{:#?}", &bots_data);
        let reply = ListResponse { data: bots_data };
        Ok(Response::new(reply))
    }

    async fn create_bot(
        &self,
        request: Request<CreateBotRequest>,
    ) -> Result<Response<CreateBotResponse>, Status> {
        let man = self.bot_manager.clone();
        let mut a = man.lock().unwrap();

        let data = request.get_ref();
        match a.add(&data.name) {
            Err(e) => {
                println!("{:#?}", e);
                return Ok(Response::new(CreateBotResponse::default()));
            }
            Ok(data) => {
                println!("{:#?}", data);
                return Ok(Response::new(CreateBotResponse::default()));
            }
        };
    }
}
