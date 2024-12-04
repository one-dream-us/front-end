import axios from 'axios';

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER_URL}api/v1`,
  withCredentials: true,
});

export default client;
