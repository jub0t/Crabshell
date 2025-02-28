import { BrowserHeaders } from "browser-headers";
import { clients } from "./core";
import { Engine } from "./enums";

export interface BotData {
    // Define the structure of BotData here, based on what response.data contains
}

export interface CreateBotOptions {
    name: string;
    engine: Engine;
}

export interface UpdateBotOptions extends CreateBotOptions {
}

export class BotInstance {
    public isRunning: boolean | null = null;
    public data: BotData;

    constructor(data: BotData) {
        this.data = data;
    }

    async initialize() {
        // Initialization logic
    }

    async update(new_options: UpdateBotOptions) {
        // TODO
    }

    async start() { }
    async stop() { }
    async restart() { }

    // Misc functions
    async is_running(): Promise<boolean> {
        // TODO
        return false;
    }
}

class Cancala {
    // Create new bot instance
    async find_bot_by_id(botId: string): Promise<BotInstance | null> {
        return null
    };

    async fetch_all(): Promise<BotInstance[]> {
        return []
    };

    async create(options: CreateBotOptions): Promise<BotInstance | null> {
        try {
            return await new Promise(async (resolve, reject) => {
                const headers = new BrowserHeaders()

                try {
                    const response = await clients.bot.CreateBot({
                        name: options.name,
                        engine: options.engine
                    }, headers);
                } catch (err) {
                    console.error(err)
                }
            });
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    }
}

export default Cancala;