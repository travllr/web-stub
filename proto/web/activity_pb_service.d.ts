// package: com.infinite.travllr
// file: activity.proto

import * as activity_pb from "./activity_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ActivityServicesave = {
  readonly methodName: string;
  readonly service: typeof ActivityService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof activity_pb.ActivityInformation;
  readonly responseType: typeof activity_pb.SaveActivityResponse;
};

type ActivityServicelist = {
  readonly methodName: string;
  readonly service: typeof ActivityService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof activity_pb.ActivityListRequest;
  readonly responseType: typeof activity_pb.ActivityListResponse;
};

type ActivityServicedelete = {
  readonly methodName: string;
  readonly service: typeof ActivityService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof activity_pb.DeleteActivityRequest;
  readonly responseType: typeof activity_pb.DeleteActivityResponse;
};

type ActivityServiceupdate = {
  readonly methodName: string;
  readonly service: typeof ActivityService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof activity_pb.ActivityInformation;
  readonly responseType: typeof activity_pb.UpdateActivityResponse;
};

export class ActivityService {
  static readonly serviceName: string;
  static readonly save: ActivityServicesave;
  static readonly list: ActivityServicelist;
  static readonly delete: ActivityServicedelete;
  static readonly update: ActivityServiceupdate;
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

export class ActivityServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  save(
    requestMessage: activity_pb.ActivityInformation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: activity_pb.SaveActivityResponse|null) => void
  ): UnaryResponse;
  save(
    requestMessage: activity_pb.ActivityInformation,
    callback: (error: ServiceError|null, responseMessage: activity_pb.SaveActivityResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: activity_pb.ActivityListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: activity_pb.ActivityListResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: activity_pb.ActivityListRequest,
    callback: (error: ServiceError|null, responseMessage: activity_pb.ActivityListResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: activity_pb.DeleteActivityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: activity_pb.DeleteActivityResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: activity_pb.DeleteActivityRequest,
    callback: (error: ServiceError|null, responseMessage: activity_pb.DeleteActivityResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: activity_pb.ActivityInformation,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: activity_pb.UpdateActivityResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: activity_pb.ActivityInformation,
    callback: (error: ServiceError|null, responseMessage: activity_pb.UpdateActivityResponse|null) => void
  ): UnaryResponse;
}

