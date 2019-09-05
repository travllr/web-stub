// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: travllr.proto
//
// For information on using the generated types, please see the documenation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

enum Locale: SwiftProtobuf.Enum {
  typealias RawValue = Int
  case us // = 0
  case `in` // = 1
  case fr // = 2
  case UNRECOGNIZED(Int)

  init() {
    self = .us
  }

  init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .us
    case 1: self = .in
    case 2: self = .fr
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  var rawValue: Int {
    switch self {
    case .us: return 0
    case .in: return 1
    case .fr: return 2
    case .UNRECOGNIZED(let i): return i
    }
  }

}

enum Currency: SwiftProtobuf.Enum {
  typealias RawValue = Int
  case usd // = 0
  case inr // = 1
  case gbp // = 2
  case eur // = 3
  case UNRECOGNIZED(Int)

  init() {
    self = .usd
  }

  init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .usd
    case 1: self = .inr
    case 2: self = .gbp
    case 3: self = .eur
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  var rawValue: Int {
    switch self {
    case .usd: return 0
    case .inr: return 1
    case .gbp: return 2
    case .eur: return 3
    case .UNRECOGNIZED(let i): return i
    }
  }

}

struct FlightRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct FlightResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var a: String = String()

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct MultiCityRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var originPlace: String = String()

  var destinationPlace: String = String()

  var destinationPlace2: String = String()

  var destinationPlace3: String = String()

  var destinationPlace4: String = String()

  var locale: Locale = .us

  var currency: Currency = .usd

  var outboundPartialDate: Int64 = 0

  var inboundPartialDate: Int64 = 0

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

struct MultiCityResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var a: String = String()

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

extension Locale: SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "US"),
    1: .same(proto: "IN"),
    2: .same(proto: "FR"),
  ]
}

extension Currency: SwiftProtobuf._ProtoNameProviding {
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "USD"),
    1: .same(proto: "INR"),
    2: .same(proto: "GBP"),
    3: .same(proto: "EUR"),
  ]
}

extension FlightRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = "FlightRequest"
  static let _protobuf_nameMap = SwiftProtobuf._NameMap()

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let _ = try decoder.nextFieldNumber() {
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try unknownFields.traverse(visitor: &visitor)
  }

  func _protobuf_generated_isEqualTo(other: FlightRequest) -> Bool {
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension FlightResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = "FlightResponse"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "a"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.a)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.a.isEmpty {
      try visitor.visitSingularStringField(value: self.a, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  func _protobuf_generated_isEqualTo(other: FlightResponse) -> Bool {
    if self.a != other.a {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension MultiCityRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = "MultiCityRequest"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "originPlace"),
    2: .same(proto: "destinationPlace"),
    3: .same(proto: "destinationPlace2"),
    4: .same(proto: "destinationPlace3"),
    5: .same(proto: "destinationPlace4"),
    6: .same(proto: "locale"),
    7: .same(proto: "currency"),
    8: .same(proto: "outboundPartialDate"),
    9: .same(proto: "inboundPartialDate"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.originPlace)
      case 2: try decoder.decodeSingularStringField(value: &self.destinationPlace)
      case 3: try decoder.decodeSingularStringField(value: &self.destinationPlace2)
      case 4: try decoder.decodeSingularStringField(value: &self.destinationPlace3)
      case 5: try decoder.decodeSingularStringField(value: &self.destinationPlace4)
      case 6: try decoder.decodeSingularEnumField(value: &self.locale)
      case 7: try decoder.decodeSingularEnumField(value: &self.currency)
      case 8: try decoder.decodeSingularInt64Field(value: &self.outboundPartialDate)
      case 9: try decoder.decodeSingularInt64Field(value: &self.inboundPartialDate)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.originPlace.isEmpty {
      try visitor.visitSingularStringField(value: self.originPlace, fieldNumber: 1)
    }
    if !self.destinationPlace.isEmpty {
      try visitor.visitSingularStringField(value: self.destinationPlace, fieldNumber: 2)
    }
    if !self.destinationPlace2.isEmpty {
      try visitor.visitSingularStringField(value: self.destinationPlace2, fieldNumber: 3)
    }
    if !self.destinationPlace3.isEmpty {
      try visitor.visitSingularStringField(value: self.destinationPlace3, fieldNumber: 4)
    }
    if !self.destinationPlace4.isEmpty {
      try visitor.visitSingularStringField(value: self.destinationPlace4, fieldNumber: 5)
    }
    if self.locale != .us {
      try visitor.visitSingularEnumField(value: self.locale, fieldNumber: 6)
    }
    if self.currency != .usd {
      try visitor.visitSingularEnumField(value: self.currency, fieldNumber: 7)
    }
    if self.outboundPartialDate != 0 {
      try visitor.visitSingularInt64Field(value: self.outboundPartialDate, fieldNumber: 8)
    }
    if self.inboundPartialDate != 0 {
      try visitor.visitSingularInt64Field(value: self.inboundPartialDate, fieldNumber: 9)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  func _protobuf_generated_isEqualTo(other: MultiCityRequest) -> Bool {
    if self.originPlace != other.originPlace {return false}
    if self.destinationPlace != other.destinationPlace {return false}
    if self.destinationPlace2 != other.destinationPlace2 {return false}
    if self.destinationPlace3 != other.destinationPlace3 {return false}
    if self.destinationPlace4 != other.destinationPlace4 {return false}
    if self.locale != other.locale {return false}
    if self.currency != other.currency {return false}
    if self.outboundPartialDate != other.outboundPartialDate {return false}
    if self.inboundPartialDate != other.inboundPartialDate {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}

extension MultiCityResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = "MultiCityResponse"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "a"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.a)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.a.isEmpty {
      try visitor.visitSingularStringField(value: self.a, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  func _protobuf_generated_isEqualTo(other: MultiCityResponse) -> Bool {
    if self.a != other.a {return false}
    if unknownFields != other.unknownFields {return false}
    return true
  }
}
