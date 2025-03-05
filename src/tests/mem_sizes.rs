#[cfg(test)]
mod tests {
    use crate::application::application::Bot;
    use tracing::info;

    #[tokio::test]
    async fn test_struct_sizes() {
        info!("Size of Bot Struct: {:#?}", std::mem::size_of::<Bot>());
        info!(
            "Size of std::process::Child Struct: {:#?}",
            std::mem::size_of::<std::process::Child>()
        );
    }
}
