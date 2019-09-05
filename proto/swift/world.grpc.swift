//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: world.proto
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

internal protocol Com_Infinite_Travllr_HelloWorldServicegetResCall: ClientCallUnary {}

fileprivate final class Com_Infinite_Travllr_HelloWorldServicegetResCallBase: ClientCallUnaryBase<Com_Infinite_Travllr_HelloWorldRequest, Com_Infinite_Travllr_HelloWorldResponse>, Com_Infinite_Travllr_HelloWorldServicegetResCall {
  override class var method: String { return "/com.infinite.travllr.HelloWorldService/getRes" }
}


/// Instantiate Com_Infinite_Travllr_HelloWorldServiceServiceClient, then call methods of this protocol to make API calls.
internal protocol Com_Infinite_Travllr_HelloWorldServiceService: ServiceClient {
  /// Synchronous. Unary.
  func getRes(_ request: Com_Infinite_Travllr_HelloWorldRequest) throws -> Com_Infinite_Travllr_HelloWorldResponse
  /// Asynchronous. Unary.
  func getRes(_ request: Com_Infinite_Travllr_HelloWorldRequest, completion: @escaping (Com_Infinite_Travllr_HelloWorldResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_HelloWorldServicegetResCall

}

internal final class Com_Infinite_Travllr_HelloWorldServiceServiceClient: ServiceClientBase, Com_Infinite_Travllr_HelloWorldServiceService {
  /// Synchronous. Unary.
  internal func getRes(_ request: Com_Infinite_Travllr_HelloWorldRequest) throws -> Com_Infinite_Travllr_HelloWorldResponse {
    return try Com_Infinite_Travllr_HelloWorldServicegetResCallBase(channel)
      .run(request: request, metadata: metadata)
  }
  /// Asynchronous. Unary.
  internal func getRes(_ request: Com_Infinite_Travllr_HelloWorldRequest, completion: @escaping (Com_Infinite_Travllr_HelloWorldResponse?, CallResult) -> Void) throws -> Com_Infinite_Travllr_HelloWorldServicegetResCall {
    return try Com_Infinite_Travllr_HelloWorldServicegetResCallBase(channel)
      .start(request: request, metadata: metadata, completion: completion)
  }

}
