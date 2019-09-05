// package: com.infinite.travllr
// file: activity.proto

var activity_pb = require("./activity_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ActivityService = (function () {
  function ActivityService() {}
  ActivityService.serviceName = "com.infinite.travllr.ActivityService";
  return ActivityService;
}());

ActivityService.save = {
  methodName: "save",
  service: ActivityService,
  requestStream: false,
  responseStream: false,
  requestType: activity_pb.ActivityInformation,
  responseType: activity_pb.SaveActivityResponse
};

ActivityService.list = {
  methodName: "list",
  service: ActivityService,
  requestStream: false,
  responseStream: false,
  requestType: activity_pb.ActivityListRequest,
  responseType: activity_pb.ActivityListResponse
};

ActivityService.delete = {
  methodName: "delete",
  service: ActivityService,
  requestStream: false,
  responseStream: false,
  requestType: activity_pb.DeleteActivityRequest,
  responseType: activity_pb.DeleteActivityResponse
};

ActivityService.update = {
  methodName: "update",
  service: ActivityService,
  requestStream: false,
  responseStream: false,
  requestType: activity_pb.ActivityInformation,
  responseType: activity_pb.UpdateActivityResponse
};

exports.ActivityService = ActivityService;

function ActivityServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ActivityServiceClient.prototype.save = function save(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ActivityService.save, {
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

ActivityServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ActivityService.list, {
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

ActivityServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ActivityService.delete, {
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

ActivityServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ActivityService.update, {
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

exports.ActivityServiceClient = ActivityServiceClient;

