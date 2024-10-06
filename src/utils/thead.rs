use std::sync::{Arc, Mutex};

pub fn to_arc_mutex<T>(data: T) -> Arc<Mutex<T>> {
    return Arc::new(Mutex::new(data));
}
