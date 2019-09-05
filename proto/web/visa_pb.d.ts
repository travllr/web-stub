// package: com.infinite.travllr.visa
// file: visa.proto

import * as jspb from "google-protobuf";

export class VisaDocumentsRequest extends jspb.Message {
  clearCountryList(): void;
  getCountryList(): Array<string>;
  setCountryList(value: Array<string>): void;
  addCountry(value: string, index?: number): string;

  getIssinglesalaried(): boolean;
  setIssinglesalaried(value: boolean): void;

  getIssingleselfemployed(): boolean;
  setIssingleselfemployed(value: boolean): void;

  getIsmarriedsalaried(): boolean;
  setIsmarriedsalaried(value: boolean): void;

  getIsmarriedselfemployed(): boolean;
  setIsmarriedselfemployed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisaDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VisaDocumentsRequest): VisaDocumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisaDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisaDocumentsRequest;
  static deserializeBinaryFromReader(message: VisaDocumentsRequest, reader: jspb.BinaryReader): VisaDocumentsRequest;
}

export namespace VisaDocumentsRequest {
  export type AsObject = {
    countryList: Array<string>,
    issinglesalaried: boolean,
    issingleselfemployed: boolean,
    ismarriedsalaried: boolean,
    ismarriedselfemployed: boolean,
  }
}

export class VisaDocumentFile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getHreflink(): string;
  setHreflink(value: string): void;

  getWorkinghours(): string;
  setWorkinghours(value: string): void;

  getEmbassywebsite(): string;
  setEmbassywebsite(value: string): void;

  clearCountrylistList(): void;
  getCountrylistList(): Array<string>;
  setCountrylistList(value: Array<string>): void;
  addCountrylist(value: string, index?: number): string;

  getForsinglesalaried(): boolean;
  setForsinglesalaried(value: boolean): void;

  getForsingleselfemployed(): boolean;
  setForsingleselfemployed(value: boolean): void;

  getFormarriedsalaried(): boolean;
  setFormarriedsalaried(value: boolean): void;

  getFormarriedselfemployed(): boolean;
  setFormarriedselfemployed(value: boolean): void;

  getDocumentcontent(): string;
  setDocumentcontent(value: string): void;

  getId(): string;
  setId(value: string): void;

  getIsonarrivalvisa(): boolean;
  setIsonarrivalvisa(value: boolean): void;

  getIsschengenvisa(): boolean;
  setIsschengenvisa(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisaDocumentFile.AsObject;
  static toObject(includeInstance: boolean, msg: VisaDocumentFile): VisaDocumentFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisaDocumentFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisaDocumentFile;
  static deserializeBinaryFromReader(message: VisaDocumentFile, reader: jspb.BinaryReader): VisaDocumentFile;
}

export namespace VisaDocumentFile {
  export type AsObject = {
    name: string,
    category: string,
    hreflink: string,
    workinghours: string,
    embassywebsite: string,
    countrylistList: Array<string>,
    forsinglesalaried: boolean,
    forsingleselfemployed: boolean,
    formarriedsalaried: boolean,
    formarriedselfemployed: boolean,
    documentcontent: string,
    id: string,
    isonarrivalvisa: boolean,
    isschengenvisa: boolean,
  }
}

export class VisaDocumentsResponse extends jspb.Message {
  clearDocumentsList(): void;
  getDocumentsList(): Array<VisaDocumentFile>;
  setDocumentsList(value: Array<VisaDocumentFile>): void;
  addDocuments(value?: VisaDocumentFile, index?: number): VisaDocumentFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisaDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VisaDocumentsResponse): VisaDocumentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisaDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisaDocumentsResponse;
  static deserializeBinaryFromReader(message: VisaDocumentsResponse, reader: jspb.BinaryReader): VisaDocumentsResponse;
}

export namespace VisaDocumentsResponse {
  export type AsObject = {
    documentsList: Array<VisaDocumentFile.AsObject>,
  }
}

export class SearchVisaDocumentRequest extends jspb.Message {
  clearCountryList(): void;
  getCountryList(): Array<string>;
  setCountryList(value: Array<string>): void;
  addCountry(value: string, index?: number): string;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVisaDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVisaDocumentRequest): SearchVisaDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVisaDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVisaDocumentRequest;
  static deserializeBinaryFromReader(message: SearchVisaDocumentRequest, reader: jspb.BinaryReader): SearchVisaDocumentRequest;
}

export namespace SearchVisaDocumentRequest {
  export type AsObject = {
    countryList: Array<string>,
    category: string,
  }
}

