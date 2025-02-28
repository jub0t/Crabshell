protos:
	protoc --js_out=import_style=commonjs,binary:./client/libs/ ./proto/bot.proto ./proto/broadcast.proto