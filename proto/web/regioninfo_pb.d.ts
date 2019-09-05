// package: com.infinite.travllr
// file: regioninfo.proto

import * as jspb from "google-protobuf";

export class RegionInfoRequest extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): void;

  getRegionname(): string;
  setRegionname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfoRequest): RegionInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfoRequest;
  static deserializeBinaryFromReader(message: RegionInfoRequest, reader: jspb.BinaryReader): RegionInfoRequest;
}

export namespace RegionInfoRequest {
  export type AsObject = {
    countrycode: string,
    regionname: string,
  }
}

export class RegionInfoUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearCountrycodeList(): void;
  getCountrycodeList(): Array<string>;
  setCountrycodeList(value: Array<string>): void;
  addCountrycode(value: string, index?: number): string;

  getRegionname(): string;
  setRegionname(value: string): void;

  clearCountriesList(): void;
  getCountriesList(): Array<string>;
  setCountriesList(value: Array<string>): void;
  addCountries(value: string, index?: number): string;

  clearWeatherinfoList(): void;
  getWeatherinfoList(): Array<WeatherInfo>;
  setWeatherinfoList(value: Array<WeatherInfo>): void;
  addWeatherinfo(value?: WeatherInfo, index?: number): WeatherInfo;

  clearItineraryroutesList(): void;
  getItineraryroutesList(): Array<ItineraryRoutes>;
  setItineraryroutesList(value: Array<ItineraryRoutes>): void;
  addItineraryroutes(value?: ItineraryRoutes, index?: number): ItineraryRoutes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfoUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfoUpdateRequest): RegionInfoUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionInfoUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfoUpdateRequest;
  static deserializeBinaryFromReader(message: RegionInfoUpdateRequest, reader: jspb.BinaryReader): RegionInfoUpdateRequest;
}

export namespace RegionInfoUpdateRequest {
  export type AsObject = {
    id: string,
    countrycodeList: Array<string>,
    regionname: string,
    countriesList: Array<string>,
    weatherinfoList: Array<WeatherInfo.AsObject>,
    itineraryroutesList: Array<ItineraryRoutes.AsObject>,
  }
}

export class RegionInfoUpdateResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfoUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfoUpdateResponse): RegionInfoUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionInfoUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfoUpdateResponse;
  static deserializeBinaryFromReader(message: RegionInfoUpdateResponse, reader: jspb.BinaryReader): RegionInfoUpdateResponse;
}

export namespace RegionInfoUpdateResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class CityRouteInfo extends jspb.Message {
  getTransferinfo(): CityRouteInfo.TransferTypeMap[keyof CityRouteInfo.TransferTypeMap];
  setTransferinfo(value: CityRouteInfo.TransferTypeMap[keyof CityRouteInfo.TransferTypeMap]): void;

  getNoofdays(): number;
  setNoofdays(value: number): void;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): CityDetail | undefined;
  setCity(value?: CityDetail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityRouteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CityRouteInfo): CityRouteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityRouteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityRouteInfo;
  static deserializeBinaryFromReader(message: CityRouteInfo, reader: jspb.BinaryReader): CityRouteInfo;
}

export namespace CityRouteInfo {
  export type AsObject = {
    transferinfo: CityRouteInfo.TransferTypeMap[keyof CityRouteInfo.TransferTypeMap],
    noofdays: number,
    city?: CityDetail.AsObject,
  }

  export interface TransferTypeMap {
    FERRY: 0;
    FLY: 1;
    TRAIN: 2;
    CAB: 3;
  }

  export const TransferType: TransferTypeMap;
}

export class ItineraryRoutes extends jspb.Message {
  hasDurationinfo(): boolean;
  clearDurationinfo(): void;
  getDurationinfo(): DurationInfo | undefined;
  setDurationinfo(value?: DurationInfo): void;

  clearCityroutesList(): void;
  getCityroutesList(): Array<CityRouteInfo>;
  setCityroutesList(value: Array<CityRouteInfo>): void;
  addCityroutes(value?: CityRouteInfo, index?: number): CityRouteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItineraryRoutes.AsObject;
  static toObject(includeInstance: boolean, msg: ItineraryRoutes): ItineraryRoutes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItineraryRoutes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItineraryRoutes;
  static deserializeBinaryFromReader(message: ItineraryRoutes, reader: jspb.BinaryReader): ItineraryRoutes;
}

