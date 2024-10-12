const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const express = require("express")
const path = require('path');
const app = express()

const PROTO_PATH = path.resolve('../proto/bot/bot.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const botProto = grpc.loadPackageDefinition(packageDefinition).bot;
const client = new botProto.Application('localhost:50051', grpc.credentials.createInsecure());

app.get("/", (req, res) => {
    const start = new Date();
    const request = {
        bot_id: '12345'
    };

    client.Start(request, (error, response) => {
        if (!error) {
            res.json({
                time: new Date() - start,
                data: response
            })
        } else {
            console.error('Error:', error);
        }
    });
})

app.listen(9291, function () {
    console.log(`Live at http://127.0.0.1:9291`)
})