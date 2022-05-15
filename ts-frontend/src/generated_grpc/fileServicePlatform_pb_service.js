// package: xyz.yingshaoxo.fileServicePlatform.grpc.main
// file: fileServicePlatform.proto

var fileServicePlatform_pb = require("./fileServicePlatform_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MyService = (function () {
  function MyService() {}
  MyService.serviceName = "xyz.yingshaoxo.fileServicePlatform.grpc.main.MyService";
  return MyService;
}());

MyService.SayHello = {
  methodName: "SayHello",
  service: MyService,
  requestStream: false,
  responseStream: false,
  requestType: fileServicePlatform_pb.HelloRequest,
  responseType: fileServicePlatform_pb.HelloReply
};

MyService.UploadFile = {
  methodName: "UploadFile",
  service: MyService,
  requestStream: false,
  responseStream: false,
  requestType: fileServicePlatform_pb.UploadRequest,
  responseType: fileServicePlatform_pb.UploadResponse
};

MyService.DownloadFile = {
  methodName: "DownloadFile",
  service: MyService,
  requestStream: false,
  responseStream: false,
  requestType: fileServicePlatform_pb.DownloadRequest,
  responseType: fileServicePlatform_pb.DownloadResponse
};

MyService.DeleteFile = {
  methodName: "DeleteFile",
  service: MyService,
  requestStream: false,
  responseStream: false,
  requestType: fileServicePlatform_pb.DeleteRequest,
  responseType: fileServicePlatform_pb.DeleteResponse
};

MyService.GetFileList = {
  methodName: "GetFileList",
  service: MyService,
  requestStream: false,
  responseStream: false,
  requestType: fileServicePlatform_pb.GetFileListRequest,
  responseType: fileServicePlatform_pb.GetFileListResponse
};

exports.MyService = MyService;

function MyServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MyServiceClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MyService.SayHello, {
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

MyServiceClient.prototype.uploadFile = function uploadFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MyService.UploadFile, {
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

MyServiceClient.prototype.downloadFile = function downloadFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MyService.DownloadFile, {
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

MyServiceClient.prototype.deleteFile = function deleteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MyService.DeleteFile, {
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

MyServiceClient.prototype.getFileList = function getFileList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MyService.GetFileList, {
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

exports.MyServiceClient = MyServiceClient;

