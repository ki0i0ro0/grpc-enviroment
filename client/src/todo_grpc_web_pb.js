import grpcWeb from 'grpc-web'
import googleProtobuf from 'google-protobuf'

function createCommonjsModule(fn, basedir, module) {
  return (
    (module = {
      path: basedir,
      exports: {},
      require: function (path, base) {
        return commonjsRequire(path, base === undefined || base === null ? module.path : base)
      },
    }),
    fn(module, module.exports),
    module.exports
  )
}

function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
}

var todo_pb = createCommonjsModule(function (module, exports) {
  // source: todo.proto
  /**
   * @fileoverview
   * @enhanceable
   * @suppress {messageConventions} JS Compiler reports an error if a variable or
   *     field starts with 'MSG_' and isn't a translatable message.
   * @public
   */
  // GENERATED CODE -- DO NOT EDIT!

  var goog = googleProtobuf
  var global = Function('return this')()

  goog.exportSymbol('proto.todo.addTodoParams', null, global)
  goog.exportSymbol('proto.todo.deleteResponse', null, global)
  goog.exportSymbol('proto.todo.deleteTodoParams', null, global)
  goog.exportSymbol('proto.todo.getTodoParams', null, global)
  goog.exportSymbol('proto.todo.todoObject', null, global)
  goog.exportSymbol('proto.todo.todoResponse', null, global)
  /**
   * Generated by JsPbCodeGenerator.
   * @param {Array=} opt_data Optional initial data array, typically from a
   * server response, or constructed directly in Javascript. The array is used
   * in place and becomes part of the constructed object. It is not cloned.
   * If no data is provided, the constructed object will be empty, but still
   * valid.
   * @extends {jspb.Message}
   * @constructor
   */
  proto.todo.getTodoParams = function (opt_data) {
    googleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null)
  }
  goog.inherits(proto.todo.getTodoParams, googleProtobuf.Message)
  if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.todo.getTodoParams.displayName = 'proto.todo.getTodoParams'
  }
  /**
   * Generated by JsPbCodeGenerator.
   * @param {Array=} opt_data Optional initial data array, typically from a
   * server response, or constructed directly in Javascript. The array is used
   * in place and becomes part of the constructed object. It is not cloned.
   * If no data is provided, the constructed object will be empty, but still
   * valid.
   * @extends {jspb.Message}
   * @constructor
   */
  proto.todo.addTodoParams = function (opt_data) {
    googleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null)
  }
  goog.inherits(proto.todo.addTodoParams, googleProtobuf.Message)
  if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.todo.addTodoParams.displayName = 'proto.todo.addTodoParams'
  }
  /**
   * Generated by JsPbCodeGenerator.
   * @param {Array=} opt_data Optional initial data array, typically from a
   * server response, or constructed directly in Javascript. The array is used
   * in place and becomes part of the constructed object. It is not cloned.
   * If no data is provided, the constructed object will be empty, but still
   * valid.
   * @extends {jspb.Message}
   * @constructor
   */
  proto.todo.deleteTodoParams = function (opt_data) {
    googleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null)
  }
  goog.inherits(proto.todo.deleteTodoParams, googleProtobuf.Message)
  if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.todo.deleteTodoParams.displayName = 'proto.todo.deleteTodoParams'
  }
  /**
   * Generated by JsPbCodeGenerator.
   * @param {Array=} opt_data Optional initial data array, typically from a
   * server response, or constructed directly in Javascript. The array is used
   * in place and becomes part of the constructed object. It is not cloned.
   * If no data is provided, the constructed object will be empty, but still
   * valid.
   * @extends {jspb.Message}
   * @constructor
   */
  proto.todo.todoObject = function (opt_data) {
    googleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null)
  }
  goog.inherits(proto.todo.todoObject, googleProtobuf.Message)
  if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.todo.todoObject.displayName = 'proto.todo.todoObject'
  }
  /**
   * Generated by JsPbCodeGenerator.
   * @param {Array=} opt_data Optional initial data array, typically from a
   * server response, or constructed directly in Javascript. The array is used
   * in place and becomes part of the constructed object. It is not cloned.
   * If no data is provided, the constructed object will be empty, but still
   * valid.
   * @extends {jspb.Message}
   * @constructor
   */
  proto.todo.todoResponse = function (opt_data) {
    googleProtobuf.Message.initialize(
      this,
      opt_data,
      0,
      -1,
      proto.todo.todoResponse.repeatedFields_,
      null,
    )
  }
  goog.inherits(proto.todo.todoResponse, googleProtobuf.Message)
  if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.todo.todoResponse.displayName = 'proto.todo.todoResponse'
  }
  /**
   * Generated by JsPbCodeGenerator.
   * @param {Array=} opt_data Optional initial data array, typically from a
   * server response, or constructed directly in Javascript. The array is used
   * in place and becomes part of the constructed object. It is not cloned.
   * If no data is provided, the constructed object will be empty, but still
   * valid.
   * @extends {jspb.Message}
   * @constructor
   */
  proto.todo.deleteResponse = function (opt_data) {
    googleProtobuf.Message.initialize(this, opt_data, 0, -1, null, null)
  }
  goog.inherits(proto.todo.deleteResponse, googleProtobuf.Message)
  if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.todo.deleteResponse.displayName = 'proto.todo.deleteResponse'
  }

  if (googleProtobuf.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.todo.getTodoParams.prototype.toObject = function (opt_includeInstance) {
      return proto.todo.getTodoParams.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.todo.getTodoParams} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.todo.getTodoParams.toObject = function (includeInstance, msg) {
      var obj = {}

      if (includeInstance) {
        obj.$jspbMessageInstance = msg
      }
      return obj
    }
  }

  /**
   * Deserializes binary data (in protobuf wire format).
   * @param {jspb.ByteSource} bytes The bytes to deserialize.
   * @return {!proto.todo.getTodoParams}
   */
  proto.todo.getTodoParams.deserializeBinary = function (bytes) {
    var reader = new googleProtobuf.BinaryReader(bytes)
    var msg = new proto.todo.getTodoParams()
    return proto.todo.getTodoParams.deserializeBinaryFromReader(msg, reader)
  }

  /**
   * Deserializes binary data (in protobuf wire format) from the
   * given reader into the given message object.
   * @param {!proto.todo.getTodoParams} msg The message object to deserialize into.
   * @param {!jspb.BinaryReader} reader The BinaryReader to use.
   * @return {!proto.todo.getTodoParams}
   */
  proto.todo.getTodoParams.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break
      }
      var field = reader.getFieldNumber()
      switch (field) {
        default:
          reader.skipField()
          break
      }
    }
    return msg
  }

  /**
   * Serializes the message to binary data (in protobuf wire format).
   * @return {!Uint8Array}
   */
  proto.todo.getTodoParams.prototype.serializeBinary = function () {
    var writer = new googleProtobuf.BinaryWriter()
    proto.todo.getTodoParams.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
  }

  /**
   * Serializes the given message to binary data (in protobuf wire
   * format), writing to the given BinaryWriter.
   * @param {!proto.todo.getTodoParams} message
   * @param {!jspb.BinaryWriter} writer
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todo.getTodoParams.serializeBinaryToWriter = function (message, writer) {}

  if (googleProtobuf.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.todo.addTodoParams.prototype.toObject = function (opt_includeInstance) {
      return proto.todo.addTodoParams.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.todo.addTodoParams} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.todo.addTodoParams.toObject = function (includeInstance, msg) {
      var obj = {
        task: googleProtobuf.Message.getFieldWithDefault(msg, 1, ''),
      }

      if (includeInstance) {
        obj.$jspbMessageInstance = msg
      }
      return obj
    }
  }

  /**
   * Deserializes binary data (in protobuf wire format).
   * @param {jspb.ByteSource} bytes The bytes to deserialize.
   * @return {!proto.todo.addTodoParams}
   */
  proto.todo.addTodoParams.deserializeBinary = function (bytes) {
    var reader = new googleProtobuf.BinaryReader(bytes)
    var msg = new proto.todo.addTodoParams()
    return proto.todo.addTodoParams.deserializeBinaryFromReader(msg, reader)
  }

  /**
   * Deserializes binary data (in protobuf wire format) from the
   * given reader into the given message object.
   * @param {!proto.todo.addTodoParams} msg The message object to deserialize into.
   * @param {!jspb.BinaryReader} reader The BinaryReader to use.
   * @return {!proto.todo.addTodoParams}
   */
  proto.todo.addTodoParams.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break
      }
      var field = reader.getFieldNumber()
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString())
          msg.setTask(value)
          break
        default:
          reader.skipField()
          break
      }
    }
    return msg
  }

  /**
   * Serializes the message to binary data (in protobuf wire format).
   * @return {!Uint8Array}
   */
  proto.todo.addTodoParams.prototype.serializeBinary = function () {
    var writer = new googleProtobuf.BinaryWriter()
    proto.todo.addTodoParams.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
  }

  /**
   * Serializes the given message to binary data (in protobuf wire
   * format), writing to the given BinaryWriter.
   * @param {!proto.todo.addTodoParams} message
   * @param {!jspb.BinaryWriter} writer
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todo.addTodoParams.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getTask()
    if (f.length > 0) {
      writer.writeString(1, f)
    }
  }

  /**
   * optional string task = 1;
   * @return {string}
   */
  proto.todo.addTodoParams.prototype.getTask = function () {
    return /** @type {string} */ (googleProtobuf.Message.getFieldWithDefault(this, 1, ''))
  }

  /**
   * @param {string} value
   * @return {!proto.todo.addTodoParams} returns this
   */
  proto.todo.addTodoParams.prototype.setTask = function (value) {
    return googleProtobuf.Message.setProto3StringField(this, 1, value)
  }

  if (googleProtobuf.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.todo.deleteTodoParams.prototype.toObject = function (opt_includeInstance) {
      return proto.todo.deleteTodoParams.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.todo.deleteTodoParams} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.todo.deleteTodoParams.toObject = function (includeInstance, msg) {
      var obj = {
        id: googleProtobuf.Message.getFieldWithDefault(msg, 1, ''),
      }

      if (includeInstance) {
        obj.$jspbMessageInstance = msg
      }
      return obj
    }
  }

  /**
   * Deserializes binary data (in protobuf wire format).
   * @param {jspb.ByteSource} bytes The bytes to deserialize.
   * @return {!proto.todo.deleteTodoParams}
   */
  proto.todo.deleteTodoParams.deserializeBinary = function (bytes) {
    var reader = new googleProtobuf.BinaryReader(bytes)
    var msg = new proto.todo.deleteTodoParams()
    return proto.todo.deleteTodoParams.deserializeBinaryFromReader(msg, reader)
  }

  /**
   * Deserializes binary data (in protobuf wire format) from the
   * given reader into the given message object.
   * @param {!proto.todo.deleteTodoParams} msg The message object to deserialize into.
   * @param {!jspb.BinaryReader} reader The BinaryReader to use.
   * @return {!proto.todo.deleteTodoParams}
   */
  proto.todo.deleteTodoParams.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break
      }
      var field = reader.getFieldNumber()
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString())
          msg.setId(value)
          break
        default:
          reader.skipField()
          break
      }
    }
    return msg
  }

  /**
   * Serializes the message to binary data (in protobuf wire format).
   * @return {!Uint8Array}
   */
  proto.todo.deleteTodoParams.prototype.serializeBinary = function () {
    var writer = new googleProtobuf.BinaryWriter()
    proto.todo.deleteTodoParams.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
  }

  /**
   * Serializes the given message to binary data (in protobuf wire
   * format), writing to the given BinaryWriter.
   * @param {!proto.todo.deleteTodoParams} message
   * @param {!jspb.BinaryWriter} writer
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todo.deleteTodoParams.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getId()
    if (f.length > 0) {
      writer.writeString(1, f)
    }
  }

  /**
   * optional string id = 1;
   * @return {string}
   */
  proto.todo.deleteTodoParams.prototype.getId = function () {
    return /** @type {string} */ (googleProtobuf.Message.getFieldWithDefault(this, 1, ''))
  }

  /**
   * @param {string} value
   * @return {!proto.todo.deleteTodoParams} returns this
   */
  proto.todo.deleteTodoParams.prototype.setId = function (value) {
    return googleProtobuf.Message.setProto3StringField(this, 1, value)
  }

  if (googleProtobuf.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.todo.todoObject.prototype.toObject = function (opt_includeInstance) {
      return proto.todo.todoObject.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.todo.todoObject} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.todo.todoObject.toObject = function (includeInstance, msg) {
      var obj = {
        id: googleProtobuf.Message.getFieldWithDefault(msg, 1, ''),
        task: googleProtobuf.Message.getFieldWithDefault(msg, 2, ''),
      }

      if (includeInstance) {
        obj.$jspbMessageInstance = msg
      }
      return obj
    }
  }

  /**
   * Deserializes binary data (in protobuf wire format).
   * @param {jspb.ByteSource} bytes The bytes to deserialize.
   * @return {!proto.todo.todoObject}
   */
  proto.todo.todoObject.deserializeBinary = function (bytes) {
    var reader = new googleProtobuf.BinaryReader(bytes)
    var msg = new proto.todo.todoObject()
    return proto.todo.todoObject.deserializeBinaryFromReader(msg, reader)
  }

  /**
   * Deserializes binary data (in protobuf wire format) from the
   * given reader into the given message object.
   * @param {!proto.todo.todoObject} msg The message object to deserialize into.
   * @param {!jspb.BinaryReader} reader The BinaryReader to use.
   * @return {!proto.todo.todoObject}
   */
  proto.todo.todoObject.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break
      }
      var field = reader.getFieldNumber()
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString())
          msg.setId(value)
          break
        case 2:
          var value = /** @type {string} */ (reader.readString())
          msg.setTask(value)
          break
        default:
          reader.skipField()
          break
      }
    }
    return msg
  }

  /**
   * Serializes the message to binary data (in protobuf wire format).
   * @return {!Uint8Array}
   */
  proto.todo.todoObject.prototype.serializeBinary = function () {
    var writer = new googleProtobuf.BinaryWriter()
    proto.todo.todoObject.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
  }

  /**
   * Serializes the given message to binary data (in protobuf wire
   * format), writing to the given BinaryWriter.
   * @param {!proto.todo.todoObject} message
   * @param {!jspb.BinaryWriter} writer
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todo.todoObject.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getId()
    if (f.length > 0) {
      writer.writeString(1, f)
    }
    f = message.getTask()
    if (f.length > 0) {
      writer.writeString(2, f)
    }
  }

  /**
   * optional string id = 1;
   * @return {string}
   */
  proto.todo.todoObject.prototype.getId = function () {
    return /** @type {string} */ (googleProtobuf.Message.getFieldWithDefault(this, 1, ''))
  }

  /**
   * @param {string} value
   * @return {!proto.todo.todoObject} returns this
   */
  proto.todo.todoObject.prototype.setId = function (value) {
    return googleProtobuf.Message.setProto3StringField(this, 1, value)
  }

  /**
   * optional string task = 2;
   * @return {string}
   */
  proto.todo.todoObject.prototype.getTask = function () {
    return /** @type {string} */ (googleProtobuf.Message.getFieldWithDefault(this, 2, ''))
  }

  /**
   * @param {string} value
   * @return {!proto.todo.todoObject} returns this
   */
  proto.todo.todoObject.prototype.setTask = function (value) {
    return googleProtobuf.Message.setProto3StringField(this, 2, value)
  }

  /**
   * List of repeated fields within this message type.
   * @private {!Array<number>}
   * @const
   */
  proto.todo.todoResponse.repeatedFields_ = [1]

  if (googleProtobuf.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.todo.todoResponse.prototype.toObject = function (opt_includeInstance) {
      return proto.todo.todoResponse.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.todo.todoResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.todo.todoResponse.toObject = function (includeInstance, msg) {
      var obj = {
        todosList: googleProtobuf.Message.toObjectList(
          msg.getTodosList(),
          proto.todo.todoObject.toObject,
          includeInstance,
        ),
      }

      if (includeInstance) {
        obj.$jspbMessageInstance = msg
      }
      return obj
    }
  }

  /**
   * Deserializes binary data (in protobuf wire format).
   * @param {jspb.ByteSource} bytes The bytes to deserialize.
   * @return {!proto.todo.todoResponse}
   */
  proto.todo.todoResponse.deserializeBinary = function (bytes) {
    var reader = new googleProtobuf.BinaryReader(bytes)
    var msg = new proto.todo.todoResponse()
    return proto.todo.todoResponse.deserializeBinaryFromReader(msg, reader)
  }

  /**
   * Deserializes binary data (in protobuf wire format) from the
   * given reader into the given message object.
   * @param {!proto.todo.todoResponse} msg The message object to deserialize into.
   * @param {!jspb.BinaryReader} reader The BinaryReader to use.
   * @return {!proto.todo.todoResponse}
   */
  proto.todo.todoResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break
      }
      var field = reader.getFieldNumber()
      switch (field) {
        case 1:
          var value = new proto.todo.todoObject()
          reader.readMessage(value, proto.todo.todoObject.deserializeBinaryFromReader)
          msg.addTodos(value)
          break
        default:
          reader.skipField()
          break
      }
    }
    return msg
  }

  /**
   * Serializes the message to binary data (in protobuf wire format).
   * @return {!Uint8Array}
   */
  proto.todo.todoResponse.prototype.serializeBinary = function () {
    var writer = new googleProtobuf.BinaryWriter()
    proto.todo.todoResponse.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
  }

  /**
   * Serializes the given message to binary data (in protobuf wire
   * format), writing to the given BinaryWriter.
   * @param {!proto.todo.todoResponse} message
   * @param {!jspb.BinaryWriter} writer
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todo.todoResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getTodosList()
    if (f.length > 0) {
      writer.writeRepeatedMessage(1, f, proto.todo.todoObject.serializeBinaryToWriter)
    }
  }

  /**
   * repeated todoObject todos = 1;
   * @return {!Array<!proto.todo.todoObject>}
   */
  proto.todo.todoResponse.prototype.getTodosList = function () {
    return /** @type{!Array<!proto.todo.todoObject>} */ (
      googleProtobuf.Message.getRepeatedWrapperField(this, proto.todo.todoObject, 1)
    )
  }

  /**
   * @param {!Array<!proto.todo.todoObject>} value
   * @return {!proto.todo.todoResponse} returns this
   */
  proto.todo.todoResponse.prototype.setTodosList = function (value) {
    return googleProtobuf.Message.setRepeatedWrapperField(this, 1, value)
  }

  /**
   * @param {!proto.todo.todoObject=} opt_value
   * @param {number=} opt_index
   * @return {!proto.todo.todoObject}
   */
  proto.todo.todoResponse.prototype.addTodos = function (opt_value, opt_index) {
    return googleProtobuf.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.todo.todoObject,
      opt_index,
    )
  }

  /**
   * Clears the list making it empty but non-null.
   * @return {!proto.todo.todoResponse} returns this
   */
  proto.todo.todoResponse.prototype.clearTodosList = function () {
    return this.setTodosList([])
  }

  if (googleProtobuf.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.todo.deleteResponse.prototype.toObject = function (opt_includeInstance) {
      return proto.todo.deleteResponse.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.todo.deleteResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.todo.deleteResponse.toObject = function (includeInstance, msg) {
      var obj = {
        message: googleProtobuf.Message.getFieldWithDefault(msg, 1, ''),
      }

      if (includeInstance) {
        obj.$jspbMessageInstance = msg
      }
      return obj
    }
  }

  /**
   * Deserializes binary data (in protobuf wire format).
   * @param {jspb.ByteSource} bytes The bytes to deserialize.
   * @return {!proto.todo.deleteResponse}
   */
  proto.todo.deleteResponse.deserializeBinary = function (bytes) {
    var reader = new googleProtobuf.BinaryReader(bytes)
    var msg = new proto.todo.deleteResponse()
    return proto.todo.deleteResponse.deserializeBinaryFromReader(msg, reader)
  }

  /**
   * Deserializes binary data (in protobuf wire format) from the
   * given reader into the given message object.
   * @param {!proto.todo.deleteResponse} msg The message object to deserialize into.
   * @param {!jspb.BinaryReader} reader The BinaryReader to use.
   * @return {!proto.todo.deleteResponse}
   */
  proto.todo.deleteResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break
      }
      var field = reader.getFieldNumber()
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString())
          msg.setMessage(value)
          break
        default:
          reader.skipField()
          break
      }
    }
    return msg
  }

  /**
   * Serializes the message to binary data (in protobuf wire format).
   * @return {!Uint8Array}
   */
  proto.todo.deleteResponse.prototype.serializeBinary = function () {
    var writer = new googleProtobuf.BinaryWriter()
    proto.todo.deleteResponse.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
  }

  /**
   * Serializes the given message to binary data (in protobuf wire
   * format), writing to the given BinaryWriter.
   * @param {!proto.todo.deleteResponse} message
   * @param {!jspb.BinaryWriter} writer
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.todo.deleteResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getMessage()
    if (f.length > 0) {
      writer.writeString(1, f)
    }
  }

  /**
   * optional string message = 1;
   * @return {string}
   */
  proto.todo.deleteResponse.prototype.getMessage = function () {
    return /** @type {string} */ (googleProtobuf.Message.getFieldWithDefault(this, 1, ''))
  }

  /**
   * @param {string} value
   * @return {!proto.todo.deleteResponse} returns this
   */
  proto.todo.deleteResponse.prototype.setMessage = function (value) {
    return googleProtobuf.Message.setProto3StringField(this, 1, value)
  }

  goog.object.extend(exports, proto.todo)
})

