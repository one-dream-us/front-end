import client from '@/utils/client';

const newsApi = {
  fetchNewsDetail: async (newsId: string) => {
    return (await client.get(`/contents/news/${newsId}`)).data;
  },
};
export default newsApi;
