import client from '@/utils/client';

const contentApi = {
  getContentDetail: async (contentId: number) => {
    const { data: response } = await client.get(`/contents/${contentId}`);
    console.log('조회성공');
    return response;
  },
  getMyViewCount: async () => {
    const { watchedCount } = (await client.get('/users/me/content-histories/count')).data;
    return watchedCount;
  },
};
export default contentApi;