var todo_pb$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  default: todo_pb,
})

function getCjsExportFromNamespace(n) {
  return (n && n['default']) || n
}

var require$$1 = getCjsExportFromNamespace(todo_pb$1)

/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {}
grpc.web = grpcWeb

const proto$1 = {}
proto$1.todo = require$$1

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto$1.todo.todoServiceClient = function (hostname, credentials, options) {
  if (!options) options = {}
  options['format'] = 'text'

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options)

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname
}

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto$1.todo.todoServicePromiseClient = function (hostname, credentials, options) {
  if (!options) options = {}
  options['format'] = 'text'

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options)

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname
}

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.addTodoParams,
 *   !proto.todo.todoObject>}
 */
const methodDescriptor_todoService_addTodo = new grpc.web.MethodDescriptor(
  '/todo.todoService/addTodo',
  grpc.web.MethodType.UNARY,
  proto$1.todo.addTodoParams,
  proto$1.todo.todoObject,
  /**
   * @param {!proto.todo.addTodoParams} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary()
  },
  proto$1.todo.todoObject.deserializeBinary,
)

/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.todoObject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.todoObject>|undefined}
 *     The XHR Node Readable Stream
 */
proto$1.todo.todoServiceClient.prototype.addTodo = function (request, metadata, callback) {
  return this.client_.rpcCall(
    this.hostname_ + '/todo.todoService/addTodo',
    request,
    metadata || {},
    methodDescriptor_todoService_addTodo,
    callback,
  )
}

/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.todoObject>}
 *     A native promise that resolves to the response
 */
