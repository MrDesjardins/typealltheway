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
// console.log("Description Package:", profileservice);

function getProfile(call: any): any {
  const request = call.request;
  const id = request.id;
  return profiles[id];
}
function getProfiles(call: any): any {
  const request = call.request;
  const ids = request.ids;
  return Object.values(profiles).filter((d: any) => ids.indexOf(d.id) >= 0);
}
function listProfiles(): any {
  return Object.values(profiles);
}

const server = new grpc.Server();
server.addService((profileservice as any).ProfileService.service, {
  GetProfile: getProfile,
  GetProfiles: getProfiles,
  ListProfiles: listProfiles,

});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();