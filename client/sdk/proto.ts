/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const bot = $root.bot = (() => {

    /**
     * Namespace bot.
     * @exports bot
     * @namespace
     */
    const bot = {};

    bot.Application = (function() {

        /**
         * Constructs a new Application service.
         * @memberof bot
         * @classdesc Represents an Application
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Application(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Application.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Application;

        /**
         * Creates new Application service using the specified rpc implementation.
         * @function create
         * @memberof bot.Application
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Application} RPC service. Useful where requests and/or responses are streamed.
         */
        Application.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link bot.Application#start}.
         * @memberof bot.Application
         * @typedef StartCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {bot.StartResponse} [response] StartResponse
         */

        /**
         * Calls Start.
         * @function start
         * @memberof bot.Application
         * @instance
         * @param {bot.IStartRequest} request StartRequest message or plain object
         * @param {bot.Application.StartCallback} callback Node-style callback called with the error, if any, and StartResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Application.prototype.start = function start(request, callback) {
            return this.rpcCall(start, $root.bot.StartRequest, $root.bot.StartResponse, request, callback);
        }, "name", { value: "Start" });

        /**
         * Calls Start.
         * @function start
         * @memberof bot.Application
         * @instance
         * @param {bot.IStartRequest} request StartRequest message or plain object
         * @returns {Promise<bot.StartResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link bot.Application#listAll}.
         * @memberof bot.Application
         * @typedef ListAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {bot.ListResponse} [response] ListResponse
         */

        /**
         * Calls ListAll.
         * @function listAll
         * @memberof bot.Application
         * @instance
         * @param {bot.IListRequest} request ListRequest message or plain object
         * @param {bot.Application.ListAllCallback} callback Node-style callback called with the error, if any, and ListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Application.prototype.listAll = function listAll(request, callback) {
            return this.rpcCall(listAll, $root.bot.ListRequest, $root.bot.ListResponse, request, callback);
        }, "name", { value: "ListAll" });

        /**
         * Calls ListAll.
         * @function listAll
         * @memberof bot.Application
         * @instance
         * @param {bot.IListRequest} request ListRequest message or plain object
         * @returns {Promise<bot.ListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link bot.Application#createBot}.
         * @memberof bot.Application
         * @typedef CreateBotCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {bot.CreateBotResponse} [response] CreateBotResponse
         */

        /**
         * Calls CreateBot.
         * @function createBot
         * @memberof bot.Application
         * @instance
         * @param {bot.ICreateBotRequest} request CreateBotRequest message or plain object
         * @param {bot.Application.CreateBotCallback} callback Node-style callback called with the error, if any, and CreateBotResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Application.prototype.createBot = function createBot(request, callback) {
            return this.rpcCall(createBot, $root.bot.CreateBotRequest, $root.bot.CreateBotResponse, request, callback);
        }, "name", { value: "CreateBot" });

        /**
         * Calls CreateBot.
         * @function createBot
         * @memberof bot.Application
         * @instance
         * @param {bot.ICreateBotRequest} request CreateBotRequest message or plain object
         * @returns {Promise<bot.CreateBotResponse>} Promise
         * @variation 2
         */

        return Application;
    })();

    bot.CreateBotRequest = (function() {

        /**
         * Properties of a CreateBotRequest.
         * @memberof bot
         * @interface ICreateBotRequest
         * @property {string|null} [name] CreateBotRequest name
         * @property {number|null} [engine] CreateBotRequest engine
         */

        /**
         * Constructs a new CreateBotRequest.
         * @memberof bot
         * @classdesc Represents a CreateBotRequest.
         * @implements ICreateBotRequest
         * @constructor
         * @param {bot.ICreateBotRequest=} [properties] Properties to set
         */
        function CreateBotRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateBotRequest name.
         * @member {string} name
         * @memberof bot.CreateBotRequest
         * @instance
         */
        CreateBotRequest.prototype.name = "";

        /**
         * CreateBotRequest engine.
         * @member {number} engine
         * @memberof bot.CreateBotRequest
         * @instance
         */
        CreateBotRequest.prototype.engine = 0;

        /**
         * Creates a new CreateBotRequest instance using the specified properties.
         * @function create
         * @memberof bot.CreateBotRequest
         * @static
         * @param {bot.ICreateBotRequest=} [properties] Properties to set
         * @returns {bot.CreateBotRequest} CreateBotRequest instance
         */
        CreateBotRequest.create = function create(properties) {
            return new CreateBotRequest(properties);
        };

        /**
         * Encodes the specified CreateBotRequest message. Does not implicitly {@link bot.CreateBotRequest.verify|verify} messages.
         * @function encode
         * @memberof bot.CreateBotRequest
         * @static
         * @param {bot.ICreateBotRequest} message CreateBotRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.engine != null && Object.hasOwnProperty.call(message, "engine"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.engine);
            return writer;
        };

        /**
         * Encodes the specified CreateBotRequest message, length delimited. Does not implicitly {@link bot.CreateBotRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.CreateBotRequest
         * @static
         * @param {bot.ICreateBotRequest} message CreateBotRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBotRequest message from the specified reader or buffer.
         * @function decode
         * @memberof bot.CreateBotRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.CreateBotRequest} CreateBotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.CreateBotRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.engine = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBotRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.CreateBotRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.CreateBotRequest} CreateBotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBotRequest message.
         * @function verify
         * @memberof bot.CreateBotRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBotRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.engine != null && message.hasOwnProperty("engine"))
                if (!$util.isInteger(message.engine))
                    return "engine: integer expected";
            return null;
        };

        /**
         * Creates a CreateBotRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.CreateBotRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.CreateBotRequest} CreateBotRequest
         */
        CreateBotRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.CreateBotRequest)
                return object;
            let message = new $root.bot.CreateBotRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.engine != null)
                message.engine = object.engine | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateBotRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.CreateBotRequest
         * @static
         * @param {bot.CreateBotRequest} message CreateBotRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBotRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.engine = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.engine != null && message.hasOwnProperty("engine"))
                object.engine = message.engine;
            return object;
        };

        /**
         * Converts this CreateBotRequest to JSON.
         * @function toJSON
         * @memberof bot.CreateBotRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBotRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateBotRequest
         * @function getTypeUrl
         * @memberof bot.CreateBotRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateBotRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.CreateBotRequest";
        };

        return CreateBotRequest;
    })();

    bot.CreateBotResponse = (function() {

        /**
         * Properties of a CreateBotResponse.
         * @memberof bot
         * @interface ICreateBotResponse
         * @property {string|null} [id] CreateBotResponse id
         */

        /**
         * Constructs a new CreateBotResponse.
         * @memberof bot
         * @classdesc Represents a CreateBotResponse.
         * @implements ICreateBotResponse
         * @constructor
         * @param {bot.ICreateBotResponse=} [properties] Properties to set
         */
        function CreateBotResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateBotResponse id.
         * @member {string} id
         * @memberof bot.CreateBotResponse
         * @instance
         */
        CreateBotResponse.prototype.id = "";

        /**
         * Creates a new CreateBotResponse instance using the specified properties.
         * @function create
         * @memberof bot.CreateBotResponse
         * @static
         * @param {bot.ICreateBotResponse=} [properties] Properties to set
         * @returns {bot.CreateBotResponse} CreateBotResponse instance
         */
        CreateBotResponse.create = function create(properties) {
            return new CreateBotResponse(properties);
        };

        /**
         * Encodes the specified CreateBotResponse message. Does not implicitly {@link bot.CreateBotResponse.verify|verify} messages.
         * @function encode
         * @memberof bot.CreateBotResponse
         * @static
         * @param {bot.ICreateBotResponse} message CreateBotResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified CreateBotResponse message, length delimited. Does not implicitly {@link bot.CreateBotResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.CreateBotResponse
         * @static
         * @param {bot.ICreateBotResponse} message CreateBotResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBotResponse message from the specified reader or buffer.
         * @function decode
         * @memberof bot.CreateBotResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.CreateBotResponse} CreateBotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.CreateBotResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBotResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.CreateBotResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.CreateBotResponse} CreateBotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBotResponse message.
         * @function verify
         * @memberof bot.CreateBotResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBotResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a CreateBotResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.CreateBotResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.CreateBotResponse} CreateBotResponse
         */
        CreateBotResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.CreateBotResponse)
                return object;
            let message = new $root.bot.CreateBotResponse();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a CreateBotResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.CreateBotResponse
         * @static
         * @param {bot.CreateBotResponse} message CreateBotResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBotResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this CreateBotResponse to JSON.
         * @function toJSON
         * @memberof bot.CreateBotResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBotResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateBotResponse
         * @function getTypeUrl
         * @memberof bot.CreateBotResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateBotResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.CreateBotResponse";
        };

        return CreateBotResponse;
    })();

    bot.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof bot
         * @interface IListRequest
         */

        /**
         * Constructs a new ListRequest.
         * @memberof bot
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {bot.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListRequest instance using the specified properties.
         * @function create
         * @memberof bot.ListRequest
         * @static
         * @param {bot.IListRequest=} [properties] Properties to set
         * @returns {bot.ListRequest} ListRequest instance
         */
        ListRequest.create = function create(properties) {
            return new ListRequest(properties);
        };

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link bot.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof bot.ListRequest
         * @static
         * @param {bot.IListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListRequest message, length delimited. Does not implicitly {@link bot.ListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.ListRequest
         * @static
         * @param {bot.IListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof bot.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListRequest message.
         * @function verify
         * @memberof bot.ListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.ListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.ListRequest} ListRequest
         */
        ListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.ListRequest)
                return object;
            return new $root.bot.ListRequest();
        };

        /**
         * Creates a plain object from a ListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.ListRequest
         * @static
         * @param {bot.ListRequest} message ListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListRequest to JSON.
         * @function toJSON
         * @memberof bot.ListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof bot.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.ListRequest";
        };

        return ListRequest;
    })();

    bot.BotInfo = (function() {

        /**
         * Properties of a BotInfo.
         * @memberof bot
         * @interface IBotInfo
         * @property {string|null} [id] BotInfo id
         * @property {string|null} [name] BotInfo name
         * @property {string|null} [absolutePath] BotInfo absolutePath
         * @property {number|null} [status] BotInfo status
         * @property {string|null} [engine] BotInfo engine
         */

        /**
         * Constructs a new BotInfo.
         * @memberof bot
         * @classdesc Represents a BotInfo.
         * @implements IBotInfo
         * @constructor
         * @param {bot.IBotInfo=} [properties] Properties to set
         */
        function BotInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BotInfo id.
         * @member {string} id
         * @memberof bot.BotInfo
         * @instance
         */
        BotInfo.prototype.id = "";

        /**
         * BotInfo name.
         * @member {string} name
         * @memberof bot.BotInfo
         * @instance
         */
        BotInfo.prototype.name = "";

        /**
         * BotInfo absolutePath.
         * @member {string|null|undefined} absolutePath
         * @memberof bot.BotInfo
         * @instance
         */
        BotInfo.prototype.absolutePath = null;

        /**
         * BotInfo status.
         * @member {number} status
         * @memberof bot.BotInfo
         * @instance
         */
        BotInfo.prototype.status = 0;

        /**
         * BotInfo engine.
         * @member {string} engine
         * @memberof bot.BotInfo
         * @instance
         */
        BotInfo.prototype.engine = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotInfo.prototype, "_absolutePath", {
            get: $util.oneOfGetter($oneOfFields = ["absolutePath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BotInfo instance using the specified properties.
         * @function create
         * @memberof bot.BotInfo
         * @static
         * @param {bot.IBotInfo=} [properties] Properties to set
         * @returns {bot.BotInfo} BotInfo instance
         */
        BotInfo.create = function create(properties) {
            return new BotInfo(properties);
        };

        /**
         * Encodes the specified BotInfo message. Does not implicitly {@link bot.BotInfo.verify|verify} messages.
         * @function encode
         * @memberof bot.BotInfo
         * @static
         * @param {bot.IBotInfo} message BotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.absolutePath != null && Object.hasOwnProperty.call(message, "absolutePath"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.absolutePath);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.status);
            if (message.engine != null && Object.hasOwnProperty.call(message, "engine"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.engine);
            return writer;
        };

        /**
         * Encodes the specified BotInfo message, length delimited. Does not implicitly {@link bot.BotInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.BotInfo
         * @static
         * @param {bot.IBotInfo} message BotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BotInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BotInfo message from the specified reader or buffer.
         * @function decode
         * @memberof bot.BotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.BotInfo} BotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.BotInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.absolutePath = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.uint32();
                        break;
                    }
                case 5: {
                        message.engine = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BotInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.BotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.BotInfo} BotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BotInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BotInfo message.
         * @function verify
         * @memberof bot.BotInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BotInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.absolutePath != null && message.hasOwnProperty("absolutePath")) {
                properties._absolutePath = 1;
                if (!$util.isString(message.absolutePath))
                    return "absolutePath: string expected";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.engine != null && message.hasOwnProperty("engine"))
                if (!$util.isString(message.engine))
                    return "engine: string expected";
            return null;
        };

        /**
         * Creates a BotInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.BotInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.BotInfo} BotInfo
         */
        BotInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.BotInfo)
                return object;
            let message = new $root.bot.BotInfo();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.absolutePath != null)
                message.absolutePath = String(object.absolutePath);
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.engine != null)
                message.engine = String(object.engine);
            return message;
        };

        /**
         * Creates a plain object from a BotInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.BotInfo
         * @static
         * @param {bot.BotInfo} message BotInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BotInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.status = 0;
                object.engine = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.absolutePath != null && message.hasOwnProperty("absolutePath")) {
                object.absolutePath = message.absolutePath;
                if (options.oneofs)
                    object._absolutePath = "absolutePath";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.engine != null && message.hasOwnProperty("engine"))
                object.engine = message.engine;
            return object;
        };

        /**
         * Converts this BotInfo to JSON.
         * @function toJSON
         * @memberof bot.BotInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BotInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BotInfo
         * @function getTypeUrl
         * @memberof bot.BotInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BotInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.BotInfo";
        };

        return BotInfo;
    })();

    bot.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof bot
         * @interface IListResponse
         * @property {Array.<bot.IBotInfo>|null} [data] ListResponse data
         */

        /**
         * Constructs a new ListResponse.
         * @memberof bot
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {bot.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse data.
         * @member {Array.<bot.IBotInfo>} data
         * @memberof bot.ListResponse
         * @instance
         */
        ListResponse.prototype.data = $util.emptyArray;

        /**
         * Creates a new ListResponse instance using the specified properties.
         * @function create
         * @memberof bot.ListResponse
         * @static
         * @param {bot.IListResponse=} [properties] Properties to set
         * @returns {bot.ListResponse} ListResponse instance
         */
        ListResponse.create = function create(properties) {
            return new ListResponse(properties);
        };

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link bot.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof bot.ListResponse
         * @static
         * @param {bot.IListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (let i = 0; i < message.data.length; ++i)
                    $root.bot.BotInfo.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListResponse message, length delimited. Does not implicitly {@link bot.ListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.ListResponse
         * @static
         * @param {bot.IListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof bot.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.bot.BotInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListResponse message.
         * @function verify
         * @memberof bot.ListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (let i = 0; i < message.data.length; ++i) {
                    let error = $root.bot.BotInfo.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.ListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.ListResponse} ListResponse
         */
        ListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.ListResponse)
                return object;
            let message = new $root.bot.ListResponse();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".bot.ListResponse.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".bot.ListResponse.data: object expected");
                    message.data[i] = $root.bot.BotInfo.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.ListResponse
         * @static
         * @param {bot.ListResponse} message ListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.bot.BotInfo.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this ListResponse to JSON.
         * @function toJSON
         * @memberof bot.ListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof bot.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.ListResponse";
        };

        return ListResponse;
    })();

    bot.StartRequest = (function() {

        /**
         * Properties of a StartRequest.
         * @memberof bot
         * @interface IStartRequest
         * @property {string|null} [botId] StartRequest botId
         */

        /**
         * Constructs a new StartRequest.
         * @memberof bot
         * @classdesc Represents a StartRequest.
         * @implements IStartRequest
         * @constructor
         * @param {bot.IStartRequest=} [properties] Properties to set
         */
        function StartRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartRequest botId.
         * @member {string} botId
         * @memberof bot.StartRequest
         * @instance
         */
        StartRequest.prototype.botId = "";

        /**
         * Creates a new StartRequest instance using the specified properties.
         * @function create
         * @memberof bot.StartRequest
         * @static
         * @param {bot.IStartRequest=} [properties] Properties to set
         * @returns {bot.StartRequest} StartRequest instance
         */
        StartRequest.create = function create(properties) {
            return new StartRequest(properties);
        };

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link bot.StartRequest.verify|verify} messages.
         * @function encode
         * @memberof bot.StartRequest
         * @static
         * @param {bot.IStartRequest} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.botId);
            return writer;
        };

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link bot.StartRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.StartRequest
         * @static
         * @param {bot.IStartRequest} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @function decode
         * @memberof bot.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.StartRequest} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.StartRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.botId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.StartRequest} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartRequest message.
         * @function verify
         * @memberof bot.StartRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isString(message.botId))
                    return "botId: string expected";
            return null;
        };

        /**
         * Creates a StartRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.StartRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.StartRequest} StartRequest
         */
        StartRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.StartRequest)
                return object;
            let message = new $root.bot.StartRequest();
            if (object.botId != null)
                message.botId = String(object.botId);
            return message;
        };

        /**
         * Creates a plain object from a StartRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.StartRequest
         * @static
         * @param {bot.StartRequest} message StartRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.botId = "";
            if (message.botId != null && message.hasOwnProperty("botId"))
                object.botId = message.botId;
            return object;
        };

        /**
         * Converts this StartRequest to JSON.
         * @function toJSON
         * @memberof bot.StartRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartRequest
         * @function getTypeUrl
         * @memberof bot.StartRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.StartRequest";
        };

        return StartRequest;
    })();

    bot.StartResponse = (function() {

        /**
         * Properties of a StartResponse.
         * @memberof bot
         * @interface IStartResponse
         * @property {boolean|null} [success] StartResponse success
         */

        /**
         * Constructs a new StartResponse.
         * @memberof bot
         * @classdesc Represents a StartResponse.
         * @implements IStartResponse
         * @constructor
         * @param {bot.IStartResponse=} [properties] Properties to set
         */
        function StartResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartResponse success.
         * @member {boolean} success
         * @memberof bot.StartResponse
         * @instance
         */
        StartResponse.prototype.success = false;

        /**
         * Creates a new StartResponse instance using the specified properties.
         * @function create
         * @memberof bot.StartResponse
         * @static
         * @param {bot.IStartResponse=} [properties] Properties to set
         * @returns {bot.StartResponse} StartResponse instance
         */
        StartResponse.create = function create(properties) {
            return new StartResponse(properties);
        };

        /**
         * Encodes the specified StartResponse message. Does not implicitly {@link bot.StartResponse.verify|verify} messages.
         * @function encode
         * @memberof bot.StartResponse
         * @static
         * @param {bot.IStartResponse} message StartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified StartResponse message, length delimited. Does not implicitly {@link bot.StartResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bot.StartResponse
         * @static
         * @param {bot.IStartResponse} message StartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartResponse message from the specified reader or buffer.
         * @function decode
         * @memberof bot.StartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bot.StartResponse} StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bot.StartResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bot.StartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bot.StartResponse} StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartResponse message.
         * @function verify
         * @memberof bot.StartResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a StartResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bot.StartResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bot.StartResponse} StartResponse
         */
        StartResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.bot.StartResponse)
                return object;
            let message = new $root.bot.StartResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a StartResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bot.StartResponse
         * @static
         * @param {bot.StartResponse} message StartResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this StartResponse to JSON.
         * @function toJSON
         * @memberof bot.StartResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartResponse
         * @function getTypeUrl
         * @memberof bot.StartResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bot.StartResponse";
        };

        return StartResponse;
    })();

    return bot;
})();

