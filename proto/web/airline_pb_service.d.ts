// package: com.infinite.travllr.airline
// file: airline.proto

import * as airline_pb from "./airline_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AirlineServicegetFlights = {
  readonly methodName: string;
  readonly service: typeof AirlineService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof airline_pb.AirlineRequest;
  readonly responseType: typeof airline_pb.AirlineResponse;
};

export class AirlineService {
  static readonly serviceName: string;
  static readonly getFlights: AirlineServicegetFlights;
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

export class AirlineServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getFlights(
    requestMessage: airline_pb.AirlineRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: airline_pb.AirlineResponse|null) => void
  ): UnaryResponse;
  getFlights(
    requestMessage: airline_pb.AirlineRequest,
    callback: (error: ServiceError|null, responseMessage: airline_pb.AirlineResponse|null) => void
  ): UnaryResponse;
}

