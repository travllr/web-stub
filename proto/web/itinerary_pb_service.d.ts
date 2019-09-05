// package: com.infinite.travllr
// file: itinerary.proto

import * as itinerary_pb from "./itinerary_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ItineraryPlannerServicePlan = {
  readonly methodName: string;
  readonly service: typeof ItineraryPlannerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof itinerary_pb.ItineraryRequest;
  readonly responseType: typeof itinerary_pb.ItineraryResponse;
};

export class ItineraryPlannerService {
  static readonly serviceName: string;
  static readonly Plan: ItineraryPlannerServicePlan;
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

export class ItineraryPlannerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  plan(
    requestMessage: itinerary_pb.ItineraryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: itinerary_pb.ItineraryResponse|null) => void
  ): UnaryResponse;
  plan(
    requestMessage: itinerary_pb.ItineraryRequest,
    callback: (error: ServiceError|null, responseMessage: itinerary_pb.ItineraryResponse|null) => void
  ): UnaryResponse;
}

