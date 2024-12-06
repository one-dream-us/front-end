import client from '@/utils/client';

const homeContentApi = {
  getPopular: async () => {
    try {
      return (await client.get('/content/popular')).data;
    } catch (e) {
      console.log(e);
    }
  },
  getLatest: async () => {
    try {
      return (await client.get('/content/latest')).data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default homeContentApi;
