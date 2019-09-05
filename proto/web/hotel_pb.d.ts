// package: com.infinite.travllr.hotel
// file: hotel.proto

import * as jspb from "google-protobuf";

export class RoomGuest extends jspb.Message {
  getNoofadults(): number;
  setNoofadults(value: number): void;

  getNoofchild(): number;
  setNoofchild(value: number): void;

  clearChildageList(): void;
  getChildageList(): Array<number>;
  setChildageList(value: Array<number>): void;
  addChildage(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomGuest.AsObject;
  static toObject(includeInstance: boolean, msg: RoomGuest): RoomGuest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomGuest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomGuest;
  static deserializeBinaryFromReader(message: RoomGuest, reader: jspb.BinaryReader): RoomGuest;
}

export namespace RoomGuest {
  export type AsObject = {
    noofadults: number,
    noofchild: number,
    childageList: Array<number>,
  }
}

export class HotelRequest extends jspb.Message {
  getCheckindate(): string;
  setCheckindate(value: string): void;

  getNoofnights(): number;
  setNoofnights(value: number): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getCityid(): string;
  setCityid(value: string): void;

  getResultcount(): number;
  setResultcount(value: number): void;

  getPreferredcurrency(): string;
  setPreferredcurrency(value: string): void;

  getGuestnationality(): string;
  setGuestnationality(value: string): void;

  getNoofrooms(): number;
  setNoofrooms(value: number): void;

  hasRoomguests(): boolean;
  clearRoomguests(): void;
  getRoomguests(): RoomGuest | undefined;
  setRoomguests(value?: RoomGuest): void;

  getPreferredhotel(): string;
  setPreferredhotel(value: string): void;

  getMaxrating(): number;
  setMaxrating(value: number): void;

  getMinrating(): number;
  setMinrating(value: number): void;

  getReviewscore(): number;
  setReviewscore(value: number): void;

  getIsnearbysearchallowed(): boolean;
  setIsnearbysearchallowed(value: boolean): void;

  getEnduserip(): string;
  setEnduserip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HotelRequest): HotelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelRequest;
  static deserializeBinaryFromReader(message: HotelRequest, reader: jspb.BinaryReader): HotelRequest;
}

export namespace HotelRequest {
  export type AsObject = {
    checkindate: string,
    noofnights: number,
    countrycode: string,
    cityid: string,
    resultcount: number,
    preferredcurrency: string,
    guestnationality: string,
    noofrooms: number,
    roomguests?: RoomGuest.AsObject,
    preferredhotel: string,
    maxrating: number,
    minrating: number,
    reviewscore: number,
    isnearbysearchallowed: boolean,
    enduserip: string,
  }
}

export class HotelPriceGst extends jspb.Message {
  getCgstamount(): number;
  setCgstamount(value: number): void;

  getCgstrate(): number;
  setCgstrate(value: number): void;

  getCessamount(): number;
  setCessamount(value: number): void;

  getCessrate(): number;
  setCessrate(value: number): void;

  getIgstamount(): number;
  setIgstamount(value: number): void;

  getIgstrate(): number;
  setIgstrate(value: number): void;

  getSgstamount(): number;
  setSgstamount(value: number): void;

  getSgstrate(): number;
  setSgstrate(value: number): void;

  getTaxableamount(): number;
  setTaxableamount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelPriceGst.AsObject;
  static toObject(includeInstance: boolean, msg: HotelPriceGst): HotelPriceGst.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelPriceGst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelPriceGst;
  static deserializeBinaryFromReader(message: HotelPriceGst, reader: jspb.BinaryReader): HotelPriceGst;
}

export namespace HotelPriceGst {
  export type AsObject = {
    cgstamount: number,
    cgstrate: number,
    cessamount: number,
    cessrate: number,
    igstamount: number,
    igstrate: number,
    sgstamount: number,
    sgstrate: number,
    taxableamount: number,
  }
}

export class HotelPrice extends jspb.Message {
  getCurrencycode(): string;
  setCurrencycode(value: string): void;

  getRoomprice(): number;
  setRoomprice(value: number): void;

  getTax(): number;
  setTax(value: number): void;

  getExtraguestcharge(): number;
  setExtraguestcharge(value: number): void;

  getChildcharge(): number;
  setChildcharge(value: number): void;

  getOthercharges(): number;
  setOthercharges(value: number): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getPublishedprice(): number;
  setPublishedprice(value: number): void;

