import { DataLoaders } from "../dataloaders/dataLoaders";
import { Statistics } from "./statistics";

export interface CustomContext {
    loaders: DataLoaders;
    stats: Statistics;
}
