// package: com.infinite.travllr
// file: user.proto

import * as jspb from "google-protobuf";
import * as itinerary_pb from "./itinerary_pb";
import * as regioninfo_pb from "./regioninfo_pb";
import * as common_pb from "./common_pb";

export class UserDetail extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getMobile(): string;
  setMobile(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getAddressline1(): string;
  setAddressline1(value: string): void;

  getAddressline2(): string;
  setAddressline2(value: string): void;

  getAddressline3(): string;
  setAddressline3(value: string): void;

  getState(): string;
  setState(value: string): void;

  getPincode(): string;
  setPincode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetail.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetail;
  static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
  export type AsObject = {
    name: string,
    email: string,
    mobile: string,
    password: string,
    addressline1: string,
    addressline2: string,
    addressline3: string,
    state: string,
    pincode: string,
  }
}

export class UserContact extends jspb.Message {
  getSalutation(): string;
  setSalutation(value: string): void;

  getSurname(): string;
  setSurname(value: string): void;

  getGivenname(): string;
  setGivenname(value: string): void;

  getPassportnumber(): string;
  setPassportnumber(value: string): void;

  getDateofbirth(): string;
  setDateofbirth(value: string): void;

  getPassportexpirydate(): string;
  setPassportexpirydate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserContact.AsObject;
  static toObject(includeInstance: boolean, msg: UserContact): UserContact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserContact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserContact;
  static deserializeBinaryFromReader(message: UserContact, reader: jspb.BinaryReader): UserContact;
}

export namespace UserContact {
  export type AsObject = {
    salutation: string,
    surname: string,
    givenname: string,
    passportnumber: string,
    dateofbirth: string,
    passportexpirydate: string,
  }
}

export class ItineraryDetails extends jspb.Message {
  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): regioninfo_pb.CityRouteInfo | undefined;
  setRoute(value?: regioninfo_pb.CityRouteInfo): void;

  clearDayplanList(): void;
  getDayplanList(): Array<itinerary_pb.DayPlan>;
  setDayplanList(value: Array<itinerary_pb.DayPlan>): void;
  addDayplan(value?: itinerary_pb.DayPlan, index?: number): itinerary_pb.DayPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItineraryDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ItineraryDetails): ItineraryDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItineraryDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItineraryDetails;
  static deserializeBinaryFromReader(message: ItineraryDetails, reader: jspb.BinaryReader): ItineraryDetails;
}

export namespace ItineraryDetails {
  export type AsObject = {
    route?: regioninfo_pb.CityRouteInfo.AsObject,
    dayplanList: Array<itinerary_pb.DayPlan.AsObject>,
  }
}

export class UserItinerary extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getCreateat(): string;
  setCreateat(value: string): void;

  getUpdatedat(): string;
  setUpdatedat(value: string): void;

  getStatus(): ItineraryStatusMap[keyof ItineraryStatusMap];
  setStatus(value: ItineraryStatusMap[keyof ItineraryStatusMap]): void;

  getDepartdate(): string;
  setDepartdate(value: string): void;

  getArrivaldate(): string;
  setArrivaldate(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDepartfrom(): string;
  setDepartfrom(value: string): void;

  getNoofadults(): number;
  setNoofadults(value: number): void;

  getNoofchild(): number;
  setNoofchild(value: number): void;

  clearChildagesList(): void;
  getChildagesList(): Array<number>;
  setChildagesList(value: Array<number>): void;
  addChildages(value: number, index?: number): number;

  clearItineraryList(): void;
  getItineraryList(): Array<ItineraryDetails>;
  setItineraryList(value: Array<ItineraryDetails>): void;
  addItinerary(value?: ItineraryDetails, index?: number): ItineraryDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserItinerary.AsObject;
  static toObject(includeInstance: boolean, msg: UserItinerary): UserItinerary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserItinerary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserItinerary;
  static deserializeBinaryFromReader(message: UserItinerary, reader: jspb.BinaryReader): UserItinerary;
}

export namespace UserItinerary {
  export type AsObject = {
    title: string,
    createat: string,
    updatedat: string,
    status: ItineraryStatusMap[keyof ItineraryStatusMap],
    departdate: string,
    arrivaldate: string,
    duration: number,
    departfrom: string,
    noofadults: number,
    noofchild: number,
    childagesList: Array<number>,
    itineraryList: Array<ItineraryDetails.AsObject>,
  }
}

export class UserDetailInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getMobile(): string;
  setMobile(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetailInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetailInfo): UserDetailInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDetailInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetailInfo;
  static deserializeBinaryFromReader(message: UserDetailInfo, reader: jspb.BinaryReader): UserDetailInfo;
}

export namespace UserDetailInfo {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    mobile: string,
  }
}

export class UserList extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UserDetailInfo>;
  setUsersList(value: Array<UserDetailInfo>): void;
  addUsers(value?: UserDetailInfo, index?: number): UserDetailInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    usersList: Array<UserDetailInfo.AsObject>,
  }
}

export class UserDetailRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetailRequest): UserDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetailRequest;
  static deserializeBinaryFromReader(message: UserDetailRequest, reader: jspb.BinaryReader): UserDetailRequest;
}

export namespace UserDetailRequest {
  export type AsObject = {
    id: string,
  }
}

export class UserDetailResponse extends jspb.Message {
  hasUserdetail(): boolean;
  clearUserdetail(): void;
  getUserdetail(): UserDetail | undefined;
  setUserdetail(value?: UserDetail): void;

  clearUsercontactList(): void;
  getUsercontactList(): Array<UserContact>;
  setUsercontactList(value: Array<UserContact>): void;
  addUsercontact(value?: UserContact, index?: number): UserContact;

  clearUseritineraryList(): void;
  getUseritineraryList(): Array<UserItinerary>;
  setUseritineraryList(value: Array<UserItinerary>): void;
  addUseritinerary(value?: UserItinerary, index?: number): UserItinerary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetailResponse): UserDetailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetailResponse;
  static deserializeBinaryFromReader(message: UserDetailResponse, reader: jspb.BinaryReader): UserDetailResponse;
}

export namespace UserDetailResponse {
  export type AsObject = {
    userdetail?: UserDetail.AsObject,
    usercontactList: Array<UserContact.AsObject>,
    useritineraryList: Array<UserItinerary.AsObject>,
  }
}

export interface ItineraryStatusMap {
  SAVED: 0;
  BOOKED: 1;
}

export const ItineraryStatus: ItineraryStatusMap;

