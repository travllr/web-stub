// package: com.infinite.travllr.airline
// file: airline.proto

var airline_pb = require("./airline_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AirlineService = (function () {
  function AirlineService() {}
  AirlineService.serviceName = "com.infinite.travllr.airline.AirlineService";
  return AirlineService;
}());

AirlineService.getFlights = {
  methodName: "getFlights",
  service: AirlineService,
  requestStream: false,
  responseStream: false,
  requestType: airline_pb.AirlineRequest,
  responseType: airline_pb.AirlineResponse
};

exports.AirlineService = AirlineService;

function AirlineServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AirlineServiceClient.prototype.getFlights = function getFlights(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AirlineService.getFlights, {
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

exports.AirlineServiceClient = AirlineServiceClient;

