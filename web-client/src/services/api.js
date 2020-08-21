import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8888',
});

export default api;
//process.env.MONGO_URL APP_URL