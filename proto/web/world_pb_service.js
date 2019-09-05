// package: com.infinite.travllr
// file: world.proto

var world_pb = require("./world_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HelloWorldService = (function () {
  function HelloWorldService() {}
  HelloWorldService.serviceName = "com.infinite.travllr.HelloWorldService";
  return HelloWorldService;
}());

HelloWorldService.getRes = {
  methodName: "getRes",
  service: HelloWorldService,
  requestStream: false,
  responseStream: false,
  requestType: world_pb.HelloWorldRequest,
  responseType: world_pb.HelloWorldResponse
};

exports.HelloWorldService = HelloWorldService;

function HelloWorldServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HelloWorldServiceClient.prototype.getRes = function getRes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HelloWorldService.getRes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.HelloWorldServiceClient = HelloWorldServiceClient;

