import client from '@/utils/client';

const authApi = {
  getInfo: async () => (await client.get('/users/info')).data,
  logout: async () => {
    try {
      const res = await client.post('/users/logout');
      console.log(res);
      location.href = '/';
    } catch (e) {
      console.log(e);
    }
  },
  withDraw: async () => {
    try {
      const res = await client.delete('/users/withdraw');
      console.log(res);
      // location.href = '/withdraw-success';
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
