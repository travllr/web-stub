// package: com.infinite.travllr
// file: activity.proto

import * as jspb from "google-protobuf";

export class ActivityInformation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getImageurl(): string;
  setImageurl(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearInclusionsList(): void;
  getInclusionsList(): Array<string>;
  setInclusionsList(value: Array<string>): void;
  addInclusions(value: string, index?: number): string;

  clearExclusionsList(): void;
  getExclusionsList(): Array<string>;
  setExclusionsList(value: Array<string>): void;
  addExclusions(value: string, index?: number): string;

  getOverview(): string;
  setOverview(value: string): void;

  getPolicy(): string;
  setPolicy(value: string): void;

  getForyourinfo(): string;
  setForyourinfo(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getTheme(): ActivityInformation.ThemeMap[keyof ActivityInformation.ThemeMap];
  setTheme(value: ActivityInformation.ThemeMap[keyof ActivityInformation.ThemeMap]): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityInformation.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityInformation): ActivityInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityInformation;
  static deserializeBinaryFromReader(message: ActivityInformation, reader: jspb.BinaryReader): ActivityInformation;
}

export namespace ActivityInformation {
  export type AsObject = {
    name: string,
    imageurl: string,
    duration: number,
    price: number,
    description: string,
    inclusionsList: Array<string>,
    exclusionsList: Array<string>,
    overview: string,
    policy: string,
    foryourinfo: string,
    city: string,
    theme: ActivityInformation.ThemeMap[keyof ActivityInformation.ThemeMap],
    id: string,
  }

  export interface ThemeMap {
    ART_CULTURE: 0;
    ADVENTURE_OUTDOOR: 1;
    FOOD_NIGHTLIFE: 2;
    SHOPPING_LEISURE: 3;
  }

  export const Theme: ThemeMap;
}

export class SaveActivityResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveActivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveActivityResponse): SaveActivityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveActivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveActivityResponse;
  static deserializeBinaryFromReader(message: SaveActivityResponse, reader: jspb.BinaryReader): SaveActivityResponse;
}

export namespace SaveActivityResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class ActivityListRequest extends jspb.Message {
  getCity(): string;
  setCity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityListRequest): ActivityListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityListRequest;
  static deserializeBinaryFromReader(message: ActivityListRequest, reader: jspb.BinaryReader): ActivityListRequest;
}

export namespace ActivityListRequest {
  export type AsObject = {
    city: string,
  }
}

export class ActivityListResponse extends jspb.Message {
  clearActivitiesList(): void;
  getActivitiesList(): Array<ActivityInformation>;
  setActivitiesList(value: Array<ActivityInformation>): void;
  addActivities(value?: ActivityInformation, index?: number): ActivityInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityListResponse): ActivityListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityListResponse;
  static deserializeBinaryFromReader(message: ActivityListResponse, reader: jspb.BinaryReader): ActivityListResponse;
}

export namespace ActivityListResponse {
  export type AsObject = {
    activitiesList: Array<ActivityInformation.AsObject>,
  }
}

export class DeleteActivityRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteActivityRequest): DeleteActivityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteActivityRequest;
  static deserializeBinaryFromReader(message: DeleteActivityRequest, reader: jspb.BinaryReader): DeleteActivityRequest;
}

export namespace DeleteActivityRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteActivityResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteActivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteActivityResponse): DeleteActivityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteActivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteActivityResponse;
  static deserializeBinaryFromReader(message: DeleteActivityResponse, reader: jspb.BinaryReader): DeleteActivityResponse;
}

export namespace DeleteActivityResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class UpdateActivityResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActivityResponse): UpdateActivityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateActivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActivityResponse;
  static deserializeBinaryFromReader(message: UpdateActivityResponse, reader: jspb.BinaryReader): UpdateActivityResponse;
}

export namespace UpdateActivityResponse {
  export type AsObject = {
    status: boolean,
  }
}

