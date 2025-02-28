import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import path from 'path';

// TODO: make this loading static, relying on reading and compiling proto files
// just in time slows down performance

// gRPC service definitions
const PROTO_FILES = ['broadcast.proto', 'system.proto', 'bot.proto'];
const PROTO_PATHS = PROTO_FILES.map(file => path.resolve('../proto', file));

const packageDefinition = protoLoader.loadSync(PROTO_PATHS, {
    longs: String,
    enums: String,
    keepCase: true,
    defaults: true,
    oneofs: true,
});

const grpcPackage = grpc.loadPackageDefinition(packageDefinition);

// Initialize gRPC clients
export const clients = {
    bot: new grpcPackage.bot.Application('localhost:50051', grpc.credentials.createInsecure()),
    broadcast: new grpcPackage.broadcast.BroadcastService('localhost:50051', grpc.credentials.createInsecure()),
};

export default class GRPCClient {
    public clients: {
        bot: any;
        broadcast: any;
    }

    constructor() {
        this.clients = clients;
    }
};