export const broadcast = $root.broadcast = (() => {

    /**
     * Namespace broadcast.
     * @exports broadcast
     * @namespace
     */
    const broadcast = {};

    broadcast.BroadcastMessage = (function() {

        /**
         * Properties of a BroadcastMessage.
         * @memberof broadcast
         * @interface IBroadcastMessage
         * @property {string|null} [message] BroadcastMessage message
         */

        /**
         * Constructs a new BroadcastMessage.
         * @memberof broadcast
         * @classdesc Represents a BroadcastMessage.
         * @implements IBroadcastMessage
         * @constructor
         * @param {broadcast.IBroadcastMessage=} [properties] Properties to set
         */
        function BroadcastMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastMessage message.
         * @member {string} message
         * @memberof broadcast.BroadcastMessage
         * @instance
         */
        BroadcastMessage.prototype.message = "";

        /**
         * Creates a new BroadcastMessage instance using the specified properties.
         * @function create
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {broadcast.IBroadcastMessage=} [properties] Properties to set
         * @returns {broadcast.BroadcastMessage} BroadcastMessage instance
         */
        BroadcastMessage.create = function create(properties) {
            return new BroadcastMessage(properties);
        };

        /**
         * Encodes the specified BroadcastMessage message. Does not implicitly {@link broadcast.BroadcastMessage.verify|verify} messages.
         * @function encode
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {broadcast.IBroadcastMessage} message BroadcastMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified BroadcastMessage message, length delimited. Does not implicitly {@link broadcast.BroadcastMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {broadcast.IBroadcastMessage} message BroadcastMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastMessage message from the specified reader or buffer.
         * @function decode
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {broadcast.BroadcastMessage} BroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.broadcast.BroadcastMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {broadcast.BroadcastMessage} BroadcastMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastMessage message.
         * @function verify
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a BroadcastMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {broadcast.BroadcastMessage} BroadcastMessage
         */
        BroadcastMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.broadcast.BroadcastMessage)
                return object;
            let message = new $root.broadcast.BroadcastMessage();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a BroadcastMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {broadcast.BroadcastMessage} message BroadcastMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this BroadcastMessage to JSON.
         * @function toJSON
         * @memberof broadcast.BroadcastMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BroadcastMessage
         * @function getTypeUrl
         * @memberof broadcast.BroadcastMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BroadcastMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/broadcast.BroadcastMessage";
        };

        return BroadcastMessage;
    })();

    broadcast.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof broadcast
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof broadcast
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {broadcast.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof broadcast.Empty
         * @static
         * @param {broadcast.IEmpty=} [properties] Properties to set
         * @returns {broadcast.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link broadcast.Empty.verify|verify} messages.
         * @function encode
         * @memberof broadcast.Empty
         * @static
         * @param {broadcast.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link broadcast.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof broadcast.Empty
         * @static
         * @param {broadcast.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof broadcast.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {broadcast.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.broadcast.Empty();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof broadcast.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {broadcast.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof broadcast.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof broadcast.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {broadcast.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.broadcast.Empty)
                return object;
            return new $root.broadcast.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof broadcast.Empty
         * @static
         * @param {broadcast.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof broadcast.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof broadcast.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/broadcast.Empty";
        };

        return Empty;
    })();

    broadcast.BroadcastService = (function() {

        /**
         * Constructs a new BroadcastService service.
         * @memberof broadcast
         * @classdesc Represents a BroadcastService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function BroadcastService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (BroadcastService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BroadcastService;

        /**
         * Creates new BroadcastService service using the specified rpc implementation.
         * @function create
         * @memberof broadcast.BroadcastService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {BroadcastService} RPC service. Useful where requests and/or responses are streamed.
         */
        BroadcastService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link broadcast.BroadcastService#subscribe}.
         * @memberof broadcast.BroadcastService
         * @typedef SubscribeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {broadcast.BroadcastMessage} [response] BroadcastMessage
         */

        /**
         * Calls Subscribe.
         * @function subscribe
         * @memberof broadcast.BroadcastService
         * @instance
         * @param {broadcast.IEmpty} request Empty message or plain object
         * @param {broadcast.BroadcastService.SubscribeCallback} callback Node-style callback called with the error, if any, and BroadcastMessage
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(BroadcastService.prototype.subscribe = function subscribe(request, callback) {
            return this.rpcCall(subscribe, $root.broadcast.Empty, $root.broadcast.BroadcastMessage, request, callback);
        }, "name", { value: "Subscribe" });

        /**
         * Calls Subscribe.
         * @function subscribe
         * @memberof broadcast.BroadcastService
         * @instance
         * @param {broadcast.IEmpty} request Empty message or plain object
         * @returns {Promise<broadcast.BroadcastMessage>} Promise
         * @variation 2
         */

        return BroadcastService;
    })();

    return broadcast;
})();

export const system = $root.system = (() => {

    /**
     * Namespace system.
     * @exports system
     * @namespace
     */
    const system = {};

    system.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof system
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof system
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {system.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof system.Empty
         * @static
         * @param {system.IEmpty=} [properties] Properties to set
         * @returns {system.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link system.Empty.verify|verify} messages.
         * @function encode
         * @memberof system.Empty
         * @static
         * @param {system.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link system.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof system.Empty
         * @static
         * @param {system.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof system.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {system.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.Empty();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof system.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {system.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof system.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof system.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {system.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.system.Empty)
                return object;
            return new $root.system.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof system.Empty
         * @static
         * @param {system.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof system.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof system.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/system.Empty";
        };

        return Empty;
    })();

    system.SystemService = (function() {

        /**
         * Constructs a new SystemService service.
         * @memberof system
         * @classdesc Represents a SystemService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SystemService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SystemService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SystemService;

        /**
         * Creates new SystemService service using the specified rpc implementation.
         * @function create
         * @memberof system.SystemService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SystemService} RPC service. Useful where requests and/or responses are streamed.
         */
        SystemService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link system.SystemService#getSystemInfo}.
         * @memberof system.SystemService
         * @typedef GetSystemInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {system.SystemInfo} [response] SystemInfo
         */

        /**
         * Calls GetSystemInfo.
         * @function getSystemInfo
         * @memberof system.SystemService
         * @instance
         * @param {system.IEmpty} request Empty message or plain object
         * @param {system.SystemService.GetSystemInfoCallback} callback Node-style callback called with the error, if any, and SystemInfo
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SystemService.prototype.getSystemInfo = function getSystemInfo(request, callback) {
            return this.rpcCall(getSystemInfo, $root.system.Empty, $root.system.SystemInfo, request, callback);
        }, "name", { value: "GetSystemInfo" });

        /**
         * Calls GetSystemInfo.
         * @function getSystemInfo
         * @memberof system.SystemService
         * @instance
         * @param {system.IEmpty} request Empty message or plain object
         * @returns {Promise<system.SystemInfo>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link system.SystemService#getResourceUsage}.
         * @memberof system.SystemService
         * @typedef GetResourceUsageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {system.Resources} [response] Resources
         */

        /**
         * Calls GetResourceUsage.
         * @function getResourceUsage
         * @memberof system.SystemService
         * @instance
         * @param {system.IEmpty} request Empty message or plain object
         * @param {system.SystemService.GetResourceUsageCallback} callback Node-style callback called with the error, if any, and Resources
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SystemService.prototype.getResourceUsage = function getResourceUsage(request, callback) {
            return this.rpcCall(getResourceUsage, $root.system.Empty, $root.system.Resources, request, callback);
        }, "name", { value: "GetResourceUsage" });

        /**
         * Calls GetResourceUsage.
         * @function getResourceUsage
         * @memberof system.SystemService
         * @instance
         * @param {system.IEmpty} request Empty message or plain object
         * @returns {Promise<system.Resources>} Promise
         * @variation 2
         */

        return SystemService;
    })();

    system.Resources = (function() {

        /**
         * Properties of a Resources.
         * @memberof system
         * @interface IResources
         * @property {number|Long|null} [memoryUsed] Resources memoryUsed
         * @property {number|Long|null} [diskUsed] Resources diskUsed
         * @property {number|Long|null} [cpuUsed] Resources cpuUsed
         */

        /**
         * Constructs a new Resources.
         * @memberof system
         * @classdesc Represents a Resources.
         * @implements IResources
         * @constructor
         * @param {system.IResources=} [properties] Properties to set
         */
        function Resources(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Resources memoryUsed.
         * @member {number|Long} memoryUsed
         * @memberof system.Resources
         * @instance
         */
        Resources.prototype.memoryUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Resources diskUsed.
         * @member {number|Long} diskUsed
         * @memberof system.Resources
         * @instance
         */
        Resources.prototype.diskUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Resources cpuUsed.
         * @member {number|Long} cpuUsed
         * @memberof system.Resources
         * @instance
         */
        Resources.prototype.cpuUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Resources instance using the specified properties.
         * @function create
         * @memberof system.Resources
         * @static
         * @param {system.IResources=} [properties] Properties to set
         * @returns {system.Resources} Resources instance
         */
        Resources.create = function create(properties) {
            return new Resources(properties);
        };

        /**
         * Encodes the specified Resources message. Does not implicitly {@link system.Resources.verify|verify} messages.
         * @function encode
         * @memberof system.Resources
         * @static
         * @param {system.IResources} message Resources message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resources.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.memoryUsed != null && Object.hasOwnProperty.call(message, "memoryUsed"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.memoryUsed);
            if (message.diskUsed != null && Object.hasOwnProperty.call(message, "diskUsed"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.diskUsed);
            if (message.cpuUsed != null && Object.hasOwnProperty.call(message, "cpuUsed"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.cpuUsed);
            return writer;
        };

        /**
         * Encodes the specified Resources message, length delimited. Does not implicitly {@link system.Resources.verify|verify} messages.
         * @function encodeDelimited
         * @memberof system.Resources
         * @static
         * @param {system.IResources} message Resources message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resources.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Resources message from the specified reader or buffer.
         * @function decode
         * @memberof system.Resources
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {system.Resources} Resources
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resources.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.Resources();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.memoryUsed = reader.int64();
                        break;
                    }
                case 2: {
                        message.diskUsed = reader.int64();
                        break;
                    }
                case 3: {
                        message.cpuUsed = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Resources message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof system.Resources
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {system.Resources} Resources
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resources.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Resources message.
         * @function verify
         * @memberof system.Resources
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Resources.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.memoryUsed != null && message.hasOwnProperty("memoryUsed"))
                if (!$util.isInteger(message.memoryUsed) && !(message.memoryUsed && $util.isInteger(message.memoryUsed.low) && $util.isInteger(message.memoryUsed.high)))
                    return "memoryUsed: integer|Long expected";
            if (message.diskUsed != null && message.hasOwnProperty("diskUsed"))
                if (!$util.isInteger(message.diskUsed) && !(message.diskUsed && $util.isInteger(message.diskUsed.low) && $util.isInteger(message.diskUsed.high)))
                    return "diskUsed: integer|Long expected";
            if (message.cpuUsed != null && message.hasOwnProperty("cpuUsed"))
                if (!$util.isInteger(message.cpuUsed) && !(message.cpuUsed && $util.isInteger(message.cpuUsed.low) && $util.isInteger(message.cpuUsed.high)))
                    return "cpuUsed: integer|Long expected";
            return null;
        };

        /**
         * Creates a Resources message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof system.Resources
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {system.Resources} Resources
         */
        Resources.fromObject = function fromObject(object) {
            if (object instanceof $root.system.Resources)
                return object;
            let message = new $root.system.Resources();
            if (object.memoryUsed != null)
                if ($util.Long)
                    (message.memoryUsed = $util.Long.fromValue(object.memoryUsed)).unsigned = false;
                else if (typeof object.memoryUsed === "string")
                    message.memoryUsed = parseInt(object.memoryUsed, 10);
                else if (typeof object.memoryUsed === "number")
                    message.memoryUsed = object.memoryUsed;
                else if (typeof object.memoryUsed === "object")
                    message.memoryUsed = new $util.LongBits(object.memoryUsed.low >>> 0, object.memoryUsed.high >>> 0).toNumber();
            if (object.diskUsed != null)
                if ($util.Long)
                    (message.diskUsed = $util.Long.fromValue(object.diskUsed)).unsigned = false;
                else if (typeof object.diskUsed === "string")
                    message.diskUsed = parseInt(object.diskUsed, 10);
                else if (typeof object.diskUsed === "number")
                    message.diskUsed = object.diskUsed;
                else if (typeof object.diskUsed === "object")
                    message.diskUsed = new $util.LongBits(object.diskUsed.low >>> 0, object.diskUsed.high >>> 0).toNumber();
            if (object.cpuUsed != null)
                if ($util.Long)
                    (message.cpuUsed = $util.Long.fromValue(object.cpuUsed)).unsigned = false;
                else if (typeof object.cpuUsed === "string")
                    message.cpuUsed = parseInt(object.cpuUsed, 10);
                else if (typeof object.cpuUsed === "number")
                    message.cpuUsed = object.cpuUsed;
                else if (typeof object.cpuUsed === "object")
                    message.cpuUsed = new $util.LongBits(object.cpuUsed.low >>> 0, object.cpuUsed.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Resources message. Also converts values to other types if specified.
         * @function toObject
         * @memberof system.Resources
         * @static
         * @param {system.Resources} message Resources
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Resources.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.memoryUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.memoryUsed = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.diskUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.diskUsed = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.cpuUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cpuUsed = options.longs === String ? "0" : 0;
            }
            if (message.memoryUsed != null && message.hasOwnProperty("memoryUsed"))
                if (typeof message.memoryUsed === "number")
                    object.memoryUsed = options.longs === String ? String(message.memoryUsed) : message.memoryUsed;
                else
                    object.memoryUsed = options.longs === String ? $util.Long.prototype.toString.call(message.memoryUsed) : options.longs === Number ? new $util.LongBits(message.memoryUsed.low >>> 0, message.memoryUsed.high >>> 0).toNumber() : message.memoryUsed;
            if (message.diskUsed != null && message.hasOwnProperty("diskUsed"))
                if (typeof message.diskUsed === "number")
                    object.diskUsed = options.longs === String ? String(message.diskUsed) : message.diskUsed;
                else
                    object.diskUsed = options.longs === String ? $util.Long.prototype.toString.call(message.diskUsed) : options.longs === Number ? new $util.LongBits(message.diskUsed.low >>> 0, message.diskUsed.high >>> 0).toNumber() : message.diskUsed;
            if (message.cpuUsed != null && message.hasOwnProperty("cpuUsed"))
                if (typeof message.cpuUsed === "number")
                    object.cpuUsed = options.longs === String ? String(message.cpuUsed) : message.cpuUsed;
                else
                    object.cpuUsed = options.longs === String ? $util.Long.prototype.toString.call(message.cpuUsed) : options.longs === Number ? new $util.LongBits(message.cpuUsed.low >>> 0, message.cpuUsed.high >>> 0).toNumber() : message.cpuUsed;
            return object;
        };

        /**
         * Converts this Resources to JSON.
         * @function toJSON
         * @memberof system.Resources
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Resources.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Resources
         * @function getTypeUrl
         * @memberof system.Resources
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Resources.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/system.Resources";
        };

        return Resources;
    })();

    system.SystemInfo = (function() {

        /**
         * Properties of a SystemInfo.
         * @memberof system
         * @interface ISystemInfo
         * @property {number|Long|null} [totalMemory] SystemInfo totalMemory
         * @property {number|Long|null} [totalDisk] SystemInfo totalDisk
         * @property {system.ICpuInfo|null} [cpu] SystemInfo cpu
         */

        /**
         * Constructs a new SystemInfo.
         * @memberof system
         * @classdesc Represents a SystemInfo.
         * @implements ISystemInfo
         * @constructor
         * @param {system.ISystemInfo=} [properties] Properties to set
         */
        function SystemInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemInfo totalMemory.
         * @member {number|Long} totalMemory
         * @memberof system.SystemInfo
         * @instance
         */
        SystemInfo.prototype.totalMemory = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SystemInfo totalDisk.
         * @member {number|Long} totalDisk
         * @memberof system.SystemInfo
         * @instance
         */
        SystemInfo.prototype.totalDisk = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SystemInfo cpu.
         * @member {system.ICpuInfo|null|undefined} cpu
         * @memberof system.SystemInfo
         * @instance
         */
        SystemInfo.prototype.cpu = null;

        /**
         * Creates a new SystemInfo instance using the specified properties.
         * @function create
         * @memberof system.SystemInfo
         * @static
         * @param {system.ISystemInfo=} [properties] Properties to set
         * @returns {system.SystemInfo} SystemInfo instance
         */
        SystemInfo.create = function create(properties) {
            return new SystemInfo(properties);
        };

        /**
         * Encodes the specified SystemInfo message. Does not implicitly {@link system.SystemInfo.verify|verify} messages.
         * @function encode
         * @memberof system.SystemInfo
         * @static
         * @param {system.ISystemInfo} message SystemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalMemory != null && Object.hasOwnProperty.call(message, "totalMemory"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalMemory);
            if (message.totalDisk != null && Object.hasOwnProperty.call(message, "totalDisk"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.totalDisk);
            if (message.cpu != null && Object.hasOwnProperty.call(message, "cpu"))
                $root.system.CpuInfo.encode(message.cpu, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link system.SystemInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof system.SystemInfo
         * @static
         * @param {system.ISystemInfo} message SystemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof system.SystemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {system.SystemInfo} SystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.SystemInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.totalMemory = reader.int64();
                        break;
                    }
                case 2: {
                        message.totalDisk = reader.int64();
                        break;
                    }
                case 3: {
                        message.cpu = $root.system.CpuInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof system.SystemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {system.SystemInfo} SystemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemInfo message.
         * @function verify
         * @memberof system.SystemInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalMemory != null && message.hasOwnProperty("totalMemory"))
                if (!$util.isInteger(message.totalMemory) && !(message.totalMemory && $util.isInteger(message.totalMemory.low) && $util.isInteger(message.totalMemory.high)))
                    return "totalMemory: integer|Long expected";
            if (message.totalDisk != null && message.hasOwnProperty("totalDisk"))
                if (!$util.isInteger(message.totalDisk) && !(message.totalDisk && $util.isInteger(message.totalDisk.low) && $util.isInteger(message.totalDisk.high)))
                    return "totalDisk: integer|Long expected";
            if (message.cpu != null && message.hasOwnProperty("cpu")) {
                let error = $root.system.CpuInfo.verify(message.cpu);
                if (error)
                    return "cpu." + error;
            }
            return null;
        };

        /**
         * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof system.SystemInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {system.SystemInfo} SystemInfo
         */
        SystemInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.system.SystemInfo)
                return object;
            let message = new $root.system.SystemInfo();
            if (object.totalMemory != null)
                if ($util.Long)
                    (message.totalMemory = $util.Long.fromValue(object.totalMemory)).unsigned = false;
                else if (typeof object.totalMemory === "string")
                    message.totalMemory = parseInt(object.totalMemory, 10);
                else if (typeof object.totalMemory === "number")
                    message.totalMemory = object.totalMemory;
                else if (typeof object.totalMemory === "object")
                    message.totalMemory = new $util.LongBits(object.totalMemory.low >>> 0, object.totalMemory.high >>> 0).toNumber();
            if (object.totalDisk != null)
                if ($util.Long)
                    (message.totalDisk = $util.Long.fromValue(object.totalDisk)).unsigned = false;
                else if (typeof object.totalDisk === "string")
                    message.totalDisk = parseInt(object.totalDisk, 10);
                else if (typeof object.totalDisk === "number")
                    message.totalDisk = object.totalDisk;
                else if (typeof object.totalDisk === "object")
                    message.totalDisk = new $util.LongBits(object.totalDisk.low >>> 0, object.totalDisk.high >>> 0).toNumber();
            if (object.cpu != null) {
                if (typeof object.cpu !== "object")
                    throw TypeError(".system.SystemInfo.cpu: object expected");
                message.cpu = $root.system.CpuInfo.fromObject(object.cpu);
            }
            return message;
        };

        /**
         * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof system.SystemInfo
         * @static
         * @param {system.SystemInfo} message SystemInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.totalMemory = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalMemory = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.totalDisk = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalDisk = options.longs === String ? "0" : 0;
                object.cpu = null;
            }
            if (message.totalMemory != null && message.hasOwnProperty("totalMemory"))
                if (typeof message.totalMemory === "number")
                    object.totalMemory = options.longs === String ? String(message.totalMemory) : message.totalMemory;
                else
                    object.totalMemory = options.longs === String ? $util.Long.prototype.toString.call(message.totalMemory) : options.longs === Number ? new $util.LongBits(message.totalMemory.low >>> 0, message.totalMemory.high >>> 0).toNumber() : message.totalMemory;
            if (message.totalDisk != null && message.hasOwnProperty("totalDisk"))
                if (typeof message.totalDisk === "number")
                    object.totalDisk = options.longs === String ? String(message.totalDisk) : message.totalDisk;
                else
                    object.totalDisk = options.longs === String ? $util.Long.prototype.toString.call(message.totalDisk) : options.longs === Number ? new $util.LongBits(message.totalDisk.low >>> 0, message.totalDisk.high >>> 0).toNumber() : message.totalDisk;
            if (message.cpu != null && message.hasOwnProperty("cpu"))
                object.cpu = $root.system.CpuInfo.toObject(message.cpu, options);
            return object;
        };

        /**
         * Converts this SystemInfo to JSON.
         * @function toJSON
         * @memberof system.SystemInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SystemInfo
         * @function getTypeUrl
         * @memberof system.SystemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SystemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/system.SystemInfo";
        };

        return SystemInfo;
    })();

    system.CpuInfo = (function() {

        /**
         * Properties of a CpuInfo.
         * @memberof system
         * @interface ICpuInfo
         * @property {number|Long|null} [speed] CpuInfo speed
         */

        /**
         * Constructs a new CpuInfo.
         * @memberof system
         * @classdesc Represents a CpuInfo.
         * @implements ICpuInfo
         * @constructor
         * @param {system.ICpuInfo=} [properties] Properties to set
         */
        function CpuInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CpuInfo speed.
         * @member {number|Long} speed
         * @memberof system.CpuInfo
         * @instance
         */
        CpuInfo.prototype.speed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CpuInfo instance using the specified properties.
         * @function create
         * @memberof system.CpuInfo
         * @static
         * @param {system.ICpuInfo=} [properties] Properties to set
         * @returns {system.CpuInfo} CpuInfo instance
         */
        CpuInfo.create = function create(properties) {
            return new CpuInfo(properties);
        };

        /**
         * Encodes the specified CpuInfo message. Does not implicitly {@link system.CpuInfo.verify|verify} messages.
         * @function encode
         * @memberof system.CpuInfo
         * @static
         * @param {system.ICpuInfo} message CpuInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CpuInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.speed);
            return writer;
        };

        /**
         * Encodes the specified CpuInfo message, length delimited. Does not implicitly {@link system.CpuInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof system.CpuInfo
         * @static
         * @param {system.ICpuInfo} message CpuInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CpuInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CpuInfo message from the specified reader or buffer.
         * @function decode
         * @memberof system.CpuInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {system.CpuInfo} CpuInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CpuInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.system.CpuInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.speed = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CpuInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof system.CpuInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {system.CpuInfo} CpuInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CpuInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CpuInfo message.
         * @function verify
         * @memberof system.CpuInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CpuInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed) && !(message.speed && $util.isInteger(message.speed.low) && $util.isInteger(message.speed.high)))
                    return "speed: integer|Long expected";
            return null;
        };

        /**
         * Creates a CpuInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof system.CpuInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {system.CpuInfo} CpuInfo
         */
        CpuInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.system.CpuInfo)
                return object;
            let message = new $root.system.CpuInfo();
            if (object.speed != null)
                if ($util.Long)
                    (message.speed = $util.Long.fromValue(object.speed)).unsigned = false;
                else if (typeof object.speed === "string")
                    message.speed = parseInt(object.speed, 10);
                else if (typeof object.speed === "number")
                    message.speed = object.speed;
                else if (typeof object.speed === "object")
                    message.speed = new $util.LongBits(object.speed.low >>> 0, object.speed.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CpuInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof system.CpuInfo
         * @static
         * @param {system.CpuInfo} message CpuInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CpuInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.speed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.speed = options.longs === String ? "0" : 0;
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (typeof message.speed === "number")
                    object.speed = options.longs === String ? String(message.speed) : message.speed;
                else
                    object.speed = options.longs === String ? $util.Long.prototype.toString.call(message.speed) : options.longs === Number ? new $util.LongBits(message.speed.low >>> 0, message.speed.high >>> 0).toNumber() : message.speed;
            return object;
        };

        /**
         * Converts this CpuInfo to JSON.
         * @function toJSON
         * @memberof system.CpuInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CpuInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CpuInfo
         * @function getTypeUrl
         * @memberof system.CpuInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CpuInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/system.CpuInfo";
        };

        return CpuInfo;
    })();

    return system;
})();

export { $root as default };
