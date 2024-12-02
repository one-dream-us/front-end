import client from '@/utils/client';

const authApi = {
  getInfo: async () => (await client.get('/user/info')).data,
  logout: async () => {
    try {
      await client.post('/user/logout');
      location.href = '/';
    } catch (e) {
      console.log(e);
    }
  },
};

export default authApi;
