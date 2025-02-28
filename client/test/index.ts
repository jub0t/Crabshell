import protoLoader from '@grpc/proto-loader';
import grpc from '@grpc/grpc-js';
import express from 'express';
import path from 'path';
import Cancala from '../sdk';
import { Engine } from '../sdk/enums';
const app = express();

const can = new Cancala()
// Load the .proto files and define package
const packageDefinition = protoLoader.loadSync([
    path.resolve('../proto/broadcast.proto'),
    path.resolve('../proto/system.proto'),
    path.resolve('../proto/bot.proto'),
], {
    longs: String,
    enums: String,
    keepCase: true,
    defaults: true,
    oneofs: true
});

// Load both bot and broadcast services
const protoBot = grpc.loadPackageDefinition(packageDefinition).bot;  // 'bot' package
const protoBroadcast = grpc.loadPackageDefinition(packageDefinition).broadcast;  // 'broadcast' package

// gRPC client for bot and broadcast services
const botClient = new protoBot.Application('localhost:50051', grpc.credentials.createInsecure());
const broadcastClient = new protoBroadcast.BroadcastService('localhost:50051', grpc.credentials.createInsecure());  // Use broadcast service client

// Subscribe to broadcast messages from the server (broadcast service)
const call = broadcastClient.Subscribe({});

call.on('data', (response: { message: string }) => {
    console.log('Received:', response.message);
});

call.on('end', () => {
    console.log('Stream ended');
});

call.on('error', (e) => {
    console.error('Error:', e);
    // Connection broke from the server, reconnect?
    if (e.code == 14) {
        // Reconnect logic
    }
});

app.get("/create-dummy", async (req, res) => {
    const start = new Date();

    const bot = await can.create({
        name: "Master Machine",
        engine: Engine.Node,
    })

    console.log(bot)

    if (bot != null) {
        console.log(bot)
        return res.json({
            success: true,
            time: new Date().getTime() - start.getTime(),
            data: bot
        })
    } else {
        res.status(500).json({ success: false });
    }
})

app.get("/fake-io", (req, res) => {
    const text = req.query.text;
    console.log(text)
})

// HTTP Route for Start Request (bot service)
app.get('/', (req, res) => {
    botClient.ListAll({}, (error: any, response: any) => {
        if (!error) {
            res.json({
                success: true,
                data: response.data  // Response from gRPC server
            });
        } else {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: error.code });
        }
    });
});

const random_port = 7200;
app.listen(random_port, function () {
    console.log(`Live at http://127.0.0.1:${random_port}`);
});
