export default function serialize(object) {
  let finalQuery = '';

  for (let key in object) {
    finalQuery += `&${key}=${object[key]}`;
  }

  return finalQuery;
}
