import client from '@/utils/client';

const authApi = {
  getInfo: async () => (await client.get('/users/info')).data,
  logout: async () => {
    try {
      await client.post('/user/logout');
      location.href = '/';
    } catch (e) {
      console.log(e);
    }
  },
  withDraw: async () => {
    try {
      await client.delete('/user/withdraw');
      location.href = '/withdraw-success';
    } catch {
      alert('다시 시도해주세요');
      location.href = '/';
    }
  },
};

export default authApi;
