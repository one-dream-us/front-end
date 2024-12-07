import client from '@/utils/client';

const authApi = {
  getInfo: async () => (await client.get('/users/info')).data,
  logout: async () => {
    try {
      await client.post('/users/logout');
      location.href = '/';
    } catch (e) {
      console.log(e);
    }
  },
  withDraw: async () => {
    try {
      await client.delete('/users/withdraw');
      location.href = '/withdraw-success';
    } catch {
      alert('다시 시도해주세요');
      location.href = '/';
    }
  },
  authCheck: async () => {
    const { loggedIn } = (await client.get('/auth/check')).data;
    return loggedIn;
  },
};

export default authApi;
