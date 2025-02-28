fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().compile_protos(
        &[
            "proto/application.proto",
            "proto/broadcast.proto",
            "proto/system.proto",
            "proto/database.proto",
        ],
        &["proto/"],
    )?;
    Ok(())
}
