export function serialize(obj) {
  let finalQuery = '';

  for (let key in obj) {
    finalQuery += `&${key}=${obj[key]}`;
  }

  return finalQuery;
}

export function mapFields(options) {
  const object = {};
  
  for (let i = 0; i < options.fields.length; i++) {
    const field = [options.fields[i]];

    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      }
    };
  }

  return object;
}