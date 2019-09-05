//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: regioninfo.proto
//

//
// Copyright 2018, gRPC Authors All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import Foundation
import Dispatch
import SwiftGRPC
import SwiftProtobuf

internal protocol Com_Infinite_Travllr_RegionInfoServicegetCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServicegetCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_RegionInfoRequest, Com_Infinite_Travllr_RegionInfoResponse>, Com_Infinite_Travllr_RegionInfoServicegetCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/get" }
}

internal protocol Com_Infinite_Travllr_RegionInfoServicesaveCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServicesaveCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_RegionInfoSaveRequest, Com_Infinite_Travllr_RegionInfoSaveResponse>, Com_Infinite_Travllr_RegionInfoServicesaveCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/save" }
}

internal protocol Com_Infinite_Travllr_RegionInfoServiceupdateCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServiceupdateCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_RegionInfoUpdateRequest, Com_Infinite_Travllr_RegionInfoUpdateResponse>, Com_Infinite_Travllr_RegionInfoServiceupdateCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/update" }
}

internal protocol Com_Infinite_Travllr_RegionInfoServicelistCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServicelistCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_RegionListRequest, Com_Infinite_Travllr_RegionListResponse>, Com_Infinite_Travllr_RegionInfoServicelistCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/list" }
}

internal protocol Com_Infinite_Travllr_RegionInfoServicedeleteCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServicedeleteCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_RegionDeleteRequest, Com_Infinite_Travllr_RegionDeleteResponse>, Com_Infinite_Travllr_RegionInfoServicedeleteCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/delete" }
}

internal protocol Com_Infinite_Travllr_RegionInfoServicecitiesCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServicecitiesCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_CityListRequest, Com_Infinite_Travllr_CityListResponse>, Com_Infinite_Travllr_RegionInfoServicecitiesCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/cities" }
}

internal protocol Com_Infinite_Travllr_RegionInfoServiceinsertAirportCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_RegionInfoServiceinsertAirportCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_AirportInsertRequest, Com_Infinite_Travllr_AirportInsertResponse>, Com_Infinite_Travllr_RegionInfoServiceinsertAirportCall {
  override class var method: String { return "/com.infinite.travllr.RegionInfoService/insertAirport" }
}


