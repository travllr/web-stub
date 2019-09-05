// package: 
// file: travllr.proto

var travllr_pb = require("./travllr_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FlightService = (function () {
  function FlightService() {}
  FlightService.serviceName = "FlightService";
  return FlightService;
}());

FlightService.GetFlights = {
  methodName: "GetFlights",
  service: FlightService,
  requestStream: false,
  responseStream: false,
  requestType: travllr_pb.FlightRequest,
  responseType: travllr_pb.FlightResponse
};

exports.FlightService = FlightService;

function FlightServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FlightServiceClient.prototype.getFlights = function getFlights(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlightService.GetFlights, {
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

exports.FlightServiceClient = FlightServiceClient;

var MultiCityService = (function () {
  function MultiCityService() {}
  MultiCityService.serviceName = "MultiCityService";
  return MultiCityService;
}());

MultiCityService.GetItinerary = {
  methodName: "GetItinerary",
  service: MultiCityService,
  requestStream: false,
  responseStream: false,
  requestType: travllr_pb.MultiCityRequest,
  responseType: travllr_pb.MultiCityResponse
};

exports.MultiCityService = MultiCityService;

function MultiCityServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MultiCityServiceClient.prototype.getItinerary = function getItinerary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultiCityService.GetItinerary, {
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

exports.MultiCityServiceClient = MultiCityServiceClient;

