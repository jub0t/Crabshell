use std::sync::Arc;

use tokio::sync::Mutex; // instead of std::sync::Mutex

use argon2::{self, Argon2, PasswordHash, PasswordVerifier};
use tonic::{Request, Response, Status};
use tracing::info;

use super::application::{
    application_server::Application, BotInfo, CreateBotRequest, CreateBotResponse, ListRequest,
    ListResponse, StartRequest, StartResponse, UpdateStatusRequest, UpdateStatusResponse,
};
use crate::{
    application::manager::SharedBotManager,
    core::application::{AuthenticationBody, AuthenticationResponse},
    database::DatabaseWrapper,
};

pub struct MyApplication {
    bot_manager: SharedBotManager,
    db: Arc<Mutex<DatabaseWrapper>>,
}

impl MyApplication {
    pub fn new(bot_manager: SharedBotManager, db: Arc<Mutex<DatabaseWrapper>>) -> Self {
        Self { bot_manager, db }
    }
    // ... service implementation, using `self.db` to access database
}

#[tonic::async_trait]
impl Application for MyApplication {
    // TODO: might remove this later
    async fn start(
        &self,
        _request: Request<StartRequest>,
    ) -> Result<Response<StartResponse>, Status> {
        info!("Received 'start' request");
        let reply = StartResponse { success: true };
        Ok(Response::new(reply))
    }

    async fn update_status(
        &self,
        request: Request<UpdateStatusRequest>,
    ) -> Result<Response<UpdateStatusResponse>, Status> {
        info!("Received 'update_status' request");
        let data = request.get_ref();
        let bot_id = &data.bot_id;
        let new_status = &data.status;

        let mut manager = self
            .bot_manager
            .lock()
            .expect("Failed to acquire bot_manager lock");

        info!("Application {:?} Status Updated: {:?}", bot_id, new_status);
        match new_status {
            0 => {
                let _ = manager.start(bot_id);
            }

            1 => {
                // Stop
                let _ = manager.stop(bot_id);
            }

            2 => {
                let _ = manager.restart(bot_id);
                // Restart
            }

            _ => {
                // Invalid request
            }
        }

        return Ok(Response::new(UpdateStatusResponse::default()));
    }

    async fn authenticate(
        &self,
        request: Request<AuthenticationBody>,
    ) -> Result<Response<AuthenticationResponse>, Status> {
        let data = request.get_ref();
        let username = &data.username;
        let password = &data.password;
        let db = self.db.lock().await;

        // Search for 'username' record.
        let user_result = db.get_user_by_username(username.to_string()).await;

        let Some(user) = user_result else {
            return Ok(Response::new(AuthenticationResponse {
                success: false,
                token: String::new(),
            }));
        };

        let parsed_hash = PasswordHash::new(password).unwrap();
        let pass_matches = Argon2::default()
            .verify_password(password.as_bytes(), &parsed_hash)
            .is_ok();

        if pass_matches {
            let access_token = db
                .get_or_create_access_token_by_username(username.to_string())
                .await;

            match access_token {
                Err(e) => {}
                Ok(token) => {
                    return Ok(Response::new(AuthenticationResponse {
                        success: false,
                        token: String::new(),
                    }));
                }
            }

            return Ok(Response::new(AuthenticationResponse {
                success: false,
                token: String::new(),
            }));
        } else {
            Ok(Response::new(AuthenticationResponse {
                success: false,
                token: String::new(),
            }))
        }
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
            Some(bot) => {
                info!("Successfully created bot: {:#?}", bot.id);
                Ok(Response::new(CreateBotResponse {
                    id: bot.id.to_owned(),
                    success: true,
                }))
            }
            None => {
                // info!("Failed to create bot: {:#?}", e);
                Ok(Response::new(CreateBotResponse::default()))
            }
        }
    }
}
