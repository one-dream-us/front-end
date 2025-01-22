import authApi from '@/services/authApi';
import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER_URL}v1`,
  withCredentials: true,
});

client.interceptors.response.use(
  (res) => res,
  async (e) => {
    if (e instanceof AxiosError && e.status === 401) {
      alert('로그인 유효 시간 만료. 다시 로그인 해주세요.');
      return await authApi.logout();
    }
  },
);
export default client;
