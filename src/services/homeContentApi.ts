import client from '@/utils/client';

const homeContentApi = {
  getPopular: async () => (await client.get('/contents/popular')).data,
  getLatest: async () => (await client.get('/contents/latest')).data,
};

export default homeContentApi;
