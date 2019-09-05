//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: visa.proto
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

internal protocol Com_Infinite_Travllr_Visa_VisaServiceRequestCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceRequestCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_VisaDocumentsRequest, Com_Infinite_Travllr_Visa_VisaDocumentsResponse>, Com_Infinite_Travllr_Visa_VisaServiceRequestCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/Request" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceListCountriesCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceListCountriesCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_CountryRequest, Com_Infinite_Travllr_Visa_CountryListResponse>, Com_Infinite_Travllr_Visa_VisaServiceListCountriesCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/ListCountries" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_CountryRequest, Com_Infinite_Travllr_Visa_VisaCountryListResponse>, Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/ListVisaCountries" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceListCitiesCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceListCitiesCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_EmptyRequest, Com_Infinite_Travllr_Visa_CityListResponse>, Com_Infinite_Travllr_Visa_VisaServiceListCitiesCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/ListCities" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_AddVisaDocumentRequest, Com_Infinite_Travllr_Visa_AddVisaDocumentResponse>, Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/AddVisaDocument" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_SearchVisaDocumentRequest, Com_Infinite_Travllr_Visa_SearchVisaDocumentResponse>, Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/SearchVisaDocument" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_DeleteVisaDocumentRequest, Com_Infinite_Travllr_Visa_DeleteVisaDocumentResponse>, Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/DeleteVisaDocument" }
}

internal protocol Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_Visa_UpdateVisaDocumentRequest, Com_Infinite_Travllr_Visa_UpdateVisaDocumentResponse>, Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCall {
  override class var method: String { return "/com.infinite.travllr.visa.VisaService/UpdateVisaDocument" }
}


/// Instantiate Com_Infinite_Travllr_Visa_VisaServiceServiceClient, then call methods of this protocol to make API calls.
internal protocol Com_Infinite_Travllr_Visa_VisaServiceService: ServiceClient {
  /// Synchronous. Unary.
  func request(_ request: Com_Infinite_Travllr_Visa_VisaDocumentsRequest) throws -> Com_Infinite_Travllr_Visa_VisaDocumentsResponse
  /// Asynchronous. Unary.
  func request(_ request: Com_Infinite_Travllr_Visa_VisaDocumentsRequest, completion: @escaping (Com_Infinite_Travllr_Visa_VisaDocumentsResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceRequestCall

  /// Synchronous. Unary.
  func listCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest) throws -> Com_Infinite_Travllr_Visa_CountryListResponse
  /// Asynchronous. Unary.
  func listCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest, completion: @escaping (Com_Infinite_Travllr_Visa_CountryListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceListCountriesCall

  /// Synchronous. Unary.
  func listVisaCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest) throws -> Com_Infinite_Travllr_Visa_VisaCountryListResponse
  /// Asynchronous. Unary.
  func listVisaCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest, completion: @escaping (Com_Infinite_Travllr_Visa_VisaCountryListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCall

  /// Synchronous. Unary.
  func listCities(_ request: Com_Infinite_Travllr_Visa_EmptyRequest) throws -> Com_Infinite_Travllr_Visa_CityListResponse
  /// Asynchronous. Unary.
  func listCities(_ request: Com_Infinite_Travllr_Visa_EmptyRequest, completion: @escaping (Com_Infinite_Travllr_Visa_CityListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceListCitiesCall

  /// Synchronous. Unary.
  func addVisaDocument(_ request: Com_Infinite_Travllr_Visa_AddVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_AddVisaDocumentResponse
  /// Asynchronous. Unary.
  func addVisaDocument(_ request: Com_Infinite_Travllr_Visa_AddVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_AddVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCall

  /// Synchronous. Unary.
  func searchVisaDocument(_ request: Com_Infinite_Travllr_Visa_SearchVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_SearchVisaDocumentResponse
  /// Asynchronous. Unary.
  func searchVisaDocument(_ request: Com_Infinite_Travllr_Visa_SearchVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_SearchVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCall

  /// Synchronous. Unary.
  func deleteVisaDocument(_ request: Com_Infinite_Travllr_Visa_DeleteVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_DeleteVisaDocumentResponse
  /// Asynchronous. Unary.
  func deleteVisaDocument(_ request: Com_Infinite_Travllr_Visa_DeleteVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_DeleteVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCall

  /// Synchronous. Unary.
  func updateVisaDocument(_ request: Com_Infinite_Travllr_Visa_UpdateVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_UpdateVisaDocumentResponse
  /// Asynchronous. Unary.
  func updateVisaDocument(_ request: Com_Infinite_Travllr_Visa_UpdateVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_UpdateVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCall

}

internal final class Com_Infinite_Travllr_Visa_VisaServiceServiceClient: ServiceClientBase, Com_Infinite_Travllr_Visa_VisaServiceService {
  /// Synchronous. Unary.
  internal func request(_ request: Com_Infinite_Travllr_Visa_VisaDocumentsRequest) throws -> Com_Infinite_Travllr_Visa_VisaDocumentsResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceRequestCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func request(_ request: Com_Infinite_Travllr_Visa_VisaDocumentsRequest, completion: @escaping (Com_Infinite_Travllr_Visa_VisaDocumentsResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceRequestCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceRequestCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func listCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest) throws -> Com_Infinite_Travllr_Visa_CountryListResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceListCountriesCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func listCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest, completion: @escaping (Com_Infinite_Travllr_Visa_CountryListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceListCountriesCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceListCountriesCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func listVisaCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest) throws -> Com_Infinite_Travllr_Visa_VisaCountryListResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func listVisaCountries(_ request: Com_Infinite_Travllr_Visa_CountryRequest, completion: @escaping (Com_Infinite_Travllr_Visa_VisaCountryListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceListVisaCountriesCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func listCities(_ request: Com_Infinite_Travllr_Visa_EmptyRequest) throws -> Com_Infinite_Travllr_Visa_CityListResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceListCitiesCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func listCities(_ request: Com_Infinite_Travllr_Visa_EmptyRequest, completion: @escaping (Com_Infinite_Travllr_Visa_CityListResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceListCitiesCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceListCitiesCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func addVisaDocument(_ request: Com_Infinite_Travllr_Visa_AddVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_AddVisaDocumentResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func addVisaDocument(_ request: Com_Infinite_Travllr_Visa_AddVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_AddVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceAddVisaDocumentCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func searchVisaDocument(_ request: Com_Infinite_Travllr_Visa_SearchVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_SearchVisaDocumentResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func searchVisaDocument(_ request: Com_Infinite_Travllr_Visa_SearchVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_SearchVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceSearchVisaDocumentCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func deleteVisaDocument(_ request: Com_Infinite_Travllr_Visa_DeleteVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_DeleteVisaDocumentResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func deleteVisaDocument(_ request: Com_Infinite_Travllr_Visa_DeleteVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_DeleteVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceDeleteVisaDocumentCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

  /// Synchronous. Unary.
  internal func updateVisaDocument(_ request: Com_Infinite_Travllr_Visa_UpdateVisaDocumentRequest) throws -> Com_Infinite_Travllr_Visa_UpdateVisaDocumentResponse {
    return try Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func updateVisaDocument(_ request: Com_Infinite_Travllr_Visa_UpdateVisaDocumentRequest, completion: @escaping (Com_Infinite_Travllr_Visa_UpdateVisaDocumentResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCall {
    return try Com_Infinite_Travllr_Visa_VisaServiceUpdateVisaDocumentCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

}
