// package: com.infinite.travllr.airline
// file: airline.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AirlineRequest extends jspb.Message {
  getEnduserip(): string;
  setEnduserip(value: string): void;

  getAdultcount(): number;
  setAdultcount(value: number): void;

  getChildcount(): number;
  setChildcount(value: number): void;

  getInfantcount(): number;
  setInfantcount(value: number): void;

  getJourneytype(): JourneyTypeMap[keyof JourneyTypeMap];
  setJourneytype(value: JourneyTypeMap[keyof JourneyTypeMap]): void;

  clearSegmentsList(): void;
  getSegmentsList(): Array<Segment>;
  setSegmentsList(value: Array<Segment>): void;
  addSegments(value?: Segment, index?: number): Segment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AirlineRequest): AirlineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AirlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirlineRequest;
  static deserializeBinaryFromReader(message: AirlineRequest, reader: jspb.BinaryReader): AirlineRequest;
}

export namespace AirlineRequest {
  export type AsObject = {
    enduserip: string,
    adultcount: number,
    childcount: number,
    infantcount: number,
    journeytype: JourneyTypeMap[keyof JourneyTypeMap],
    segmentsList: Array<Segment.AsObject>,
  }
}

export class Segment extends jspb.Message {
  getOrigin(): string;
  setOrigin(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  getDeparturedate(): string;
  setDeparturedate(value: string): void;

  getArrivaldate(): string;
  setArrivaldate(value: string): void;

  getCabinclass(): CabinClassMap[keyof CabinClassMap];
  setCabinclass(value: CabinClassMap[keyof CabinClassMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Segment.AsObject;
  static toObject(includeInstance: boolean, msg: Segment): Segment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Segment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Segment;
  static deserializeBinaryFromReader(message: Segment, reader: jspb.BinaryReader): Segment;
}

export namespace Segment {
  export type AsObject = {
    origin: string,
    destination: string,
    departuredate: string,
    arrivaldate: string,
    cabinclass: CabinClassMap[keyof CabinClassMap],
  }
}

export class AirlineResponse extends jspb.Message {
  getTraceid(): string;
  setTraceid(value: string): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  clearResultsList(): void;
  getResultsList(): Array<Results>;
  setResultsList(value: Array<Results>): void;
  addResults(value?: Results, index?: number): Results;

  getIsrefundable(): boolean;
  setIsrefundable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirlineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AirlineResponse): AirlineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AirlineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirlineResponse;
  static deserializeBinaryFromReader(message: AirlineResponse, reader: jspb.BinaryReader): AirlineResponse;
}

export namespace AirlineResponse {
  export type AsObject = {
    traceid: string,
    origin: string,
    destination: string,
    resultsList: Array<Results.AsObject>,
    isrefundable: boolean,
  }
}

export class Results extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Results.AsObject;
  static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Results, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Results;
  static deserializeBinaryFromReader(message: Results, reader: jspb.BinaryReader): Results;
}

export namespace Results {
  export type AsObject = {
  }
}

export interface JourneyTypeMap {
  UNKNOWN: 0;
  ONEWAY: 1;
  RETURN: 2;
  MULTISTOP: 3;
  ADVANCED_SEARCH: 4;
  SPECIAL_RETURN: 5;
}

export const JourneyType: JourneyTypeMap;

export interface CabinClassMap {
  DUMMY: 0;
  ALL: 1;
  ECONOMY: 2;
  PREMIUM_ECONOMY: 3;
  BUSINESS: 4;
  PREMIUM_BUSINESS: 5;
  FIRST: 6;
}

export const CabinClass: CabinClassMap;

