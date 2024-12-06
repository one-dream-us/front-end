import client from '@/utils/client';

const contentApi = {
  getContentDetail: async (contentId: number) => {
    const { data: response } = await client.get(`/content/${contentId}`);
    console.log('조회성공');
    return response;
  },
};
export default contentApi;
