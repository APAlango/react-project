import getJson from "./getJson";

const baseUrl = 'https://randomuser.me/api/';
const p1 = getJson(baseUrl);
// const p2 = getJson(baseUrl);
// const p3 = getJson(baseUrl);
// const p4 = getJson(baseUrl);
// const p5 = getJson(baseUrl);
//
// const jsons = Promise.all([p1, p2, p3, p4, p5])
//     .then((jsons) => jsons.map(
//         json => json.results[0].name.first
//     ))
//     .catch((rejection) => console.error('ERRRRRORRR',rejection));
//
// export default jsons;
export default p1;
