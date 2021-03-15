import axios from 'axios';

const axios_instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export const api = {
  get(endpoint) {
    return axios_instance.get(endpoint);
  },
  post(endpoint, body) {
    return axios_instance.post(endpoint, body);
  },
  delete(endpoint) {
    return axios_instance.delete(endpoint);
  },
  put(endpoint, body) {
    return axios_instance.put(endpoint, body);
  }
}