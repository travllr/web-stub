// package: com.infinite.travllr
// file: itinerary.proto

var itinerary_pb = require("./itinerary_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ItineraryPlannerService = (function () {
  function ItineraryPlannerService() {}
  ItineraryPlannerService.serviceName = "com.infinite.travllr.ItineraryPlannerService";
  return ItineraryPlannerService;
}());

ItineraryPlannerService.Plan = {
  methodName: "Plan",
  service: ItineraryPlannerService,
  requestStream: false,
  responseStream: false,
  requestType: itinerary_pb.ItineraryRequest,
  responseType: itinerary_pb.ItineraryResponse
};

exports.ItineraryPlannerService = ItineraryPlannerService;

function ItineraryPlannerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ItineraryPlannerServiceClient.prototype.plan = function plan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ItineraryPlannerService.Plan, {
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

exports.ItineraryPlannerServiceClient = ItineraryPlannerServiceClient;

