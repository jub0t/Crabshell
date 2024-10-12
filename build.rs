fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().compile_protos(
        &[
            "proto/bot.proto",
            "proto/echo.proto",
            "proto/broadcast.proto",
        ],
        &["proto/"],
    )?;
    Ok(())
}
