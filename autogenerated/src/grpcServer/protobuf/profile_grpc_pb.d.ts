// package: profileservice
// file: src/grpcServer/protobuf/profile.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_grpcServer_protobuf_profile_pb from "../../../src/grpcServer/protobuf/profile_pb";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProfile: IProfileServiceService_IGetProfile;
    getProfiles: IProfileServiceService_IGetProfiles;
    listProfiles: IProfileServiceService_IListProfiles;
}

interface IProfileServiceService_IGetProfile extends grpc.MethodDefinition<src_grpcServer_protobuf_profile_pb.ProfileRequest, src_grpcServer_protobuf_profile_pb.ProfileResponse> {
    path: string; // "/profileservice.ProfileService/GetProfile"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_grpcServer_protobuf_profile_pb.ProfileRequest>;
    requestDeserialize: grpc.deserialize<src_grpcServer_protobuf_profile_pb.ProfileRequest>;
    responseSerialize: grpc.serialize<src_grpcServer_protobuf_profile_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<src_grpcServer_protobuf_profile_pb.ProfileResponse>;
}
interface IProfileServiceService_IGetProfiles extends grpc.MethodDefinition<src_grpcServer_protobuf_profile_pb.ProfilesRequest, src_grpcServer_protobuf_profile_pb.ProfilesResponse> {
    path: string; // "/profileservice.ProfileService/GetProfiles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_grpcServer_protobuf_profile_pb.ProfilesRequest>;
    requestDeserialize: grpc.deserialize<src_grpcServer_protobuf_profile_pb.ProfilesRequest>;
    responseSerialize: grpc.serialize<src_grpcServer_protobuf_profile_pb.ProfilesResponse>;
    responseDeserialize: grpc.deserialize<src_grpcServer_protobuf_profile_pb.ProfilesResponse>;
}
interface IProfileServiceService_IListProfiles extends grpc.MethodDefinition<src_grpcServer_protobuf_profile_pb.ListProfilesRequest, src_grpcServer_protobuf_profile_pb.ProfilesRequest> {
    path: string; // "/profileservice.ProfileService/ListProfiles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_grpcServer_protobuf_profile_pb.ListProfilesRequest>;
    requestDeserialize: grpc.deserialize<src_grpcServer_protobuf_profile_pb.ListProfilesRequest>;
    responseSerialize: grpc.serialize<src_grpcServer_protobuf_profile_pb.ProfilesRequest>;
    responseDeserialize: grpc.deserialize<src_grpcServer_protobuf_profile_pb.ProfilesRequest>;
}

export const ProfileServiceService: IProfileServiceService;

export interface IProfileServiceServer {
    getProfile: grpc.handleUnaryCall<src_grpcServer_protobuf_profile_pb.ProfileRequest, src_grpcServer_protobuf_profile_pb.ProfileResponse>;
    getProfiles: grpc.handleUnaryCall<src_grpcServer_protobuf_profile_pb.ProfilesRequest, src_grpcServer_protobuf_profile_pb.ProfilesResponse>;
    listProfiles: grpc.handleUnaryCall<src_grpcServer_protobuf_profile_pb.ListProfilesRequest, src_grpcServer_protobuf_profile_pb.ProfilesRequest>;
}

export interface IProfileServiceClient {
    getProfile(request: src_grpcServer_protobuf_profile_pb.ProfileRequest, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: src_grpcServer_protobuf_profile_pb.ProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: src_grpcServer_protobuf_profile_pb.ProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfiles(request: src_grpcServer_protobuf_profile_pb.ProfilesRequest, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    getProfiles(request: src_grpcServer_protobuf_profile_pb.ProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    getProfiles(request: src_grpcServer_protobuf_profile_pb.ProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    listProfiles(request: src_grpcServer_protobuf_profile_pb.ListProfilesRequest, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    listProfiles(request: src_grpcServer_protobuf_profile_pb.ListProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    listProfiles(request: src_grpcServer_protobuf_profile_pb.ListProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
}

export class ProfileServiceClient extends grpc.Client implements IProfileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProfile(request: src_grpcServer_protobuf_profile_pb.ProfileRequest, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: src_grpcServer_protobuf_profile_pb.ProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: src_grpcServer_protobuf_profile_pb.ProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfiles(request: src_grpcServer_protobuf_profile_pb.ProfilesRequest, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    public getProfiles(request: src_grpcServer_protobuf_profile_pb.ProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    public getProfiles(request: src_grpcServer_protobuf_profile_pb.ProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    public listProfiles(request: src_grpcServer_protobuf_profile_pb.ListProfilesRequest, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    public listProfiles(request: src_grpcServer_protobuf_profile_pb.ListProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    public listProfiles(request: src_grpcServer_protobuf_profile_pb.ListProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_grpcServer_protobuf_profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
}
