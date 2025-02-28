use tonic::{Request, Response, Status};
use tracing::info;

use super::application::{
    application_server::Application, BotInfo, CreateBotRequest, CreateBotResponse, ListRequest,
    ListResponse, StartRequest, StartResponse,
};
use crate::application::manager::SharedBotManager;

pub struct MyApplication {
    pub bot_manager: SharedBotManager,
}

impl MyApplication {
    pub fn new(bot_manager: SharedBotManager) -> Self {
        Self { bot_manager }
    }
}

#[tonic::async_trait]
impl Application for MyApplication {
    async fn start(
        &self,
        _request: Request<StartRequest>,
    ) -> Result<Response<StartResponse>, Status> {
        info!("Received 'start' request");
        let reply = StartResponse { success: true };
        Ok(Response::new(reply))
    }

    async fn list_all(
        &self,
        _request: Request<ListRequest>,
    ) -> Result<Response<ListResponse>, Status> {
        info!("Received 'list_all' request");

        let bots_data = {
            let manager = self
                .bot_manager
                .lock()
                .expect("Failed to acquire bot_manager lock");
            manager
                .bots
                .iter()
                .map(|(_, info)| BotInfo {
                    id: info.id.clone(),
                    name: info.name.clone(),
                    status: info.status.as_uint32(),
                    engine: info.engine.as_string(),
                    absolute_path: info.absolute_path.clone(),
                })
                .collect::<Vec<_>>()
        };

        info!("Bots available: {:#?}", &bots_data);
        Ok(Response::new(ListResponse { data: bots_data }))
    }

    async fn create_bot(
        &self,
        request: Request<CreateBotRequest>,
    ) -> Result<Response<CreateBotResponse>, Status> {
        let data = request.get_ref();
        info!("Received 'create_bot' request for bot: {}", data.name);

        let mut manager = self
            .bot_manager
            .lock()
            .expect("Failed to acquire bot_manager lock");

        match manager.add(&data.name) {
            Ok(bot) => {
                info!("Successfully created bot: {:#?}", bot);
                Ok(Response::new(CreateBotResponse::default()))
            }
            Err(e) => {
                info!("Failed to create bot: {:#?}", e);
                Err(Status::internal("Failed to create bot"))
            }
        }
    }
}
