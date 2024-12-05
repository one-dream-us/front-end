import client from '@/utils/client';

const homeContentApi = {
  getPopular: async () => (await client.get('/content/popular')).data,
  getLatest: async () => (await client.get('/content/latest')).data,
};

export default homeContentApi;
