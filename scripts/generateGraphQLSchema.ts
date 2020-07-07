import fs from "fs";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

console.log("Merging all the schemas");
const documentTypeDefs = fileLoader("src/graphql/**/*.graphql");
const mergedSchema = mergeTypes(documentTypeDefs);
const typesPath = "output_types";
const schemaPath = path.join(typesPath, "allSchema.graphql");

if (!fs.existsSync(typesPath)) {
    fs.mkdirSync(typesPath);
}
fs.writeFileSync(schemaPath, mergedSchema);