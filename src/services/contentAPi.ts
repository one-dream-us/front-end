import client from '@/utils/client';

const contentApi = {
  getContentDetail: async (contentId: number) => {
    const { data: response } = await client.get(`/content/${contentId}`);
    return response;
  },
};
export default contentApi;
