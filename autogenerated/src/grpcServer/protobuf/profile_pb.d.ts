// package: profileservice
// file: profile.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ProfileRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ProfileRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileRequest): ProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileRequest;
    static deserializeBinaryFromReader(message: ProfileRequest, reader: jspb.BinaryReader): ProfileRequest;
}

export namespace ProfileRequest {
    export type AsObject = {
        id: number,
    }
}

export class ProfileResponse extends jspb.Message { 

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): Profile | undefined;
    setProfile(value?: Profile): ProfileResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileResponse;
    static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
    export type AsObject = {
        profile?: Profile.AsObject,
    }
}

export class ProfilesRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): ProfilesRequest;
    addIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProfilesRequest): ProfilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfilesRequest;
    static deserializeBinaryFromReader(message: ProfilesRequest, reader: jspb.BinaryReader): ProfilesRequest;
}

export namespace ProfilesRequest {
    export type AsObject = {
        idsList: Array<number>,
    }
}

export class ProfilesResponse extends jspb.Message { 
    clearProfilesList(): void;
    getProfilesList(): Array<Profile>;
    setProfilesList(value: Array<Profile>): ProfilesResponse;
    addProfiles(value?: Profile, index?: number): Profile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProfilesResponse): ProfilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfilesResponse;
    static deserializeBinaryFromReader(message: ProfilesResponse, reader: jspb.BinaryReader): ProfilesResponse;
}

export namespace ProfilesResponse {
    export type AsObject = {
        profilesList: Array<Profile.AsObject>,
    }
}

export class Profile extends jspb.Message { 
    getId(): number;
    setId(value: number): Profile;

    getFirstname(): string;
    setFirstname(value: string): Profile;

    getLastname(): string;
    setLastname(value: string): Profile;

    getActive(): boolean;
    setActive(value: boolean): Profile;

    clearFriendidsList(): void;
    getFriendidsList(): Array<number>;
    setFriendidsList(value: Array<number>): Profile;
    addFriendids(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Profile.AsObject;
    static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
    export type AsObject = {
        id: number,
        firstname: string,
        lastname: string,
        active: boolean,
        friendidsList: Array<number>,
    }
}

export class ListProfilesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProfilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProfilesRequest): ListProfilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProfilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProfilesRequest;
    static deserializeBinaryFromReader(message: ListProfilesRequest, reader: jspb.BinaryReader): ListProfilesRequest;
}

export namespace ListProfilesRequest {
    export type AsObject = {
    }
}
