import protoLoader from '@grpc/proto-loader';
import grpc from '@grpc/grpc-js';
import express from 'express';
import path from 'path';

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

export const clients = {
    bot: botClient,
    broadcast: broadcastClient
}

export default class CoreAbstraction {
    constructor(address: string) { }
}