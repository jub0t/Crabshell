fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().compile(&["proto/bot/bot.proto"], &["proto/bot/"])?;
    Ok(())
}
