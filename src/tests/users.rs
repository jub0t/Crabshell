#[cfg(test)]
mod tests {
    use crate::database::{self, User};
    use std::borrow::Cow;
    use surrealdb::{engine::local::Mem, Surreal};

    #[tokio::test]
    async fn test_user_creation() {
        let connection = Surreal::new::<Mem>(()).await.unwrap();
        connection.use_ns("test").use_db("test").await.unwrap();

        let db = database::new(connection).await.unwrap();
        let no_user = db.get_user_by_username("john".to_string()).await;
        assert!(no_user.is_none()); // Ensure the user doesn't exist initially

        let _ = db
            .create_user(User {
                is_admin: true,
                password: Cow::Borrowed("secrethehe"),
                username: Cow::Borrowed("john"),
            })
            .await;

        let yes_user = db.get_user_by_username("john".to_string()).await;
        assert!(yes_user.is_some()); // Ensure the user is created successfully
    }
}
