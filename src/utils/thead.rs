use std::sync::{Arc, Mutex, RwLock};

pub fn to_arc_mutex<T>(data: T) -> Arc<Mutex<T>> {
    return Arc::new(Mutex::new(data));
}

pub fn to_arc_rwlock<T>(data: T) -> Arc<RwLock<T>> {
    return Arc::new(RwLock::new(data));
}
