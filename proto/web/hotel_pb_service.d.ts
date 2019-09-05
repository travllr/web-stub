// package: com.infinite.travllr.hotel
// file: hotel.proto

import * as hotel_pb from "./hotel_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HotelServicegetHotels = {
  readonly methodName: string;
  readonly service: typeof HotelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hotel_pb.HotelRequest;
  readonly responseType: typeof hotel_pb.HotelResponse;
};

export class HotelService {
  static readonly serviceName: string;
  static readonly getHotels: HotelServicegetHotels;
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

export class HotelServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHotels(
    requestMessage: hotel_pb.HotelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hotel_pb.HotelResponse|null) => void
  ): UnaryResponse;
  getHotels(
    requestMessage: hotel_pb.HotelRequest,
    callback: (error: ServiceError|null, responseMessage: hotel_pb.HotelResponse|null) => void
  ): UnaryResponse;
}

