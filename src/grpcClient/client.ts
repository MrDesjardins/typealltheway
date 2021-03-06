import grpc from "grpc";
import { ProfileServiceClient } from "../../autogenerated/src/grpcServer/protobuf/profile_grpc_pb";
import {
    ListProfilesRequest,
    ProfilesRequest,
    ProfilesResponse,
    ProfileResponse,
    ProfileRequest,
} from "../../autogenerated/src/grpcServer/protobuf/profile_pb";

export class ProfileClient {
    private client: ProfileServiceClient;

    public constructor() {
        this.client = new ProfileServiceClient("0.0.0.0:50051", grpc.credentials.createInsecure());
    }

    public getListProfiles(): Promise<ProfilesRequest> {
        return new Promise<ProfilesRequest>((resolve, reject) => {
            this.client.listProfiles(
                new ListProfilesRequest(),
                (err: grpc.ServiceError | null, data: ProfilesRequest) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                }
            );
        });
    }

    public getProfiles(ids: number[]): Promise<ProfilesResponse> {
        return new Promise<ProfilesResponse>((resolve, reject) => {
            const request = new ProfilesRequest();
            request.setIdsList(ids);
            this.client.getProfiles(request, (err: grpc.ServiceError | null, data: ProfilesResponse) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    public getProfile(id: number): Promise<ProfileResponse> {
        return new Promise<ProfileResponse>((resolve, reject) => {
            const request = new ProfileRequest();
            request.setId(id);
            this.client.getProfile(request, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
