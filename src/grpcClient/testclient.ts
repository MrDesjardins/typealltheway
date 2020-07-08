import { ProfileClient } from "./client";

const c = new ProfileClient();
const prom1 = c.getListProfiles();
prom1.then((d) => {
    console.log(d.getIdsList());
});

const prom2 = c.getProfiles([1, 4]);
prom2.then((d) => {
    console.log(d.toObject().profilesList);
});

const prom3 = c.getProfile(3);
prom3.then((d) => {
    console.log(d.toObject().profile);
});
