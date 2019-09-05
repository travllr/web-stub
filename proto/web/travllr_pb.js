/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Currency', null, global);
goog.exportSymbol('proto.FlightRequest', null, global);
goog.exportSymbol('proto.FlightResponse', null, global);
goog.exportSymbol('proto.Locale', null, global);
goog.exportSymbol('proto.MultiCityRequest', null, global);
goog.exportSymbol('proto.MultiCityResponse', null, global);

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
proto.FlightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FlightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FlightRequest.displayName = 'proto.FlightRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FlightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.FlightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FlightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FlightRequest}
 */
proto.FlightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FlightRequest;
  return proto.FlightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FlightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FlightRequest}
 */
proto.FlightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FlightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FlightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FlightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.FlightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FlightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FlightResponse.displayName = 'proto.FlightResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FlightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.FlightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FlightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FlightResponse}
 */
proto.FlightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FlightResponse;
  return proto.FlightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FlightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FlightResponse}
 */
proto.FlightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setA(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FlightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FlightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FlightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FlightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getA();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string a = 1;
 * @return {string}
 */
proto.FlightResponse.prototype.getA = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.FlightResponse.prototype.setA = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



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
proto.MultiCityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MultiCityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MultiCityRequest.displayName = 'proto.MultiCityRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MultiCityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.MultiCityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MultiCityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiCityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    originplace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destinationplace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationplace2: jspb.Message.getFieldWithDefault(msg, 3, ""),
    destinationplace3: jspb.Message.getFieldWithDefault(msg, 4, ""),
    destinationplace4: jspb.Message.getFieldWithDefault(msg, 5, ""),
    locale: jspb.Message.getFieldWithDefault(msg, 6, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 7, 0),
    outboundpartialdate: jspb.Message.getFieldWithDefault(msg, 8, 0),
    inboundpartialdate: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MultiCityRequest}
 */
proto.MultiCityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MultiCityRequest;
  return proto.MultiCityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MultiCityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MultiCityRequest}
 */
proto.MultiCityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginplace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationplace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationplace2(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationplace3(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationplace4(value);
      break;
    case 6:
      var value = /** @type {!proto.Locale} */ (reader.readEnum());
      msg.setLocale(value);
      break;
    case 7:
      var value = /** @type {!proto.Currency} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutboundpartialdate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInboundpartialdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MultiCityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MultiCityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MultiCityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiCityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginplace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationplace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationplace2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestinationplace3();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDestinationplace4();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocale();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getOutboundpartialdate();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getInboundpartialdate();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional string originPlace = 1;
 * @return {string}
 */
proto.MultiCityRequest.prototype.getOriginplace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MultiCityRequest.prototype.setOriginplace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destinationPlace = 2;
 * @return {string}
 */
proto.MultiCityRequest.prototype.getDestinationplace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MultiCityRequest.prototype.setDestinationplace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destinationPlace2 = 3;
 * @return {string}
 */
proto.MultiCityRequest.prototype.getDestinationplace2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.MultiCityRequest.prototype.setDestinationplace2 = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string destinationPlace3 = 4;
 * @return {string}
 */
proto.MultiCityRequest.prototype.getDestinationplace3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.MultiCityRequest.prototype.setDestinationplace3 = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string destinationPlace4 = 5;
 * @return {string}
 */
proto.MultiCityRequest.prototype.getDestinationplace4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.MultiCityRequest.prototype.setDestinationplace4 = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Locale locale = 6;
 * @return {!proto.Locale}
 */
proto.MultiCityRequest.prototype.getLocale = function() {
  return /** @type {!proto.Locale} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.Locale} value */
proto.MultiCityRequest.prototype.setLocale = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Currency currency = 7;
 * @return {!proto.Currency}
 */
proto.MultiCityRequest.prototype.getCurrency = function() {
  return /** @type {!proto.Currency} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.Currency} value */
proto.MultiCityRequest.prototype.setCurrency = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int64 outboundPartialDate = 8;
 * @return {number}
 */
proto.MultiCityRequest.prototype.getOutboundpartialdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.MultiCityRequest.prototype.setOutboundpartialdate = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 inboundPartialDate = 9;
 * @return {number}
 */
proto.MultiCityRequest.prototype.getInboundpartialdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.MultiCityRequest.prototype.setInboundpartialdate = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};



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
proto.MultiCityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MultiCityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MultiCityResponse.displayName = 'proto.MultiCityResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MultiCityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.MultiCityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MultiCityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiCityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MultiCityResponse}
 */
proto.MultiCityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MultiCityResponse;
  return proto.MultiCityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MultiCityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MultiCityResponse}
 */
proto.MultiCityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setA(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MultiCityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MultiCityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MultiCityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MultiCityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getA();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string a = 1;
 * @return {string}
 */
proto.MultiCityResponse.prototype.getA = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MultiCityResponse.prototype.setA = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.Locale = {
  US: 0,
  IN: 1,
  FR: 2
};

/**
 * @enum {number}
 */
proto.Currency = {
  USD: 0,
  INR: 1,
  GBP: 2,
  EUR: 3
};

goog.object.extend(exports, proto);
