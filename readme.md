# Project

The project is made to illustrate a simple architecture where the data comes from a persistence storage and trickle down to the user by passing by a gRPC server and then by a GraphQL layer.

The core architecture relies on strongly typed data from the persistence storage down to the web interface.

# Explanation
gRPC use Protocol Buffers to define a schema. We leverage the schema from `.proto` files to generate the entities in TypeScript. Furthermore, from the `.proto` we extract service endpoints to fetch the information and generate the client code to communicate to the gRPC server.

On the next layer, the GraphQL server defines the schema to expose to the user with `.graphql` files. The schema is consumer oriented. The GraphQL implementation provides entities and their relationship without having to put on the burden on the user which is not the case for gRPC. 

Finally, the web server crafts `.graphql` document to cherry pick which information it needs. There is a script that generate the proper type from fragment and 


# Steps

1- Install third-party libraries with NPM

```
npm install
```

2- Generate the JavaScript and TypeScript from Grpc ProtoBuf to be used by the gRPC server and gRPC client

```
scripts/generateJsTs.sh
```

3- Start the gRPC server that is strongly typed from the ProtoBuf

```
npm run grpc:server
```

4- Test gRPC by using an autogenerated client

```
npm run grpc:testclient
```

5- Generate the TypeScript from gRPC to be used by GraphQL

```
npm run graphql:generate:ts
```

6- Generate a unified GraphQL schema file that can be used by the client (if not using introspection)

```
npm run graphql:generate:unified
```

7- Run GraphQL server

```
npm run graphql:server

```

or if you want to attach with VSCode

```
npm run graphql:server:debug

```

8- Validate that all .graphql used in the web server is valid against the server

```
npm run web:graphql:validate

```

9- Run the website

```
npm run web:server
```

# Results

At that point, there is the GraphQL playgroun available at: http://127.0.0.1:7777/graphql and the web ui using GraphQL at http://127.0.0.1:3000