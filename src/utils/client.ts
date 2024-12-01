import axios from 'axios';

const client = axios.create({
  baseURL: '/backend',
  withCredentials: true,
});

export default client;
