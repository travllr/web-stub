// package: 
// file: travllr.proto

import * as jspb from "google-protobuf";

export class FlightRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlightRequest): FlightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightRequest;
  static deserializeBinaryFromReader(message: FlightRequest, reader: jspb.BinaryReader): FlightRequest;
}

export namespace FlightRequest {
  export type AsObject = {
  }
}

export class FlightResponse extends jspb.Message {
  getA(): string;
  setA(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FlightResponse): FlightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightResponse;
  static deserializeBinaryFromReader(message: FlightResponse, reader: jspb.BinaryReader): FlightResponse;
}

export namespace FlightResponse {
  export type AsObject = {
    a: string,
  }
}

export class MultiCityRequest extends jspb.Message {
  getOriginplace(): string;
  setOriginplace(value: string): void;

  getDestinationplace(): string;
  setDestinationplace(value: string): void;

  getDestinationplace2(): string;
  setDestinationplace2(value: string): void;

  getDestinationplace3(): string;
  setDestinationplace3(value: string): void;

  getDestinationplace4(): string;
  setDestinationplace4(value: string): void;

  getLocale(): LocaleMap[keyof LocaleMap];
  setLocale(value: LocaleMap[keyof LocaleMap]): void;

  getCurrency(): CurrencyMap[keyof CurrencyMap];
  setCurrency(value: CurrencyMap[keyof CurrencyMap]): void;

  getOutboundpartialdate(): number;
  setOutboundpartialdate(value: number): void;

  getInboundpartialdate(): number;
  setInboundpartialdate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiCityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MultiCityRequest): MultiCityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiCityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiCityRequest;
  static deserializeBinaryFromReader(message: MultiCityRequest, reader: jspb.BinaryReader): MultiCityRequest;
}

export namespace MultiCityRequest {
  export type AsObject = {
    originplace: string,
    destinationplace: string,
    destinationplace2: string,
    destinationplace3: string,
    destinationplace4: string,
    locale: LocaleMap[keyof LocaleMap],
    currency: CurrencyMap[keyof CurrencyMap],
    outboundpartialdate: number,
    inboundpartialdate: number,
  }
}

export class MultiCityResponse extends jspb.Message {
  getA(): string;
  setA(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiCityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiCityResponse): MultiCityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiCityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiCityResponse;
  static deserializeBinaryFromReader(message: MultiCityResponse, reader: jspb.BinaryReader): MultiCityResponse;
}

export namespace MultiCityResponse {
  export type AsObject = {
    a: string,
  }
}

export interface LocaleMap {
  US: 0;
  IN: 1;
  FR: 2;
}

export const Locale: LocaleMap;

export interface CurrencyMap {
  USD: 0;
  INR: 1;
  GBP: 2;
  EUR: 3;
}

export const Currency: CurrencyMap;