export namespace ItineraryRoutes {
  export type AsObject = {
    durationinfo?: DurationInfo.AsObject,
    cityroutesList: Array<CityRouteInfo.AsObject>,
  }
}

export class RegionInfoSaveRequest extends jspb.Message {
  clearCountrycodeList(): void;
  getCountrycodeList(): Array<string>;
  setCountrycodeList(value: Array<string>): void;
  addCountrycode(value: string, index?: number): string;

  getRegionname(): string;
  setRegionname(value: string): void;

  clearCountriesList(): void;
  getCountriesList(): Array<string>;
  setCountriesList(value: Array<string>): void;
  addCountries(value: string, index?: number): string;

  clearWeatherinfoList(): void;
  getWeatherinfoList(): Array<WeatherInfo>;
  setWeatherinfoList(value: Array<WeatherInfo>): void;
  addWeatherinfo(value?: WeatherInfo, index?: number): WeatherInfo;

  clearItineraryroutesList(): void;
  getItineraryroutesList(): Array<ItineraryRoutes>;
  setItineraryroutesList(value: Array<ItineraryRoutes>): void;
  addItineraryroutes(value?: ItineraryRoutes, index?: number): ItineraryRoutes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfoSaveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfoSaveRequest): RegionInfoSaveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionInfoSaveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfoSaveRequest;
  static deserializeBinaryFromReader(message: RegionInfoSaveRequest, reader: jspb.BinaryReader): RegionInfoSaveRequest;
}

export namespace RegionInfoSaveRequest {
  export type AsObject = {
    countrycodeList: Array<string>,
    regionname: string,
    countriesList: Array<string>,
    weatherinfoList: Array<WeatherInfo.AsObject>,
    itineraryroutesList: Array<ItineraryRoutes.AsObject>,
  }
}

export class RegionInfoSaveResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfoSaveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfoSaveResponse): RegionInfoSaveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionInfoSaveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfoSaveResponse;
  static deserializeBinaryFromReader(message: RegionInfoSaveResponse, reader: jspb.BinaryReader): RegionInfoSaveResponse;
}

export namespace RegionInfoSaveResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class RegionInfoResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearCountrycodeList(): void;
  getCountrycodeList(): Array<string>;
  setCountrycodeList(value: Array<string>): void;
  addCountrycode(value: string, index?: number): string;

  getRegionname(): string;
  setRegionname(value: string): void;

  clearWeatherinfoList(): void;
  getWeatherinfoList(): Array<WeatherInfo>;
  setWeatherinfoList(value: Array<WeatherInfo>): void;
  addWeatherinfo(value?: WeatherInfo, index?: number): WeatherInfo;

  clearItineraryroutesList(): void;
  getItineraryroutesList(): Array<ItineraryRoutes>;
  setItineraryroutesList(value: Array<ItineraryRoutes>): void;
  addItineraryroutes(value?: ItineraryRoutes, index?: number): ItineraryRoutes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfoResponse): RegionInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfoResponse;
  static deserializeBinaryFromReader(message: RegionInfoResponse, reader: jspb.BinaryReader): RegionInfoResponse;
}

export namespace RegionInfoResponse {
  export type AsObject = {
    id: string,
    countrycodeList: Array<string>,
    regionname: string,
    weatherinfoList: Array<WeatherInfo.AsObject>,
    itineraryroutesList: Array<ItineraryRoutes.AsObject>,
  }
}

export class WeatherInfo extends jspb.Message {
  getMonth(): string;
  setMonth(value: string): void;

  getMintemp(): number;
  setMintemp(value: number): void;

  getMaxtemp(): number;
  setMaxtemp(value: number): void;

