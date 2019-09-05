// package: com.infinite.travllr.visa
// file: visa.proto

var visa_pb = require("./visa_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VisaService = (function () {
  function VisaService() {}
  VisaService.serviceName = "com.infinite.travllr.visa.VisaService";
  return VisaService;
}());

VisaService.Request = {
  methodName: "Request",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.VisaDocumentsRequest,
  responseType: visa_pb.VisaDocumentsResponse
};

VisaService.ListCountries = {
  methodName: "ListCountries",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.CountryRequest,
  responseType: visa_pb.CountryListResponse
};

VisaService.ListVisaCountries = {
  methodName: "ListVisaCountries",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.CountryRequest,
  responseType: visa_pb.VisaCountryListResponse
};

VisaService.ListCities = {
  methodName: "ListCities",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.EmptyRequest,
  responseType: visa_pb.CityListResponse
};

VisaService.AddVisaDocument = {
  methodName: "AddVisaDocument",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.AddVisaDocumentRequest,
  responseType: visa_pb.AddVisaDocumentResponse
};

VisaService.SearchVisaDocument = {
  methodName: "SearchVisaDocument",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.SearchVisaDocumentRequest,
  responseType: visa_pb.SearchVisaDocumentResponse
};

VisaService.DeleteVisaDocument = {
  methodName: "DeleteVisaDocument",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.DeleteVisaDocumentRequest,
  responseType: visa_pb.DeleteVisaDocumentResponse
};

VisaService.UpdateVisaDocument = {
  methodName: "UpdateVisaDocument",
  service: VisaService,
  requestStream: false,
  responseStream: false,
  requestType: visa_pb.UpdateVisaDocumentRequest,
  responseType: visa_pb.UpdateVisaDocumentResponse
};

exports.VisaService = VisaService;

function VisaServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VisaServiceClient.prototype.request = function request(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.Request, {
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

VisaServiceClient.prototype.listCountries = function listCountries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.ListCountries, {
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

VisaServiceClient.prototype.listVisaCountries = function listVisaCountries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.ListVisaCountries, {
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

VisaServiceClient.prototype.listCities = function listCities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.ListCities, {
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

VisaServiceClient.prototype.addVisaDocument = function addVisaDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.AddVisaDocument, {
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

VisaServiceClient.prototype.searchVisaDocument = function searchVisaDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.SearchVisaDocument, {
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

VisaServiceClient.prototype.deleteVisaDocument = function deleteVisaDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.DeleteVisaDocument, {
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

VisaServiceClient.prototype.updateVisaDocument = function updateVisaDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VisaService.UpdateVisaDocument, {
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

exports.VisaServiceClient = VisaServiceClient;

