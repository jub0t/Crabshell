const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const express = require('express');
const path = require('path');
const app = express();

// Load the .proto files and define package
const packageDefinition = protoLoader.loadSync([
    path.resolve('../proto/bot.proto'),
    path.resolve('../proto/broadcast.proto'),  // The broadcast proto for Subscribe
    path.resolve('../proto/echo.proto')
], {
    keepCase: true,
    longs: String,
    enums: String,
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
const call = broadcastClient.Subscribe({});  // Call Subscribe from broadcast package

call.on('data', (response: { message: string }) => {
    console.log('Received:', response.message);
});

call.on('end', () => {
    console.log('Stream ended');
});

call.on('error', (e) => {
    console.error('Error:', e.message);
});

// HTTP Route for Start Request (bot service)
app.get('/', (req, res) => {
    const start = new Date();
    const request = {
        bot_id: '12345'  // Send bot_id or any necessary request parameters
    };

    // gRPC Unary call to Start in the bot service
    botClient.Start(request, (error: any, response: any) => {
        if (!error) {
            res.json({
                time: new Date().getTime() - start.getTime(),  // Return time taken for request
                data: response  // Response from gRPC server
            });
        } else {
            console.error('Error:', error);
            res.status(500).json({ error: error.message });
        }
    });
});

// Start Express server
app.listen(9291, function () {
    console.log(`Live at http://127.0.0.1:9291`);
});