  getSeason(): WeatherInfo.SeasonMap[keyof WeatherInfo.SeasonMap];
  setSeason(value: WeatherInfo.SeasonMap[keyof WeatherInfo.SeasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherInfo): WeatherInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherInfo;
  static deserializeBinaryFromReader(message: WeatherInfo, reader: jspb.BinaryReader): WeatherInfo;
}

export namespace WeatherInfo {
  export type AsObject = {
    month: string,
    mintemp: number,
    maxtemp: number,
    season: WeatherInfo.SeasonMap[keyof WeatherInfo.SeasonMap],
  }

  export interface SeasonMap {
    OUR_PICK: 0;
    SECOND_BEST: 1;
    OFF_SEASON: 2;
    TOO_CROWDED: 3;
  }

  export const Season: SeasonMap;
}

export class DurationInfo extends jspb.Message {
  getPopular(): boolean;
  setPopular(value: boolean): void;

  getMinimumdays(): number;
  setMinimumdays(value: number): void;

  getMaximumdays(): number;
  setMaximumdays(value: number): void;

  getRecommended(): boolean;
  setRecommended(value: boolean): void;

  getSize(): DurationInfo.PackageSizeMap[keyof DurationInfo.PackageSizeMap];
  setSize(value: DurationInfo.PackageSizeMap[keyof DurationInfo.PackageSizeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DurationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DurationInfo): DurationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DurationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DurationInfo;
  static deserializeBinaryFromReader(message: DurationInfo, reader: jspb.BinaryReader): DurationInfo;
}

export namespace DurationInfo {
  export type AsObject = {
    popular: boolean,
    minimumdays: number,
    maximumdays: number,
    recommended: boolean,
    size: DurationInfo.PackageSizeMap[keyof DurationInfo.PackageSizeMap],
  }

  export interface PackageSizeMap {
    SMALL: 0;
    MEDIUM: 1;
    LARGE: 2;
    EXTRA_LARGE: 3;
  }

  export const PackageSize: PackageSizeMap;
}

export class RegionListRequest extends jspb.Message {
  clearCountrycodeList(): void;
  getCountrycodeList(): Array<string>;
  setCountrycodeList(value: Array<string>): void;
  addCountrycode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegionListRequest): RegionListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionListRequest;
  static deserializeBinaryFromReader(message: RegionListRequest, reader: jspb.BinaryReader): RegionListRequest;
}

export namespace RegionListRequest {
  export type AsObject = {
    countrycodeList: Array<string>,
  }
}

export class RegionListResponse extends jspb.Message {
  clearRegionsList(): void;
  getRegionsList(): Array<RegionInfoResponse>;
  setRegionsList(value: Array<RegionInfoResponse>): void;
  addRegions(value?: RegionInfoResponse, index?: number): RegionInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegionListResponse): RegionListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionListResponse;
  static deserializeBinaryFromReader(message: RegionListResponse, reader: jspb.BinaryReader): RegionListResponse;
}

export namespace RegionListResponse {
  export type AsObject = {
    regionsList: Array<RegionInfoResponse.AsObject>,
  }
}

export class RegionDeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegionDeleteRequest): RegionDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionDeleteRequest;
  static deserializeBinaryFromReader(message: RegionDeleteRequest, reader: jspb.BinaryReader): RegionDeleteRequest;
}

export namespace RegionDeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class RegionDeleteResponse extends jspb.Message {
  getResponse(): boolean;
  setResponse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegionDeleteResponse): RegionDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionDeleteResponse;
  static deserializeBinaryFromReader(message: RegionDeleteResponse, reader: jspb.BinaryReader): RegionDeleteResponse;
}

export namespace RegionDeleteResponse {
  export type AsObject = {
    response: boolean,
  }
}

export class CityListRequest extends jspb.Message {
  clearCountriesList(): void;
  getCountriesList(): Array<string>;
  setCountriesList(value: Array<string>): void;
  addCountries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CityListRequest): CityListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityListRequest;
  static deserializeBinaryFromReader(message: CityListRequest, reader: jspb.BinaryReader): CityListRequest;
}

export namespace CityListRequest {
  export type AsObject = {
    countriesList: Array<string>,
  }
}

export class AirportDetails extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  hasPoint(): boolean;
  clearPoint(): void;
  getPoint(): AirportLocationDetail | undefined;
  setPoint(value?: AirportLocationDetail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirportDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AirportDetails): AirportDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AirportDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirportDetails;
  static deserializeBinaryFromReader(message: AirportDetails, reader: jspb.BinaryReader): AirportDetails;
}

