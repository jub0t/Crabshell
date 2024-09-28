#[derive(Clone, Copy, Eq, PartialEq)]
enum NvmError {
    NOT_INSTALLED,
}

#[derive(Clone, Copy, Eq, PartialEq)]
enum NodeError {
    NOT_INSTALLED,
    VERSION_NON_FOUND,
}
