// package: com.infinite.travllr
// file: itinerary.proto

import * as jspb from "google-protobuf";

export class ItineraryRequest extends jspb.Message {
  clearCountryList(): void;
  getCountryList(): Array<string>;
  setCountryList(value: Array<string>): void;
  addCountry(value: string, index?: number): string;

  clearCityList(): void;
  getCityList(): Array<string>;
  setCityList(value: Array<string>): void;
  addCity(value: string, index?: number): string;

  getRegionname(): string;
  setRegionname(value: string): void;

  getNumberofdays(): number;
  setNumberofdays(value: number): void;

  clearActivitycategoryList(): void;
  getActivitycategoryList(): Array<ActivityCategoryMap[keyof ActivityCategoryMap]>;
  setActivitycategoryList(value: Array<ActivityCategoryMap[keyof ActivityCategoryMap]>): void;
  addActivitycategory(value: ActivityCategoryMap[keyof ActivityCategoryMap], index?: number): ActivityCategoryMap[keyof ActivityCategoryMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItineraryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ItineraryRequest): ItineraryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItineraryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItineraryRequest;
  static deserializeBinaryFromReader(message: ItineraryRequest, reader: jspb.BinaryReader): ItineraryRequest;
}

export namespace ItineraryRequest {
  export type AsObject = {
    countryList: Array<string>,
    cityList: Array<string>,
    regionname: string,
    numberofdays: number,
    activitycategoryList: Array<ActivityCategoryMap[keyof ActivityCategoryMap]>,
  }
}

export class ItineraryResponse extends jspb.Message {
  clearCityplanList(): void;
  getCityplanList(): Array<CityPlan>;
  setCityplanList(value: Array<CityPlan>): void;
  addCityplan(value?: CityPlan, index?: number): CityPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItineraryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ItineraryResponse): ItineraryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItineraryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItineraryResponse;
  static deserializeBinaryFromReader(message: ItineraryResponse, reader: jspb.BinaryReader): ItineraryResponse;
}

export namespace ItineraryResponse {
  export type AsObject = {
    cityplanList: Array<CityPlan.AsObject>,
  }
}

export class CityPlan extends jspb.Message {
  getCityname(): string;
  setCityname(value: string): void;

  getNumberofnights(): number;
  setNumberofnights(value: number): void;

  clearDayplanList(): void;
  getDayplanList(): Array<DayPlan>;
  setDayplanList(value: Array<DayPlan>): void;
  addDayplan(value?: DayPlan, index?: number): DayPlan;

  getTransfertimeinminutes(): number;
  setTransfertimeinminutes(value: number): void;

  getTransfertype(): TransferTypeMap[keyof TransferTypeMap];
  setTransfertype(value: TransferTypeMap[keyof TransferTypeMap]): void;

  getLatitudelocation(): number;
  setLatitudelocation(value: number): void;

  getLongitudelocation(): number;
  setLongitudelocation(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityPlan.AsObject;
  static toObject(includeInstance: boolean, msg: CityPlan): CityPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityPlan;
  static deserializeBinaryFromReader(message: CityPlan, reader: jspb.BinaryReader): CityPlan;
}

export namespace CityPlan {
  export type AsObject = {
    cityname: string,
    numberofnights: number,
    dayplanList: Array<DayPlan.AsObject>,
    transfertimeinminutes: number,
    transfertype: TransferTypeMap[keyof TransferTypeMap],
    latitudelocation: number,
    longitudelocation: number,
  }
}

export class DayPlan extends jspb.Message {
  clearActivitydetailList(): void;
  getActivitydetailList(): Array<ActivityDetail>;
  setActivitydetailList(value: Array<ActivityDetail>): void;
  addActivitydetail(value?: ActivityDetail, index?: number): ActivityDetail;

  getTransfertype(): TransferTypeMap[keyof TransferTypeMap];
  setTransfertype(value: TransferTypeMap[keyof TransferTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DayPlan.AsObject;
  static toObject(includeInstance: boolean, msg: DayPlan): DayPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DayPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DayPlan;
  static deserializeBinaryFromReader(message: DayPlan, reader: jspb.BinaryReader): DayPlan;
}

export namespace DayPlan {
  export type AsObject = {
    activitydetailList: Array<ActivityDetail.AsObject>,
    transfertype: TransferTypeMap[keyof TransferTypeMap],
  }
}

export class ActivityDetail extends jspb.Message {
  getActivitytype(): ActivityTypeMap[keyof ActivityTypeMap];
  setActivitytype(value: ActivityTypeMap[keyof ActivityTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getImgurl(): string;
  setImgurl(value: string): void;

  getActivityduration(): ActivityDurationMap[keyof ActivityDurationMap];
  setActivityduration(value: ActivityDurationMap[keyof ActivityDurationMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityDetail): ActivityDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityDetail;
  static deserializeBinaryFromReader(message: ActivityDetail, reader: jspb.BinaryReader): ActivityDetail;
}

export namespace ActivityDetail {
  export type AsObject = {
    activitytype: ActivityTypeMap[keyof ActivityTypeMap],
    name: string,
    description: string,
    imgurl: string,
    activityduration: ActivityDurationMap[keyof ActivityDurationMap],
  }
}

export interface ActivityCategoryMap {
  FOOD_AND_NIGHTLIFE: 0;
  LEISURE_AND_NATURE: 1;
  WATER_SPORTS_AND_CRUISES: 2;
  ADVENTURE_AND_OUTDOOR: 3;
  ART_AND_ARCHITECTURE: 4;
  ATTRACTIONS_AND_CULTURE: 5;
  BEST_OF_ALL: 6;
}

export const ActivityCategory: ActivityCategoryMap;

export interface ActivityTypeMap {
  ACTIVITY: 0;
  INTERCITY_TRANSFER: 1;
  INTERNATIONAL_ARRIVAL: 2;
  INTERNATIONAL_DEPARTURE: 3;
  LEISURE: 4;
}

export const ActivityType: ActivityTypeMap;

export interface ActivityDurationMap {
  FULL_DAY: 0;
  MORNING: 1;
  NOON: 2;
  EVENING: 3;
  MORNING_TO_NOON: 4;
  NOON_TO_EVENING: 5;
}

export const ActivityDuration: ActivityDurationMap;

export interface TransferTypeMap {
  FERRY: 0;
  FLY: 1;
  TRAIN: 2;
  CAB: 3;
}

export const TransferType: TransferTypeMap;