export namespace AirportDetails {
  export type AsObject = {
    code: string,
    name: string,
    city: string,
    country: string,
    point?: AirportLocationDetail.AsObject,
  }
}

export class AirportLocationDetail extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearCoordinatesList(): void;
  getCoordinatesList(): Array<number>;
  setCoordinatesList(value: Array<number>): void;
  addCoordinates(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirportLocationDetail.AsObject;
  static toObject(includeInstance: boolean, msg: AirportLocationDetail): AirportLocationDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AirportLocationDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirportLocationDetail;
  static deserializeBinaryFromReader(message: AirportLocationDetail, reader: jspb.BinaryReader): AirportLocationDetail;
}

export namespace AirportLocationDetail {
  export type AsObject = {
    type: string,
    coordinatesList: Array<number>,
  }
}

export class AirportInsertRequest extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): void;

  getCityname(): string;
  setCityname(value: string): void;

  clearAirportsList(): void;
  getAirportsList(): Array<AirportDetails>;
  setAirportsList(value: Array<AirportDetails>): void;
  addAirports(value?: AirportDetails, index?: number): AirportDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirportInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AirportInsertRequest): AirportInsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AirportInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirportInsertRequest;
  static deserializeBinaryFromReader(message: AirportInsertRequest, reader: jspb.BinaryReader): AirportInsertRequest;
}

export namespace AirportInsertRequest {
  export type AsObject = {
    countrycode: string,
    cityname: string,
    airportsList: Array<AirportDetails.AsObject>,
  }
}

export class AirportInsertResponse extends jspb.Message {
  getResponse(): boolean;
  setResponse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AirportInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AirportInsertResponse): AirportInsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AirportInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AirportInsertResponse;
  static deserializeBinaryFromReader(message: AirportInsertResponse, reader: jspb.BinaryReader): AirportInsertResponse;
}

export namespace AirportInsertResponse {
  export type AsObject = {
    response: boolean,
  }
}

export class CityLocationDetail extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearCoordinatesList(): void;
  getCoordinatesList(): Array<number>;
  setCoordinatesList(value: Array<number>): void;
  addCoordinates(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityLocationDetail.AsObject;
  static toObject(includeInstance: boolean, msg: CityLocationDetail): CityLocationDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityLocationDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityLocationDetail;
  static deserializeBinaryFromReader(message: CityLocationDetail, reader: jspb.BinaryReader): CityLocationDetail;
}

export namespace CityLocationDetail {
  export type AsObject = {
    type: string,
    coordinatesList: Array<number>,
  }
}

export class CityDetail extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasPoint(): boolean;
  clearPoint(): void;
  getPoint(): CityLocationDetail | undefined;
  setPoint(value?: CityLocationDetail): void;

  clearAirportsList(): void;
  getAirportsList(): Array<AirportDetails>;
  setAirportsList(value: Array<AirportDetails>): void;
  addAirports(value?: AirportDetails, index?: number): AirportDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityDetail.AsObject;
  static toObject(includeInstance: boolean, msg: CityDetail): CityDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityDetail;
  static deserializeBinaryFromReader(message: CityDetail, reader: jspb.BinaryReader): CityDetail;
}

export namespace CityDetail {
  export type AsObject = {
    country: string,
    name: string,
    point?: CityLocationDetail.AsObject,
    airportsList: Array<AirportDetails.AsObject>,
  }
}

export class CityListResponse extends jspb.Message {
  clearCitiesList(): void;
  getCitiesList(): Array<CityDetail>;
  setCitiesList(value: Array<CityDetail>): void;
  addCities(value?: CityDetail, index?: number): CityDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CityListResponse): CityListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityListResponse;
  static deserializeBinaryFromReader(message: CityListResponse, reader: jspb.BinaryReader): CityListResponse;
}

export namespace CityListResponse {
  export type AsObject = {
    citiesList: Array<CityDetail.AsObject>,
  }
}

