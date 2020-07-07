import express, { Request, Response } from "express";
import compression from "compression";
import { ApolloServer } from 'apollo-server-express';
import path from "path";
import { ApolloServerExpressConfig, makeExecutableSchema } from "apollo-server-express";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { profileResolversMap } from "./profileResolver";
import { ProfileClient } from "../grpcClient/client";
const app = express();
const allGraphQLFile = fileLoader(path.join(__dirname, "/**/*.graphql"));
const allSchemas = mergeTypes(allGraphQLFile);
const allResolvers = profileResolversMap;
const config: ApolloServerExpressConfig = {
  schema: makeExecutableSchema({
    typeDefs: allSchemas,
    resolvers: allResolvers
  }),
  dataSources: () => {
    return {
      profileService: new ProfileClient()
    } as any;
  },
  playground: true,
  introspection: false,
  tracing: true,
};

const server = new ApolloServer(config);
server.applyMiddleware({ app, path: "/graphql", cors: true });
app.use(compression());
app.get("/", (req: Request, res: Response) => {
  res.status(200).send(
    "Server is up!"
  );
});
// Endpoint for client to download the statically generated GraphQL Unified Schema
app.use("/schema", express.static(path.join(__dirname, "..", "..", "output_types"))); // http://localhost:7777/schema/allSchema.graphl
app.listen(7777, () => {
  console.log("GraphQL Server is up and running");
});