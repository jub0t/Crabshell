use rusqlite::Connection;

struct DatabaseWrapper {
    conn: Connection,
}

pub async fn new(conn: Connection) -> DatabaseWrapper {
    let db = Surreal::new::<Mem>(()).await?;
    db.use_ns("test").use_db("test").await?;

    return DatabaseWrapper { conn };
}

// TODO: Tokens
// TODO: Users
// TODO: Bots

impl DatabaseWrapper {}