export class SearchVisaDocumentResponse extends jspb.Message {
  clearDocumentsList(): void;
  getDocumentsList(): Array<VisaDocumentFile>;
  setDocumentsList(value: Array<VisaDocumentFile>): void;
  addDocuments(value?: VisaDocumentFile, index?: number): VisaDocumentFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVisaDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVisaDocumentResponse): SearchVisaDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVisaDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVisaDocumentResponse;
  static deserializeBinaryFromReader(message: SearchVisaDocumentResponse, reader: jspb.BinaryReader): SearchVisaDocumentResponse;
}

export namespace SearchVisaDocumentResponse {
  export type AsObject = {
    documentsList: Array<VisaDocumentFile.AsObject>,
  }
}

export class DeleteVisaDocumentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVisaDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVisaDocumentRequest): DeleteVisaDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVisaDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVisaDocumentRequest;
  static deserializeBinaryFromReader(message: DeleteVisaDocumentRequest, reader: jspb.BinaryReader): DeleteVisaDocumentRequest;
}

export namespace DeleteVisaDocumentRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteVisaDocumentResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVisaDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVisaDocumentResponse): DeleteVisaDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteVisaDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVisaDocumentResponse;
  static deserializeBinaryFromReader(message: DeleteVisaDocumentResponse, reader: jspb.BinaryReader): DeleteVisaDocumentResponse;
}

export namespace DeleteVisaDocumentResponse {
  export type AsObject = {
    status: string,
    response: string,
  }
}

export class UpdateVisaDocumentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCategorytype(): string;
  setCategorytype(value: string): void;

  clearCountryList(): void;
  getCountryList(): Array<string>;
  setCountryList(value: Array<string>): void;
  addCountry(value: string, index?: number): string;

  getWorkingDays(): string;
  setWorkingDays(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDocumentLink(): string;
  setDocumentLink(value: string): void;

  getIssinglesalaried(): boolean;
  setIssinglesalaried(value: boolean): void;

  getIssingleselfemployed(): boolean;
  setIssingleselfemployed(value: boolean): void;

  getIsmarriedsalaried(): boolean;
  setIsmarriedsalaried(value: boolean): void;

  getIsmarriedselfemployed(): boolean;
  setIsmarriedselfemployed(value: boolean): void;

  getIsonarrivalvisa(): boolean;
  setIsonarrivalvisa(value: boolean): void;

  getIsschengenvisa(): boolean;
  setIsschengenvisa(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisaDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisaDocumentRequest): UpdateVisaDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVisaDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisaDocumentRequest;
  static deserializeBinaryFromReader(message: UpdateVisaDocumentRequest, reader: jspb.BinaryReader): UpdateVisaDocumentRequest;
}

export namespace UpdateVisaDocumentRequest {
  export type AsObject = {
    id: string,
    categorytype: string,
    countryList: Array<string>,
    workingDays: string,
    website: string,
    title: string,
    description: string,
    documentLink: string,
    issinglesalaried: boolean,
    issingleselfemployed: boolean,
    ismarriedsalaried: boolean,
    ismarriedselfemployed: boolean,
    isonarrivalvisa: boolean,
    isschengenvisa: boolean,
  }
}

export class UpdateVisaDocumentResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisaDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisaDocumentResponse): UpdateVisaDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVisaDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisaDocumentResponse;
  static deserializeBinaryFromReader(message: UpdateVisaDocumentResponse, reader: jspb.BinaryReader): UpdateVisaDocumentResponse;
}

export namespace UpdateVisaDocumentResponse {
  export type AsObject = {
    status: string,
    response: string,
  }
}

export class CountryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountryRequest): CountryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryRequest;
  static deserializeBinaryFromReader(message: CountryRequest, reader: jspb.BinaryReader): CountryRequest;
}

export namespace CountryRequest {
  export type AsObject = {
  }
}

export class Country extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    name: string,
    code: string,
  }
}

export class CountryListResponse extends jspb.Message {
  clearCountriesList(): void;
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): void;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountryListResponse): CountryListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountryListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryListResponse;
  static deserializeBinaryFromReader(message: CountryListResponse, reader: jspb.BinaryReader): CountryListResponse;
}

export namespace CountryListResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class VisaCountryList extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): void;

  getIsonarrivalvisa(): boolean;
  setIsonarrivalvisa(value: boolean): void;

  getIsschengenvisa(): boolean;
  setIsschengenvisa(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisaCountryList.AsObject;
  static toObject(includeInstance: boolean, msg: VisaCountryList): VisaCountryList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisaCountryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisaCountryList;
  static deserializeBinaryFromReader(message: VisaCountryList, reader: jspb.BinaryReader): VisaCountryList;
}

