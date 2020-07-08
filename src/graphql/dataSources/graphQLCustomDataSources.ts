import { ProfileClient } from "../../grpcClient/client";

export interface GraphQLCustomDataSources {
    profileService: ProfileClient;
}
