export default async function getJson(someUrl) {
    return await fetch(someUrl)
        .then(result => result.json())
        .catch((error) => console.error('EEEEEEERRRRRRRRPR',error));
}
