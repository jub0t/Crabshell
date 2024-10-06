use std::{process::exit, thread, time::Duration};

pub fn start() {
    // tonic_build::configure()
    //     .compile(&["proto/bot.proto"], &["proto"])
    //     .unwrap_or_else(|e| panic!("Failed to compile protos: {:?}", e));

    // Spawn the thread
    let _t = thread::spawn(move || {
        loop {
            // Simulate work or sleep to prevent CPU overload
            println!("Thread is running...");
            thread::sleep(Duration::from_secs(1));
        }
    });

    // No join(), letting the thread run in the background
}
