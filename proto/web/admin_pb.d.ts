// package: com.infinite.travllr
// file: admin.proto

import * as jspb from "google-protobuf";

export class UserAccess extends jspb.Message {
  getScreen(): string;
  setScreen(value: string): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  getAdd(): boolean;
  setAdd(value: boolean): void;

  getEdit(): boolean;
  setEdit(value: boolean): void;

  getDelete(): boolean;
  setDelete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAccess.AsObject;
  static toObject(includeInstance: boolean, msg: UserAccess): UserAccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAccess;
  static deserializeBinaryFromReader(message: UserAccess, reader: jspb.BinaryReader): UserAccess;
}

export namespace UserAccess {
  export type AsObject = {
    screen: string,
    enable: boolean,
    add: boolean,
    edit: boolean,
    pb_delete: boolean,
  }
}

export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserrole(): string;
  setUserrole(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  clearAccessList(): void;
  getAccessList(): Array<UserAccess>;
  setAccessList(value: Array<UserAccess>): void;
  addAccess(value?: UserAccess, index?: number): UserAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    userrole: string,
    name: string,
    username: string,
    password: string,
    active: boolean,
    accessList: Array<UserAccess.AsObject>,
  }
}

export class UserLogin extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLogin.AsObject;
  static toObject(includeInstance: boolean, msg: UserLogin): UserLogin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLogin;
  static deserializeBinaryFromReader(message: UserLogin, reader: jspb.BinaryReader): UserLogin;
}

export namespace UserLogin {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class UserLoginResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getResponse(): string;
  setResponse(value: string): void;

  hasUserinfo(): boolean;
  clearUserinfo(): void;
  getUserinfo(): UserInfo | undefined;
  setUserinfo(value?: UserInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserLoginResponse): UserLoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLoginResponse;
  static deserializeBinaryFromReader(message: UserLoginResponse, reader: jspb.BinaryReader): UserLoginResponse;
}

export namespace UserLoginResponse {
  export type AsObject = {
    status: boolean,
    response: string,
    userinfo?: UserInfo.AsObject,
  }
}

export class UserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getUserrold(): string;
  setUserrold(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    id: string,
    name: string,
    username: string,
    password: string,
    userrold: string,
    active: boolean,
  }
}

export class CreateUserResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class UserListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRequest): UserListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRequest;
  static deserializeBinaryFromReader(message: UserListRequest, reader: jspb.BinaryReader): UserListRequest;
}

export namespace UserListRequest {
  export type AsObject = {
  }
}

export class UserListResponse extends jspb.Message {
  clearUserinfoList(): void;
  getUserinfoList(): Array<UserInfo>;
  setUserinfoList(value: Array<UserInfo>): void;
  addUserinfo(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserListResponse): UserListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListResponse;
  static deserializeBinaryFromReader(message: UserListResponse, reader: jspb.BinaryReader): UserListResponse;
}

export namespace UserListResponse {
  export type AsObject = {
    userinfoList: Array<UserInfo.AsObject>,
  }
}

export class EditUserInfoResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserInfoResponse): EditUserInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserInfoResponse;
  static deserializeBinaryFromReader(message: EditUserInfoResponse, reader: jspb.BinaryReader): EditUserInfoResponse;
}

export namespace EditUserInfoResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class EditUserAccessRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAccessList(): void;
  getAccessList(): Array<UserAccess>;
  setAccessList(value: Array<UserAccess>): void;
  addAccess(value?: UserAccess, index?: number): UserAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserAccessRequest): EditUserAccessRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditUserAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserAccessRequest;
  static deserializeBinaryFromReader(message: EditUserAccessRequest, reader: jspb.BinaryReader): EditUserAccessRequest;
}

export namespace EditUserAccessRequest {
  export type AsObject = {
    id: string,
    accessList: Array<UserAccess.AsObject>,
  }
}

export class EditUserAccessResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserAccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserAccessResponse): EditUserAccessResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditUserAccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserAccessResponse;
  static deserializeBinaryFromReader(message: EditUserAccessResponse, reader: jspb.BinaryReader): EditUserAccessResponse;
}

export namespace EditUserAccessResponse {
  export type AsObject = {
    status: boolean,
  }
}

