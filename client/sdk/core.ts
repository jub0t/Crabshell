import grpc from "@grpc/grpc-js";
import { CreateBotRequest, CreateBotResponse } from "../libs/bot"; // Adjust import path accordingly

const SERVICE_ADDRESS = "localhost:50051";

const client = new grpc.Client(SERVICE_ADDRESS, grpc.credentials.createInsecure());

class BotAbstraction {
    constructor() { }

    async CreateBot(options: CreateBotRequest): Promise<CreateBotResponse> {
        try {
            const requestPayload = CreateBotRequest.encode(options).finish();

            return await new Promise((resolve, reject) => {
                client.makeUnaryRequest(
                    "/Application/CreateBot",
                    (arg) => arg, // No transformation needed for request
                    CreateBotResponse.decode,
                    requestPayload,
                    (error, response) => {
                        if (error) {
                            console.error(error)
                            reject(error);
                        } else {
                            resolve(response);
                        }
                    }
                );
            });
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const clients = {
    bot: new BotAbstraction()
};