proto$1.todo.todoServicePromiseClient.prototype.addTodo = function (request, metadata) {
  return this.client_.unaryCall(
    this.hostname_ + '/todo.todoService/addTodo',
    request,
    metadata || {},
    methodDescriptor_todoService_addTodo,
  )
}

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.deleteTodoParams,
 *   !proto.todo.deleteResponse>}
 */
const methodDescriptor_todoService_deleteTodo = new grpc.web.MethodDescriptor(
  '/todo.todoService/deleteTodo',
  grpc.web.MethodType.UNARY,
  proto$1.todo.deleteTodoParams,
  proto$1.todo.deleteResponse,
  /**
   * @param {!proto.todo.deleteTodoParams} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary()
  },
  proto$1.todo.deleteResponse.deserializeBinary,
)

/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.deleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.deleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto$1.todo.todoServiceClient.prototype.deleteTodo = function (request, metadata, callback) {
  return this.client_.rpcCall(
    this.hostname_ + '/todo.todoService/deleteTodo',
    request,
    metadata || {},
    methodDescriptor_todoService_deleteTodo,
    callback,
  )
}

/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.deleteResponse>}
 *     A native promise that resolves to the response
 */
proto$1.todo.todoServicePromiseClient.prototype.deleteTodo = function (request, metadata) {
  return this.client_.unaryCall(
    this.hostname_ + '/todo.todoService/deleteTodo',
    request,
    metadata || {},
    methodDescriptor_todoService_deleteTodo,
  )
}

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.getTodoParams,
 *   !proto.todo.todoResponse>}
 */
const methodDescriptor_todoService_getTodos = new grpc.web.MethodDescriptor(
  '/todo.todoService/getTodos',
  grpc.web.MethodType.UNARY,
  proto$1.todo.getTodoParams,
  proto$1.todo.todoResponse,
  /**
   * @param {!proto.todo.getTodoParams} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary()
  },
  proto$1.todo.todoResponse.deserializeBinary,
)

/**
 * @param {!proto.todo.getTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.todoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.todoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto$1.todo.todoServiceClient.prototype.getTodos = function (request, metadata, callback) {
  return this.client_.rpcCall(
    this.hostname_ + '/todo.todoService/getTodos',
    request,
    metadata || {},
    methodDescriptor_todoService_getTodos,
    callback,
  )
}

/**
 * @param {!proto.todo.getTodoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.todoResponse>}
 *     A native promise that resolves to the response
 */
proto$1.todo.todoServicePromiseClient.prototype.getTodos = function (request, metadata) {
  return this.client_.unaryCall(
    this.hostname_ + '/todo.todoService/getTodos',
    request,
    metadata || {},
    methodDescriptor_todoService_getTodos,
  )
}

var todo_grpc_web_pb = proto$1.todo

export default todo_grpc_web_pb
