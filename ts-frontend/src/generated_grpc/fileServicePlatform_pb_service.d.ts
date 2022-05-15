// package: xyz.yingshaoxo.fileServicePlatform.grpc.main
// file: fileServicePlatform.proto

import * as fileServicePlatform_pb from "./fileServicePlatform_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MyServiceSayHello = {
  readonly methodName: string;
  readonly service: typeof MyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof fileServicePlatform_pb.HelloRequest;
  readonly responseType: typeof fileServicePlatform_pb.HelloReply;
};

type MyServiceUploadFile = {
  readonly methodName: string;
  readonly service: typeof MyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof fileServicePlatform_pb.UploadRequest;
  readonly responseType: typeof fileServicePlatform_pb.UploadResponse;
};

type MyServiceDownloadFile = {
  readonly methodName: string;
  readonly service: typeof MyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof fileServicePlatform_pb.DownloadRequest;
  readonly responseType: typeof fileServicePlatform_pb.DownloadResponse;
};

type MyServiceDeleteFile = {
  readonly methodName: string;
  readonly service: typeof MyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof fileServicePlatform_pb.DeleteRequest;
  readonly responseType: typeof fileServicePlatform_pb.DeleteResponse;
};

type MyServiceGetFileList = {
  readonly methodName: string;
  readonly service: typeof MyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof fileServicePlatform_pb.GetFileListRequest;
  readonly responseType: typeof fileServicePlatform_pb.GetFileListResponse;
};

export class MyService {
  static readonly serviceName: string;
  static readonly SayHello: MyServiceSayHello;
  static readonly UploadFile: MyServiceUploadFile;
  static readonly DownloadFile: MyServiceDownloadFile;
  static readonly DeleteFile: MyServiceDeleteFile;
  static readonly GetFileList: MyServiceGetFileList;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MyServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: fileServicePlatform_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: fileServicePlatform_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.HelloReply|null) => void
  ): UnaryResponse;
  uploadFile(
    requestMessage: fileServicePlatform_pb.UploadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.UploadResponse|null) => void
  ): UnaryResponse;
  uploadFile(
    requestMessage: fileServicePlatform_pb.UploadRequest,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.UploadResponse|null) => void
  ): UnaryResponse;
  downloadFile(
    requestMessage: fileServicePlatform_pb.DownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.DownloadResponse|null) => void
  ): UnaryResponse;
  downloadFile(
    requestMessage: fileServicePlatform_pb.DownloadRequest,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.DownloadResponse|null) => void
  ): UnaryResponse;
  deleteFile(
    requestMessage: fileServicePlatform_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  deleteFile(
    requestMessage: fileServicePlatform_pb.DeleteRequest,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  getFileList(
    requestMessage: fileServicePlatform_pb.GetFileListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.GetFileListResponse|null) => void
  ): UnaryResponse;
  getFileList(
    requestMessage: fileServicePlatform_pb.GetFileListRequest,
    callback: (error: ServiceError|null, responseMessage: fileServicePlatform_pb.GetFileListResponse|null) => void
  ): UnaryResponse;
}

