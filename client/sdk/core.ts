import protoLoader from '@grpc/proto-loader';
import grpcjs from '@grpc/grpc-js';
import path from 'path';

// Load the .proto files and define package
const packageDefinition = protoLoader.loadSync([
    path.resolve('../proto/broadcast.proto'),
    path.resolve('../proto/system.proto'),
    path.resolve('../proto/bot.proto'),
], {
    longs: String,
    enums: Number, // Maybe String?
    keepCase: true,
    defaults: true,
    oneofs: true
});

// Load both bot and broadcast services
const protoBot = grpcjs.loadPackageDefinition(packageDefinition).bot;  // 'bot' package
const protoBroadcast = grpcjs.loadPackageDefinition(packageDefinition).broadcast;  // 'broadcast' package

// gRPC client for bot and broadcast services
const botClient = new protoBot.Application('localhost:50051', grpcjs.credentials.createInsecure());
const broadcastClient = new protoBroadcast.BroadcastService('localhost:50051', grpcjs.credentials.createInsecure());  // Use broadcast service client

export const clients = {
    bot: botClient,
    broadcast: broadcastClient
}

export default class CoreAbstraction {
    constructor(address: string) { }
}