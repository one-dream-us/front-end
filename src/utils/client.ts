import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_SERVER_URL}v1`,
  withCredentials: true,
});

client.interceptors.response.use(
  (res) => res,
  async (e) => {
    console.log('catch err, client.ts');
    if (e instanceof AxiosError) {
      if (e.response?.data.errorCode === 'TOKEN_EXPIRED') {
        console.log('TOKEN_EXPIRED');
        location.pathname = '/login';
        return alert('로그인 시간이 만료되었습니다. 다시 로그인 해주세요.');
      }
    }

    return Promise.reject(e);
  },
);
export default client;
