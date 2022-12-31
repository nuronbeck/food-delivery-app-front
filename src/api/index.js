import axios from "axios"

const client = axios.create({
  baseURL: 'https://food-delivery-app-api.netlify.app'
});

client.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/json';

  return config;
})

export default client