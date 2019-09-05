// package: 
// file: travllr.proto

import * as travllr_pb from "./travllr_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FlightServiceGetFlights = {
  readonly methodName: string;
  readonly service: typeof FlightService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof travllr_pb.FlightRequest;
  readonly responseType: typeof travllr_pb.FlightResponse;
};

export class FlightService {
  static readonly serviceName: string;
  static readonly GetFlights: FlightServiceGetFlights;
}

type MultiCityServiceGetItinerary = {
  readonly methodName: string;
  readonly service: typeof MultiCityService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof travllr_pb.MultiCityRequest;
  readonly responseType: typeof travllr_pb.MultiCityResponse;
};

export class MultiCityService {
  static readonly serviceName: string;
  static readonly GetItinerary: MultiCityServiceGetItinerary;
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

export class FlightServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getFlights(
    requestMessage: travllr_pb.FlightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: travllr_pb.FlightResponse|null) => void
  ): UnaryResponse;
  getFlights(
    requestMessage: travllr_pb.FlightRequest,
    callback: (error: ServiceError|null, responseMessage: travllr_pb.FlightResponse|null) => void
  ): UnaryResponse;
}

export class MultiCityServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getItinerary(
    requestMessage: travllr_pb.MultiCityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: travllr_pb.MultiCityResponse|null) => void
  ): UnaryResponse;
  getItinerary(
    requestMessage: travllr_pb.MultiCityRequest,
    callback: (error: ServiceError|null, responseMessage: travllr_pb.MultiCityResponse|null) => void
  ): UnaryResponse;
}

