import { clients } from "./core";
import { Engine } from "./enums";

export interface BotData {
    // id: string;
    // name: string;
    // engine: Engine;
    // status: "running" | "stopped" | "error";
}

export interface CreateBotOptions {
    name: string;
    engine: Engine;
}

export interface UpdateBotOptions extends CreateBotOptions { }

export class BotInstance {
    public isRunning: boolean | null = null;
    public data: BotData;

    constructor(data: BotData) {
        this.data = data;
    }

    async initialize() {
        // Initialization logic
    }

    async update(newOptions: UpdateBotOptions) {
        // TODO: Send request to update bot
    }

    async start() {
        // TODO: Start bot logic
    }

    async stop() {
        // TODO: Stop bot logic
    }

    async restart() {
        // TODO: Restart bot logic
    }

    async is_running(): Promise<boolean> {
        return this.isRunning ?? false;
    }
}

class Cancala {
    async find_bot_by_id(botId: string): Promise<BotInstance | null> {
        // TODO: Fetch bot data from backend
        return null;
    }

    async fetch_all(): Promise<BotInstance[]> {
        // TODO: Fetch all bots from backend
        return [];
    }

    async create(options: CreateBotOptions): Promise<BotInstance | null> {
        return new Promise((resolve, reject) => {
            clients.bot.createBot(options, (err, resp) => {
                if (err) {
                    console.error("Error creating bot:", err);
                    return reject(err);
                }
                if (!resp) {
                    console.error("No response received.");
                    return reject(new Error("No response received."));
                }

                try {
                    resolve(new BotInstance(resp.data));
                } catch (error) {
                    console.error("Error processing response:", error);
                    reject(error);
                }
            });
        });
    }
}

export default Cancala;