export namespace VisaCountryList {
  export type AsObject = {
    country: string,
    isonarrivalvisa: boolean,
    isschengenvisa: boolean,
  }
}

export class VisaCountryListResponse extends jspb.Message {
  clearVisacountriesList(): void;
  getVisacountriesList(): Array<VisaCountryList>;
  setVisacountriesList(value: Array<VisaCountryList>): void;
  addVisacountries(value?: VisaCountryList, index?: number): VisaCountryList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisaCountryListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VisaCountryListResponse): VisaCountryListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisaCountryListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisaCountryListResponse;
  static deserializeBinaryFromReader(message: VisaCountryListResponse, reader: jspb.BinaryReader): VisaCountryListResponse;
}

export namespace VisaCountryListResponse {
  export type AsObject = {
    visacountriesList: Array<VisaCountryList.AsObject>,
  }
}

export class CityListDetail extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityListDetail.AsObject;
  static toObject(includeInstance: boolean, msg: CityListDetail): CityListDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityListDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityListDetail;
  static deserializeBinaryFromReader(message: CityListDetail, reader: jspb.BinaryReader): CityListDetail;
}

export namespace CityListDetail {
  export type AsObject = {
    name: string,
  }
}

export class CityListResponse extends jspb.Message {
  clearCitiesList(): void;
  getCitiesList(): Array<CityListDetail>;
  setCitiesList(value: Array<CityListDetail>): void;
  addCities(value?: CityListDetail, index?: number): CityListDetail;

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
    citiesList: Array<CityListDetail.AsObject>,
  }
}

export class EmptyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
  }
}

export class AddVisaDocumentRequest extends jspb.Message {
  getCategorytype(): string;
  setCategorytype(value: string): void;

  clearCountryList(): void;
  getCountryList(): Array<string>;
  setCountryList(value: Array<string>): void;
  addCountry(value: string, index?: number): string;

  getWorkingDays(): string;
  setWorkingDays(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDocumentLink(): string;
  setDocumentLink(value: string): void;

  getIssinglesalaried(): boolean;
  setIssinglesalaried(value: boolean): void;

  getIssingleselfemployed(): boolean;
  setIssingleselfemployed(value: boolean): void;

  getIsmarriedsalaried(): boolean;
  setIsmarriedsalaried(value: boolean): void;

  getIsmarriedselfemployed(): boolean;
  setIsmarriedselfemployed(value: boolean): void;

  getIsonarrivalvisa(): boolean;
  setIsonarrivalvisa(value: boolean): void;

  getIsschengenvisa(): boolean;
  setIsschengenvisa(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVisaDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddVisaDocumentRequest): AddVisaDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddVisaDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVisaDocumentRequest;
  static deserializeBinaryFromReader(message: AddVisaDocumentRequest, reader: jspb.BinaryReader): AddVisaDocumentRequest;
}

export namespace AddVisaDocumentRequest {
  export type AsObject = {
    categorytype: string,
    countryList: Array<string>,
    workingDays: string,
    website: string,
    title: string,
    description: string,
    documentLink: string,
    issinglesalaried: boolean,
    issingleselfemployed: boolean,
    ismarriedsalaried: boolean,
    ismarriedselfemployed: boolean,
    isonarrivalvisa: boolean,
    isschengenvisa: boolean,
  }
}

export class AddVisaDocumentResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVisaDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddVisaDocumentResponse): AddVisaDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddVisaDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVisaDocumentResponse;
  static deserializeBinaryFromReader(message: AddVisaDocumentResponse, reader: jspb.BinaryReader): AddVisaDocumentResponse;
}

export namespace AddVisaDocumentResponse {
  export type AsObject = {
    status: string,
    response: string,
  }
}

export interface OccupationMap {
  SALARIED: 0;
  SELF_EMPLOYED: 1;
}

export const Occupation: OccupationMap;

export interface MaritalStatusMap {
  SINGLE: 0;
  MARRIED: 1;
}

export const MaritalStatus: MaritalStatusMap;

export interface VisaCategoryTypeMap {
  FINANCIALS: 0;
  FORMS: 1;
  IDENTITY: 2;
  OCCUPATION: 3;
  VOUCHERS: 4;
  SUBMISSION: 5;
  INFO: 6;
}

export const VisaCategoryType: VisaCategoryTypeMap;

