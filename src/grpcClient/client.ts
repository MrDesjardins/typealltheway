const PROTO_PATH = './src/grpcServer/protobuf/profile.proto';
import grpc from 'grpc';
import { loadSync } from '@grpc/proto-loader';


const packageDefinition = loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const profileservice = protoDescriptor.profileservice;

const client = new (profileservice as any).ProfileService("localhost:50051", grpc.credentials.createInsecure());


client.ListProfiles({}, (err: any, data: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

client.GetProfiles({ ids: [1, 2] }, (err: any, data: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

client.GetProfile({ id: 3 }, (err: any, data: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});