/// Instantiate Com_Infinite_Travllr_RegionInfoServiceServiceClient, then call methods of this protocol to make API calls.
internal protocol Com_Infinite_Travllr_RegionInfoServiceService: ServiceClient {
  /// Synchronous. Unary.
  func get(_ request: Com_Infinite_Travllr_RegionInfoRequest) throws -> Com_Infinite_Travllr_RegionInfoResponse
  /// Asynchronous. Unary.
  func get(_ request: Com_Infinite_Travllr_RegionInfoRequest, completion: @escaping (Com_Infinite_Travllr_RegionInfoResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicegetCall

  /// Synchronous. Unary.
  func save(_ request: Com_Infinite_Travllr_RegionInfoSaveRequest) throws -> Com_Infinite_Travllr_RegionInfoSaveResponse
  /// Asynchronous. Unary.
  func save(_ request: Com_Infinite_Travllr_RegionInfoSaveRequest, completion: @escaping (Com_Infinite_Travllr_RegionInfoSaveResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicesaveCall

  /// Synchronous. Unary.
  func update(_ request: Com_Infinite_Travllr_RegionInfoUpdateRequest) throws -> Com_Infinite_Travllr_RegionInfoUpdateResponse
  /// Asynchronous. Unary.
  func update(_ request: Com_Infinite_Travllr_RegionInfoUpdateRequest, completion: @escaping (Com_Infinite_Travllr_RegionInfoUpdateResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServiceupdateCall

  /// Synchronous. Unary.
  func list(_ request: Com_Infinite_Travllr_RegionListRequest) throws -> Com_Infinite_Travllr_RegionListResponse
  /// Asynchronous. Unary.
  func list(_ request: Com_Infinite_Travllr_RegionListRequest, completion: @escaping (Com_Infinite_Travllr_RegionListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicelistCall

  /// Synchronous. Unary.
  func delete(_ request: Com_Infinite_Travllr_RegionDeleteRequest) throws -> Com_Infinite_Travllr_RegionDeleteResponse
  /// Asynchronous. Unary.
  func delete(_ request: Com_Infinite_Travllr_RegionDeleteRequest, completion: @escaping (Com_Infinite_Travllr_RegionDeleteResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicedeleteCall

  /// Synchronous. Unary.
  func cities(_ request: Com_Infinite_Travllr_CityListRequest) throws -> Com_Infinite_Travllr_CityListResponse
  /// Asynchronous. Unary.
  func cities(_ request: Com_Infinite_Travllr_CityListRequest, completion: @escaping (Com_Infinite_Travllr_CityListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicecitiesCall

  /// Synchronous. Unary.
  func insertAirport(_ request: Com_Infinite_Travllr_AirportInsertRequest) throws -> Com_Infinite_Travllr_AirportInsertResponse
  /// Asynchronous. Unary.
  func insertAirport(_ request: Com_Infinite_Travllr_AirportInsertRequest, completion: @escaping (Com_Infinite_Travllr_AirportInsertResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServiceinsertAirportCall

}

internal final class Com_Infinite_Travllr_RegionInfoServiceServiceClient: ServiceClientBase, Com_Infinite_Travllr_RegionInfoServiceService {
  /// Synchronous. Unary.
  internal func get(_ request: Com_Infinite_Travllr_RegionInfoRequest) throws -> Com_Infinite_Travllr_RegionInfoResponse {
    return try Com_Infinite_Travllr_RegionInfoServicegetCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func get(_ request: Com_Infinite_Travllr_RegionInfoRequest, completion: @escaping (Com_Infinite_Travllr_RegionInfoResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicegetCall {
    return try Com_Infinite_Travllr_RegionInfoServicegetCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func save(_ request: Com_Infinite_Travllr_RegionInfoSaveRequest) throws -> Com_Infinite_Travllr_RegionInfoSaveResponse {
    return try Com_Infinite_Travllr_RegionInfoServicesaveCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func save(_ request: Com_Infinite_Travllr_RegionInfoSaveRequest, completion: @escaping (Com_Infinite_Travllr_RegionInfoSaveResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicesaveCall {
    return try Com_Infinite_Travllr_RegionInfoServicesaveCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func update(_ request: Com_Infinite_Travllr_RegionInfoUpdateRequest) throws -> Com_Infinite_Travllr_RegionInfoUpdateResponse {
    return try Com_Infinite_Travllr_RegionInfoServiceupdateCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func update(_ request: Com_Infinite_Travllr_RegionInfoUpdateRequest, completion: @escaping (Com_Infinite_Travllr_RegionInfoUpdateResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServiceupdateCall {
    return try Com_Infinite_Travllr_RegionInfoServiceupdateCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func list(_ request: Com_Infinite_Travllr_RegionListRequest) throws -> Com_Infinite_Travllr_RegionListResponse {
    return try Com_Infinite_Travllr_RegionInfoServicelistCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func list(_ request: Com_Infinite_Travllr_RegionListRequest, completion: @escaping (Com_Infinite_Travllr_RegionListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicelistCall {
    return try Com_Infinite_Travllr_RegionInfoServicelistCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func delete(_ request: Com_Infinite_Travllr_RegionDeleteRequest) throws -> Com_Infinite_Travllr_RegionDeleteResponse {
    return try Com_Infinite_Travllr_RegionInfoServicedeleteCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func delete(_ request: Com_Infinite_Travllr_RegionDeleteRequest, completion: @escaping (Com_Infinite_Travllr_RegionDeleteResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicedeleteCall {
    return try Com_Infinite_Travllr_RegionInfoServicedeleteCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func cities(_ request: Com_Infinite_Travllr_CityListRequest) throws -> Com_Infinite_Travllr_CityListResponse {
    return try Com_Infinite_Travllr_RegionInfoServicecitiesCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func cities(_ request: Com_Infinite_Travllr_CityListRequest, completion: @escaping (Com_Infinite_Travllr_CityListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServicecitiesCall {
    return try Com_Infinite_Travllr_RegionInfoServicecitiesCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func insertAirport(_ request: Com_Infinite_Travllr_AirportInsertRequest) throws -> Com_Infinite_Travllr_AirportInsertResponse {
    return try Com_Infinite_Travllr_RegionInfoServiceinsertAirportCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func insertAirport(_ request: Com_Infinite_Travllr_AirportInsertRequest, completion: @escaping (Com_Infinite_Travllr_AirportInsertResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_RegionInfoServiceinsertAirportCall {
    return try Com_Infinite_Travllr_RegionInfoServiceinsertAirportCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

}

