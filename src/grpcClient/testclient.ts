import { getListProfiles, getProfiles, getProfile } from "./client";

const prom1 = getListProfiles();
prom1.then(d => {
  console.log(d.getIdsList())
});

const prom2 = getProfiles([1, 4]);
prom2.then(d => {
  console.log(d.toObject().profilesList)
});

const prom3 = getProfile(3);
prom3.then(d => {
  console.log(d.toObject().profile)
});