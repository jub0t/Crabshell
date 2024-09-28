export interface ApplicationData {
    name: String,
    node_version: String,
}

export default class Application {
    private data: ApplicationData;

    constructor(data?: ApplicationData) {
        if (data != null) this.data = data;
        return this;
    }

    async initialize() { }

    update(data: ApplicationData) {
        this.data = data;
    }

    async status(): Promise<boolean> {
        return true;
    }

    async start(): Promise<{}> {
        return {}
    }

    async pause(): Promise<{}> {
        return {}
    }
}