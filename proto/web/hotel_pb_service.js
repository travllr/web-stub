// package: com.infinite.travllr.hotel
// file: hotel.proto

var hotel_pb = require("./hotel_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HotelService = (function () {
  function HotelService() {}
  HotelService.serviceName = "com.infinite.travllr.hotel.HotelService";
  return HotelService;
}());

HotelService.getHotels = {
  methodName: "getHotels",
  service: HotelService,
  requestStream: false,
  responseStream: false,
  requestType: hotel_pb.HotelRequest,
  responseType: hotel_pb.HotelResponse
};

exports.HotelService = HotelService;

function HotelServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HotelServiceClient.prototype.getHotels = function getHotels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HotelService.getHotels, {
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

exports.HotelServiceClient = HotelServiceClient;

