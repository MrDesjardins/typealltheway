// package: profileservice
// file: profile.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as profile_pb from "./profile_pb";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProfile: IProfileServiceService_IGetProfile;
    getProfiles: IProfileServiceService_IGetProfiles;
    listProfiles: IProfileServiceService_IListProfiles;
}

interface IProfileServiceService_IGetProfile extends grpc.MethodDefinition<profile_pb.ProfileRequest, profile_pb.ProfileResponse> {
    path: string; // "/profileservice.ProfileService/GetProfile"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_pb.ProfileRequest>;
    requestDeserialize: grpc.deserialize<profile_pb.ProfileRequest>;
    responseSerialize: grpc.serialize<profile_pb.ProfileResponse>;
    responseDeserialize: grpc.deserialize<profile_pb.ProfileResponse>;
}
interface IProfileServiceService_IGetProfiles extends grpc.MethodDefinition<profile_pb.ProfilesRequest, profile_pb.ProfilesResponse> {
    path: string; // "/profileservice.ProfileService/GetProfiles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_pb.ProfilesRequest>;
    requestDeserialize: grpc.deserialize<profile_pb.ProfilesRequest>;
    responseSerialize: grpc.serialize<profile_pb.ProfilesResponse>;
    responseDeserialize: grpc.deserialize<profile_pb.ProfilesResponse>;
}
interface IProfileServiceService_IListProfiles extends grpc.MethodDefinition<profile_pb.ListProfilesRequest, profile_pb.ProfilesRequest> {
    path: string; // "/profileservice.ProfileService/ListProfiles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_pb.ListProfilesRequest>;
    requestDeserialize: grpc.deserialize<profile_pb.ListProfilesRequest>;
    responseSerialize: grpc.serialize<profile_pb.ProfilesRequest>;
    responseDeserialize: grpc.deserialize<profile_pb.ProfilesRequest>;
}

export const ProfileServiceService: IProfileServiceService;

export interface IProfileServiceServer {
    getProfile: grpc.handleUnaryCall<profile_pb.ProfileRequest, profile_pb.ProfileResponse>;
    getProfiles: grpc.handleUnaryCall<profile_pb.ProfilesRequest, profile_pb.ProfilesResponse>;
    listProfiles: grpc.handleUnaryCall<profile_pb.ListProfilesRequest, profile_pb.ProfilesRequest>;
}

export interface IProfileServiceClient {
    getProfile(request: profile_pb.ProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: profile_pb.ProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfile(request: profile_pb.ProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    getProfiles(request: profile_pb.ProfilesRequest, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    getProfiles(request: profile_pb.ProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    getProfiles(request: profile_pb.ProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    listProfiles(request: profile_pb.ListProfilesRequest, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    listProfiles(request: profile_pb.ListProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    listProfiles(request: profile_pb.ListProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
}

export class ProfileServiceClient extends grpc.Client implements IProfileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProfile(request: profile_pb.ProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: profile_pb.ProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfile(request: profile_pb.ProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfileResponse) => void): grpc.ClientUnaryCall;
    public getProfiles(request: profile_pb.ProfilesRequest, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    public getProfiles(request: profile_pb.ProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    public getProfiles(request: profile_pb.ProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesResponse) => void): grpc.ClientUnaryCall;
    public listProfiles(request: profile_pb.ListProfilesRequest, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    public listProfiles(request: profile_pb.ListProfilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
    public listProfiles(request: profile_pb.ListProfilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_pb.ProfilesRequest) => void): grpc.ClientUnaryCall;
}
