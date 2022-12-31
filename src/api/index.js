import axios from "axios"

const client = axios.create({
  baseURL: 'https://food-delivery-app-api.netlify.app'
});

export default client