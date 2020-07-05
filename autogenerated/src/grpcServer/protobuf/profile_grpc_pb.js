// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_grpcServer_protobuf_profile_pb = require('../../../src/grpcServer/protobuf/profile_pb.js');

function serialize_profileservice_ListProfilesRequest(arg) {
  if (!(arg instanceof src_grpcServer_protobuf_profile_pb.ListProfilesRequest)) {
    throw new Error('Expected argument of type profileservice.ListProfilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profileservice_ListProfilesRequest(buffer_arg) {
  return src_grpcServer_protobuf_profile_pb.ListProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profileservice_ProfileRequest(arg) {
  if (!(arg instanceof src_grpcServer_protobuf_profile_pb.ProfileRequest)) {
    throw new Error('Expected argument of type profileservice.ProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profileservice_ProfileRequest(buffer_arg) {
  return src_grpcServer_protobuf_profile_pb.ProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profileservice_ProfileResponse(arg) {
  if (!(arg instanceof src_grpcServer_protobuf_profile_pb.ProfileResponse)) {
    throw new Error('Expected argument of type profileservice.ProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profileservice_ProfileResponse(buffer_arg) {
  return src_grpcServer_protobuf_profile_pb.ProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profileservice_ProfilesRequest(arg) {
  if (!(arg instanceof src_grpcServer_protobuf_profile_pb.ProfilesRequest)) {
    throw new Error('Expected argument of type profileservice.ProfilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profileservice_ProfilesRequest(buffer_arg) {
  return src_grpcServer_protobuf_profile_pb.ProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profileservice_ProfilesResponse(arg) {
  if (!(arg instanceof src_grpcServer_protobuf_profile_pb.ProfilesResponse)) {
    throw new Error('Expected argument of type profileservice.ProfilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profileservice_ProfilesResponse(buffer_arg) {
  return src_grpcServer_protobuf_profile_pb.ProfilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProfileServiceService = exports.ProfileServiceService = {
  getProfile: {
    path: '/profileservice.ProfileService/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: src_grpcServer_protobuf_profile_pb.ProfileRequest,
    responseType: src_grpcServer_protobuf_profile_pb.ProfileResponse,
    requestSerialize: serialize_profileservice_ProfileRequest,
    requestDeserialize: deserialize_profileservice_ProfileRequest,
    responseSerialize: serialize_profileservice_ProfileResponse,
    responseDeserialize: deserialize_profileservice_ProfileResponse,
  },
  getProfiles: {
    path: '/profileservice.ProfileService/GetProfiles',
    requestStream: false,
    responseStream: false,
    requestType: src_grpcServer_protobuf_profile_pb.ProfilesRequest,
    responseType: src_grpcServer_protobuf_profile_pb.ProfilesResponse,
    requestSerialize: serialize_profileservice_ProfilesRequest,
    requestDeserialize: deserialize_profileservice_ProfilesRequest,
    responseSerialize: serialize_profileservice_ProfilesResponse,
    responseDeserialize: deserialize_profileservice_ProfilesResponse,
  },
  listProfiles: {
    path: '/profileservice.ProfileService/ListProfiles',
    requestStream: false,
    responseStream: false,
    requestType: src_grpcServer_protobuf_profile_pb.ListProfilesRequest,
    responseType: src_grpcServer_protobuf_profile_pb.ProfilesRequest,
    requestSerialize: serialize_profileservice_ListProfilesRequest,
    requestDeserialize: deserialize_profileservice_ListProfilesRequest,
    responseSerialize: serialize_profileservice_ProfilesRequest,
    responseDeserialize: deserialize_profileservice_ProfilesRequest,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService);
