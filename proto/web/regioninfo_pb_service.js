// package: com.infinite.travllr
// file: regioninfo.proto

var regioninfo_pb = require("./regioninfo_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var RegionInfoService = (function () {
  function RegionInfoService() {}
  RegionInfoService.serviceName = "com.infinite.travllr.RegionInfoService";
  return RegionInfoService;
}());

RegionInfoService.get = {
  methodName: "get",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.RegionInfoRequest,
  responseType: regioninfo_pb.RegionInfoResponse
};

RegionInfoService.save = {
  methodName: "save",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.RegionInfoSaveRequest,
  responseType: regioninfo_pb.RegionInfoSaveResponse
};

RegionInfoService.update = {
  methodName: "update",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.RegionInfoUpdateRequest,
  responseType: regioninfo_pb.RegionInfoUpdateResponse
};

RegionInfoService.list = {
  methodName: "list",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.RegionListRequest,
  responseType: regioninfo_pb.RegionListResponse
};

RegionInfoService.delete = {
  methodName: "delete",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.RegionDeleteRequest,
  responseType: regioninfo_pb.RegionDeleteResponse
};

RegionInfoService.cities = {
  methodName: "cities",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.CityListRequest,
  responseType: regioninfo_pb.CityListResponse
};

RegionInfoService.insertAirport = {
  methodName: "insertAirport",
  service: RegionInfoService,
  requestStream: false,
  responseStream: false,
  requestType: regioninfo_pb.AirportInsertRequest,
  responseType: regioninfo_pb.AirportInsertResponse
};

exports.RegionInfoService = RegionInfoService;

function RegionInfoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RegionInfoServiceClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.get, {
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

RegionInfoServiceClient.prototype.save = function save(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.save, {
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

RegionInfoServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.update, {
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

RegionInfoServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.list, {
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

RegionInfoServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.delete, {
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

RegionInfoServiceClient.prototype.cities = function cities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.cities, {
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

RegionInfoServiceClient.prototype.insertAirport = function insertAirport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(RegionInfoService.insertAirport, {
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

exports.RegionInfoServiceClient = RegionInfoServiceClient;

