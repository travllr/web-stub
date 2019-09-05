// package: com.infinite.travllr
// file: user.proto

var user_pb = require("./user_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UserService = (function () {
  function UserService() {}
  UserService.serviceName = "com.infinite.travllr.UserService";
  return UserService;
}());

UserService.userList = {
  methodName: "userList",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.Empty,
  responseType: user_pb.UserList
};

UserService.userDetail = {
  methodName: "userDetail",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: user_pb.UserDetailRequest,
  responseType: user_pb.UserDetailResponse
};

exports.UserService = UserService;

function UserServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserServiceClient.prototype.userList = function userList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.userList, {
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

UserServiceClient.prototype.userDetail = function userDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.userDetail, {
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

exports.UserServiceClient = UserServiceClient;

