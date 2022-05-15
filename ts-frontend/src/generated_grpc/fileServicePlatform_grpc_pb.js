// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var fileServicePlatform_pb = require('./fileServicePlatform_pb.js');

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteRequest(arg) {
  if (!(arg instanceof fileServicePlatform_pb.DeleteRequest)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteRequest(buffer_arg) {
  return fileServicePlatform_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteResponse(arg) {
  if (!(arg instanceof fileServicePlatform_pb.DeleteResponse)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteResponse(buffer_arg) {
  return fileServicePlatform_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadRequest(arg) {
  if (!(arg instanceof fileServicePlatform_pb.DownloadRequest)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.DownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadRequest(buffer_arg) {
  return fileServicePlatform_pb.DownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadResponse(arg) {
  if (!(arg instanceof fileServicePlatform_pb.DownloadResponse)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.DownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadResponse(buffer_arg) {
  return fileServicePlatform_pb.DownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListRequest(arg) {
  if (!(arg instanceof fileServicePlatform_pb.GetFileListRequest)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.GetFileListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListRequest(buffer_arg) {
  return fileServicePlatform_pb.GetFileListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListResponse(arg) {
  if (!(arg instanceof fileServicePlatform_pb.GetFileListResponse)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.GetFileListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListResponse(buffer_arg) {
  return fileServicePlatform_pb.GetFileListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloReply(arg) {
  if (!(arg instanceof fileServicePlatform_pb.HelloReply)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloReply(buffer_arg) {
  return fileServicePlatform_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloRequest(arg) {
  if (!(arg instanceof fileServicePlatform_pb.HelloRequest)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloRequest(buffer_arg) {
  return fileServicePlatform_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadRequest(arg) {
  if (!(arg instanceof fileServicePlatform_pb.UploadRequest)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.UploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadRequest(buffer_arg) {
  return fileServicePlatform_pb.UploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadResponse(arg) {
  if (!(arg instanceof fileServicePlatform_pb.UploadResponse)) {
    throw new Error('Expected argument of type xyz.yingshaoxo.fileServicePlatform.grpc.main.UploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadResponse(buffer_arg) {
  return fileServicePlatform_pb.UploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var MyServiceService = exports.MyServiceService = {
  // Sends a greeting
sayHello: {
    path: '/xyz.yingshaoxo.fileServicePlatform.grpc.main.MyService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: fileServicePlatform_pb.HelloRequest,
    responseType: fileServicePlatform_pb.HelloReply,
    requestSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloRequest,
    requestDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloRequest,
    responseSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloReply,
    responseDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_HelloReply,
  },
  uploadFile: {
    path: '/xyz.yingshaoxo.fileServicePlatform.grpc.main.MyService/UploadFile',
    requestStream: false,
    responseStream: false,
    requestType: fileServicePlatform_pb.UploadRequest,
    responseType: fileServicePlatform_pb.UploadResponse,
    requestSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadRequest,
    requestDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadRequest,
    responseSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadResponse,
    responseDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_UploadResponse,
  },
  downloadFile: {
    path: '/xyz.yingshaoxo.fileServicePlatform.grpc.main.MyService/DownloadFile',
    requestStream: false,
    responseStream: false,
    requestType: fileServicePlatform_pb.DownloadRequest,
    responseType: fileServicePlatform_pb.DownloadResponse,
    requestSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadRequest,
    requestDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadRequest,
    responseSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadResponse,
    responseDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DownloadResponse,
  },
  deleteFile: {
    path: '/xyz.yingshaoxo.fileServicePlatform.grpc.main.MyService/DeleteFile',
    requestStream: false,
    responseStream: false,
    requestType: fileServicePlatform_pb.DeleteRequest,
    responseType: fileServicePlatform_pb.DeleteResponse,
    requestSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteRequest,
    requestDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteRequest,
    responseSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteResponse,
    responseDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_DeleteResponse,
  },
  getFileList: {
    path: '/xyz.yingshaoxo.fileServicePlatform.grpc.main.MyService/GetFileList',
    requestStream: false,
    responseStream: false,
    requestType: fileServicePlatform_pb.GetFileListRequest,
    responseType: fileServicePlatform_pb.GetFileListResponse,
    requestSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListRequest,
    requestDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListRequest,
    responseSerialize: serialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListResponse,
    responseDeserialize: deserialize_xyz_yingshaoxo_fileServicePlatform_grpc_main_GetFileListResponse,
  },
};

exports.MyServiceClient = grpc.makeGenericClientConstructor(MyServiceService);
