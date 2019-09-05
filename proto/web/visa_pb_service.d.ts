// package: com.infinite.travllr.visa
// file: visa.proto

import * as visa_pb from "./visa_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VisaServiceRequest = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.VisaDocumentsRequest;
  readonly responseType: typeof visa_pb.VisaDocumentsResponse;
};

type VisaServiceListCountries = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.CountryRequest;
  readonly responseType: typeof visa_pb.CountryListResponse;
};

type VisaServiceListVisaCountries = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.CountryRequest;
  readonly responseType: typeof visa_pb.VisaCountryListResponse;
};

type VisaServiceListCities = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.EmptyRequest;
  readonly responseType: typeof visa_pb.CityListResponse;
};

type VisaServiceAddVisaDocument = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.AddVisaDocumentRequest;
  readonly responseType: typeof visa_pb.AddVisaDocumentResponse;
};

type VisaServiceSearchVisaDocument = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.SearchVisaDocumentRequest;
  readonly responseType: typeof visa_pb.SearchVisaDocumentResponse;
};

type VisaServiceDeleteVisaDocument = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.DeleteVisaDocumentRequest;
  readonly responseType: typeof visa_pb.DeleteVisaDocumentResponse;
};

type VisaServiceUpdateVisaDocument = {
  readonly methodName: string;
  readonly service: typeof VisaService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof visa_pb.UpdateVisaDocumentRequest;
  readonly responseType: typeof visa_pb.UpdateVisaDocumentResponse;
};

export class VisaService {
  static readonly serviceName: string;
  static readonly Request: VisaServiceRequest;
  static readonly ListCountries: VisaServiceListCountries;
  static readonly ListVisaCountries: VisaServiceListVisaCountries;
  static readonly ListCities: VisaServiceListCities;
  static readonly AddVisaDocument: VisaServiceAddVisaDocument;
  static readonly SearchVisaDocument: VisaServiceSearchVisaDocument;
  static readonly DeleteVisaDocument: VisaServiceDeleteVisaDocument;
  static readonly UpdateVisaDocument: VisaServiceUpdateVisaDocument;
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

export class VisaServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  request(
    requestMessage: visa_pb.VisaDocumentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.VisaDocumentsResponse|null) => void
  ): UnaryResponse;
  request(
    requestMessage: visa_pb.VisaDocumentsRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.VisaDocumentsResponse|null) => void
  ): UnaryResponse;
  listCountries(
    requestMessage: visa_pb.CountryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.CountryListResponse|null) => void
  ): UnaryResponse;
  listCountries(
    requestMessage: visa_pb.CountryRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.CountryListResponse|null) => void
  ): UnaryResponse;
  listVisaCountries(
    requestMessage: visa_pb.CountryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.VisaCountryListResponse|null) => void
  ): UnaryResponse;
  listVisaCountries(
    requestMessage: visa_pb.CountryRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.VisaCountryListResponse|null) => void
  ): UnaryResponse;
  listCities(
    requestMessage: visa_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.CityListResponse|null) => void
  ): UnaryResponse;
  listCities(
    requestMessage: visa_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.CityListResponse|null) => void
  ): UnaryResponse;
  addVisaDocument(
    requestMessage: visa_pb.AddVisaDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.AddVisaDocumentResponse|null) => void
  ): UnaryResponse;
  addVisaDocument(
    requestMessage: visa_pb.AddVisaDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.AddVisaDocumentResponse|null) => void
  ): UnaryResponse;
  searchVisaDocument(
    requestMessage: visa_pb.SearchVisaDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.SearchVisaDocumentResponse|null) => void
  ): UnaryResponse;
  searchVisaDocument(
    requestMessage: visa_pb.SearchVisaDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.SearchVisaDocumentResponse|null) => void
  ): UnaryResponse;
  deleteVisaDocument(
    requestMessage: visa_pb.DeleteVisaDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.DeleteVisaDocumentResponse|null) => void
  ): UnaryResponse;
  deleteVisaDocument(
    requestMessage: visa_pb.DeleteVisaDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.DeleteVisaDocumentResponse|null) => void
  ): UnaryResponse;
  updateVisaDocument(
    requestMessage: visa_pb.UpdateVisaDocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: visa_pb.UpdateVisaDocumentResponse|null) => void
  ): UnaryResponse;
  updateVisaDocument(
    requestMessage: visa_pb.UpdateVisaDocumentRequest,
    callback: (error: ServiceError|null, responseMessage: visa_pb.UpdateVisaDocumentResponse|null) => void
  ): UnaryResponse;
}

