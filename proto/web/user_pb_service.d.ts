// package: com.infinite.travllr
// file: user.proto

import * as user_pb from "./user_pb";
import * as common_pb from "./common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceuserList = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_pb.Empty;
  readonly responseType: typeof user_pb.UserList;
};

type UserServiceuserDetail = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.UserDetailRequest;
  readonly responseType: typeof user_pb.UserDetailResponse;
};

export class UserService {
  static readonly serviceName: string;
  static readonly userList: UserServiceuserList;
  static readonly userDetail: UserServiceuserDetail;
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

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  userList(
    requestMessage: common_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.UserList|null) => void
  ): UnaryResponse;
  userList(
    requestMessage: common_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: user_pb.UserList|null) => void
  ): UnaryResponse;
  userDetail(
    requestMessage: user_pb.UserDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.UserDetailResponse|null) => void
  ): UnaryResponse;
  userDetail(
    requestMessage: user_pb.UserDetailRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.UserDetailResponse|null) => void
  ): UnaryResponse;
}

