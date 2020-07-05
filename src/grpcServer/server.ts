const PROTO_PATH = './src/grpcServer/protobuf/profile.proto';
import grpc from 'grpc';
import { loadSync } from '@grpc/proto-loader';
import { profiles } from './data/fakedata';

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

function getProfile(call: any, callback: any): void {
  const request = call.request;
  const id = request.id;
  const result = profiles[id + ""];
  console.log(result);
  callback(undefined, { profile: result });
}
function getProfiles(call: any, callback: any): void {
  const request = call.request;
  const ids = request.ids;
  const result = Object.values(profiles).filter((d: any) => ids.indexOf(d.id) >= 0);
  callback(undefined, { profiles: result });
}
function listProfiles(call: any, callback: any): void {
  const result = Object.values(profiles);
  const allIds = result.map((d: any) => d.id);
  callback(undefined, { ids: allIds });
}

const server = new grpc.Server();
server.addService((profileservice as any).ProfileService.service, {
  GetProfile: getProfile,
  GetProfiles: getProfiles,
  ListProfiles: listProfiles,

});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();