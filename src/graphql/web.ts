import express, { Request, Response } from "express";

import { ApolloServer } from 'apollo-server';
import { ApolloServerExpressConfig } from "apollo-server-express";
const app = express();
app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).send("ok");
});
const config: ApolloServerExpressConfig = {

};
const server = new ApolloServer(config);
server.applyMiddleware({ app, path: "/graphql", cors: true });
app.listen(7777, () => {
  console.log("Up-and-running");
});