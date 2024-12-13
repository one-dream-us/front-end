import client from '@/utils/client';

const authApi = {
  getInfo: async () => (await client.get('/users/info')).data,
  logout: async () => {
    try {
      const res = await client.post('/users/logout');
      console.log(res);
      location.href = '/';
      localStorage.removeItem('prevPage');
    } catch (e) {
      console.log(e);
    }
  },
  withDraw: async () => {
    try {
      const res = await client.delete('/users/withdraw');
      console.log(res);
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
  joinSocial: async (prevPage: string) => {
    try {
      (
        await client.post('/users/join/social', {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': location.origin,
          },
        })
      ).data;
      if (prevPage.includes('withdraw-success')) {
        prevPage = location.origin;
      }
      location.href = prevPage;
      localStorage.removeItem('prevPage');
    } catch (e) {
      console.log(e);
    }
  },
  unlinkSocial: async (prevPage: string) => {
    try {
      (
        await client.post('/users/unlink/social', {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': location.origin,
          },
        })
      ).data;
      if (prevPage.includes('withdraw-success')) {
        prevPage = location.origin;
      }
      location.href = prevPage;
      localStorage.removeItem('prevPage');
    } catch (e) {
      console.log(e);
    }
  },
};

export default authApi;
