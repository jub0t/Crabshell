real:
	protoc -I=proto --ts_out=client/libs/ bot.proto broadcast.proto system.proto
	protoc -I=proto --ts_proto_out=client/libs/ bot.proto broadcast.proto system.proto

build:
	npx buf generate --template ./configs/buf.gen.yaml

full:
	protoc -I=proto --ts_out=client/libs --ts_opt=generate_package_definition --grpc-web_out=import_style=typescript,mode=grpcwebtext:client/libs bot.proto broadcast.proto system.proto

a:
	npx grpc_tools_node_protoc --ts_out=import_style=commonjs,binary:./libs --grpc_out=./libs --proto_path=../proto broadcast.proto system.proto bot.proto
	npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./libs --grpc_out=./libs --proto_path=../proto broadcast.proto system.proto bot.proto

self:
	npx pbjs -t static-module -w es6 bot.proto broadcast.proto system.proto -o ../client/sdk/proto.ts