  getPublishedpriceroundedoff(): number;
  setPublishedpriceroundedoff(value: number): void;

  getOfferedprice(): number;
  setOfferedprice(value: number): void;

  getOfferedpriceroundedoff(): number;
  setOfferedpriceroundedoff(value: number): void;

  getAgentcommission(): number;
  setAgentcommission(value: number): void;

  getAgentmarkup(): number;
  setAgentmarkup(value: number): void;

  getServicetax(): number;
  setServicetax(value: number): void;

  getTds(): number;
  setTds(value: number): void;

  getServicecharge(): number;
  setServicecharge(value: number): void;

  getTotalgstamount(): number;
  setTotalgstamount(value: number): void;

  hasGst(): boolean;
  clearGst(): void;
  getGst(): HotelPriceGst | undefined;
  setGst(value?: HotelPriceGst): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelPrice.AsObject;
  static toObject(includeInstance: boolean, msg: HotelPrice): HotelPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelPrice;
  static deserializeBinaryFromReader(message: HotelPrice, reader: jspb.BinaryReader): HotelPrice;
}

export namespace HotelPrice {
  export type AsObject = {
    currencycode: string,
    roomprice: number,
    tax: number,
    extraguestcharge: number,
    childcharge: number,
    othercharges: number,
    discount: number,
    publishedprice: number,
    publishedpriceroundedoff: number,
    offeredprice: number,
    offeredpriceroundedoff: number,
    agentcommission: number,
    agentmarkup: number,
    servicetax: number,
    tds: number,
    servicecharge: number,
    totalgstamount: number,
    gst?: HotelPriceGst.AsObject,
  }
}

export class HotelResult extends jspb.Message {
  getHotelcode(): string;
  setHotelcode(value: string): void;

  getHotelname(): string;
  setHotelname(value: string): void;

  getHotelcategory(): string;
  setHotelcategory(value: string): void;

  getStarrating(): number;
  setStarrating(value: number): void;

  getHoteldescription(): string;
  setHoteldescription(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): HotelPrice | undefined;
  setPrice(value?: HotelPrice): void;

  getHotelpicture(): string;
  setHotelpicture(value: string): void;

  getHoteladdress(): string;
  setHoteladdress(value: string): void;

  getHotelcontactno(): string;
  setHotelcontactno(value: string): void;

  getLatitude(): string;
  setLatitude(value: string): void;

  getLongitude(): string;
  setLongitude(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelResult.AsObject;
  static toObject(includeInstance: boolean, msg: HotelResult): HotelResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelResult;
  static deserializeBinaryFromReader(message: HotelResult, reader: jspb.BinaryReader): HotelResult;
}

export namespace HotelResult {
  export type AsObject = {
    hotelcode: string,
    hotelname: string,
    hotelcategory: string,
    starrating: number,
    hoteldescription: string,
    price?: HotelPrice.AsObject,
    hotelpicture: string,
    hoteladdress: string,
    hotelcontactno: string,
    latitude: string,
    longitude: string,
  }
}

export class HotelResponse extends jspb.Message {
  getTraceid(): string;
  setTraceid(value: string): void;

  getCheckindate(): string;
  setCheckindate(value: string): void;

  getCheckoutdate(): string;
  setCheckoutdate(value: string): void;

  getPreferredcurrency(): string;
  setPreferredcurrency(value: string): void;

  getNoofrooms(): number;
  setNoofrooms(value: number): void;

  hasRoomguests(): boolean;
  clearRoomguests(): void;
  getRoomguests(): RoomGuest | undefined;
  setRoomguests(value?: RoomGuest): void;

  clearHotelresultsList(): void;
  getHotelresultsList(): Array<HotelResult>;
  setHotelresultsList(value: Array<HotelResult>): void;
  addHotelresults(value?: HotelResult, index?: number): HotelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HotelResponse): HotelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelResponse;
  static deserializeBinaryFromReader(message: HotelResponse, reader: jspb.BinaryReader): HotelResponse;
}

export namespace HotelResponse {
  export type AsObject = {
    traceid: string,
    checkindate: string,
    checkoutdate: string,
    preferredcurrency: string,
    noofrooms: number,
    roomguests?: RoomGuest.AsObject,
    hotelresultsList: Array<HotelResult.AsObject>,
  }
}

