// package: com.infinite.travllr
// file: admin.proto

var admin_pb = require("./admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdminService = (function () {
  function AdminService() {}
  AdminService.serviceName = "com.infinite.travllr.AdminService";
  return AdminService;
}());

AdminService.login = {
  methodName: "login",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.UserLogin,
  responseType: admin_pb.UserLoginResponse
};

AdminService.createUser = {
  methodName: "createUser",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.UserRequest,
  responseType: admin_pb.CreateUserResponse
};

AdminService.list = {
  methodName: "list",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.UserListRequest,
  responseType: admin_pb.UserListResponse
};

AdminService.edit = {
  methodName: "edit",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.UserRequest,
  responseType: admin_pb.EditUserInfoResponse
};

AdminService.access = {
  methodName: "access",
  service: AdminService,
  requestStream: false,
  responseStream: false,
  requestType: admin_pb.EditUserAccessRequest,
  responseType: admin_pb.EditUserAccessResponse
};

exports.AdminService = AdminService;

function AdminServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.login, {
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

AdminServiceClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.createUser, {
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

AdminServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.list, {
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

AdminServiceClient.prototype.edit = function edit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.edit, {
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

AdminServiceClient.prototype.access = function access(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdminService.access, {
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

exports.AdminServiceClient = AdminServiceClient;

