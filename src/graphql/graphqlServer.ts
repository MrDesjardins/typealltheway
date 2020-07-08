import express, { Request, Response } from "express";
import compression from "compression";
import { ApolloServer } from "apollo-server-express";
import path from "path";
import { ApolloServerExpressConfig, makeExecutableSchema } from "apollo-server-express";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { profileResolversMap } from "./resolvers/profileResolver";
import { ProfileClient } from "../grpcClient/client";
import { CustomContext } from "./context/context";
import { GraphQLCustomDataSources } from "./dataSources/graphQLCustomDataSources";
import { DataLoaders } from "./dataloaders/dataLoaders";
const app = express();
const allGraphQLFile = fileLoader(path.join(__dirname, "schema/**/*.graphql"));
const allSchemas = mergeTypes(allGraphQLFile);
const allResolvers = profileResolversMap;

const services: GraphQLCustomDataSources = {
    profileService: new ProfileClient(),
};
const config: ApolloServerExpressConfig = {
    schema: makeExecutableSchema({
        typeDefs: allSchemas,
        resolvers: allResolvers,
    }),
    dataSources: () => {
        return services as any;
    },
    context: (context: CustomContext) => {
        context.loaders = new DataLoaders(services);
        return context;
    },
    playground: true,
    introspection: true,
    tracing: true,
};

const server = new ApolloServer(config);
server.applyMiddleware({ app, path: "/graphql", cors: true });
app.use(compression());
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Server is up!");
});
// Endpoint for client to download the statically generated GraphQL Unified Schema
app.use("/schema", express.static(path.join(__dirname, "..", "..", "output_types"))); // http://localhost:7777/schema/allSchema.graphl
app.listen(7777, () => {
    console.log("GraphQL Server is up and running");
});
