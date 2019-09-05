// package: com.infinite.travllr
// file: admin.proto

import * as admin_pb from "./admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdminServicelogin = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.UserLogin;
  readonly responseType: typeof admin_pb.UserLoginResponse;
};

type AdminServicecreateUser = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.UserRequest;
  readonly responseType: typeof admin_pb.CreateUserResponse;
};

type AdminServicelist = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.UserListRequest;
  readonly responseType: typeof admin_pb.UserListResponse;
};

type AdminServiceedit = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.UserRequest;
  readonly responseType: typeof admin_pb.EditUserInfoResponse;
};

type AdminServiceaccess = {
  readonly methodName: string;
  readonly service: typeof AdminService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admin_pb.EditUserAccessRequest;
  readonly responseType: typeof admin_pb.EditUserAccessResponse;
};

export class AdminService {
  static readonly serviceName: string;
  static readonly login: AdminServicelogin;
  static readonly createUser: AdminServicecreateUser;
  static readonly list: AdminServicelist;
  static readonly edit: AdminServiceedit;
  static readonly access: AdminServiceaccess;
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

export class AdminServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: admin_pb.UserLogin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.UserLoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: admin_pb.UserLogin,
    callback: (error: ServiceError|null, responseMessage: admin_pb.UserLoginResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: admin_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: admin_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: admin_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: admin_pb.UserListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.UserListResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: admin_pb.UserListRequest,
    callback: (error: ServiceError|null, responseMessage: admin_pb.UserListResponse|null) => void
  ): UnaryResponse;
  edit(
    requestMessage: admin_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.EditUserInfoResponse|null) => void
  ): UnaryResponse;
  edit(
    requestMessage: admin_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: admin_pb.EditUserInfoResponse|null) => void
  ): UnaryResponse;
  access(
    requestMessage: admin_pb.EditUserAccessRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admin_pb.EditUserAccessResponse|null) => void
  ): UnaryResponse;
  access(
    requestMessage: admin_pb.EditUserAccessRequest,
    callback: (error: ServiceError|null, responseMessage: admin_pb.EditUserAccessResponse|null) => void
  ): UnaryResponse;
}

