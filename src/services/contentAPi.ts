import client from '@/utils/client';

const contentApi = {
  getContentDetail: async (contentId: number) => {
    const { data: response } = await client.get(`/contents/${contentId}`);
    return response;
  },

  getMyViewCount: async () => {
    const { watchedCount } = (await client.get('/users/me/content-histories/count')).data;
    return watchedCount;
  },

  getScrappedState: async (contentId: number) => {
    const { data: response } = await client.get(
      `/users/me/dictionary-scraps/contents/${contentId}`,
    );
    return response;
  },
};
export default contentApi;
