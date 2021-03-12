export function serialize(obj) {
  let finalQuery = '';

  for (let key in obj) {
    finalQuery += `&${key}=${obj[key]}`;
  }

  return finalQuery;
}