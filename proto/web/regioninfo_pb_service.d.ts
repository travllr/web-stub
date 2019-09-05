// package: com.infinite.travllr
// file: regioninfo.proto

import * as regioninfo_pb from "./regioninfo_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RegionInfoServiceget = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.RegionInfoRequest;
  readonly responseType: typeof regioninfo_pb.RegionInfoResponse;
};

type RegionInfoServicesave = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.RegionInfoSaveRequest;
  readonly responseType: typeof regioninfo_pb.RegionInfoSaveResponse;
};

type RegionInfoServiceupdate = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.RegionInfoUpdateRequest;
  readonly responseType: typeof regioninfo_pb.RegionInfoUpdateResponse;
};

type RegionInfoServicelist = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.RegionListRequest;
  readonly responseType: typeof regioninfo_pb.RegionListResponse;
};

type RegionInfoServicedelete = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.RegionDeleteRequest;
  readonly responseType: typeof regioninfo_pb.RegionDeleteResponse;
};

type RegionInfoServicecities = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.CityListRequest;
  readonly responseType: typeof regioninfo_pb.CityListResponse;
};

type RegionInfoServiceinsertAirport = {
  readonly methodName: string;
  readonly service: typeof RegionInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof regioninfo_pb.AirportInsertRequest;
  readonly responseType: typeof regioninfo_pb.AirportInsertResponse;
};

export class RegionInfoService {
  static readonly serviceName: string;
  static readonly get: RegionInfoServiceget;
  static readonly save: RegionInfoServicesave;
  static readonly update: RegionInfoServiceupdate;
  static readonly list: RegionInfoServicelist;
  static readonly delete: RegionInfoServicedelete;
  static readonly cities: RegionInfoServicecities;
  static readonly insertAirport: RegionInfoServiceinsertAirport;
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

export class RegionInfoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  get(
    requestMessage: regioninfo_pb.RegionInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionInfoResponse|null) => void
  ): UnaryResponse;
  get(
    requestMessage: regioninfo_pb.RegionInfoRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionInfoResponse|null) => void
  ): UnaryResponse;
  save(
    requestMessage: regioninfo_pb.RegionInfoSaveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionInfoSaveResponse|null) => void
  ): UnaryResponse;
  save(
    requestMessage: regioninfo_pb.RegionInfoSaveRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionInfoSaveResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: regioninfo_pb.RegionInfoUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionInfoUpdateResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: regioninfo_pb.RegionInfoUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionInfoUpdateResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: regioninfo_pb.RegionListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionListResponse|null) => void
  ): UnaryResponse;
  list(
    requestMessage: regioninfo_pb.RegionListRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionListResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: regioninfo_pb.RegionDeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionDeleteResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: regioninfo_pb.RegionDeleteRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.RegionDeleteResponse|null) => void
  ): UnaryResponse;
  cities(
    requestMessage: regioninfo_pb.CityListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.CityListResponse|null) => void
  ): UnaryResponse;
  cities(
    requestMessage: regioninfo_pb.CityListRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.CityListResponse|null) => void
  ): UnaryResponse;
  insertAirport(
    requestMessage: regioninfo_pb.AirportInsertRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.AirportInsertResponse|null) => void
  ): UnaryResponse;
  insertAirport(
    requestMessage: regioninfo_pb.AirportInsertRequest,
    callback: (error: ServiceError|null, responseMessage: regioninfo_pb.AirportInsertResponse|null) => void
  ): UnaryResponse;
}

