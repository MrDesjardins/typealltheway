import { GraphQLCustomDataSources } from "../dataSources/graphQLCustomDataSources";
import { ProfileDataLoaders } from "./profileDataLoader";
export class DataLoaders {
    private profile: ProfileDataLoaders;

    public constructor(dataSource: GraphQLCustomDataSources) {
        this.profile = new ProfileDataLoaders(dataSource);
    }
    get Profile() {
        return this.profile;
    }
}
