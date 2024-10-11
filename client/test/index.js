const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Use path.resolve to define the path to the proto file relative to the current file
const PROTO_PATH = path.resolve('../proto/bot/bot.proto');

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const botProto = grpc.loadPackageDefinition(packageDefinition).bot;

// Create a gRPC client
const client = new botProto.Application('localhost:50051', grpc.credentials.createInsecure());

// Make a request
const request = {
    bot_id: '12345'
};

client.Start(request, (error, response) => {
    if (!error) {
        console.log('Response:', response);
    } else {
        console.error('Error:', error);
    }
});
