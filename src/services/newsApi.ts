import client from '@/utils/client';

const newsApi = {
  fetchNewsDetail: async (newsId: string) => {
    return (await client.get(`/contents/news/${newsId}`)).data;
  },
  postScrapWord: async (wordId: number) => {
    (await client.post(`/scraps/dictionaries/${wordId}`)).data;
  },
  postRemoveScrapWord: async (wordId: number) => {
    return await client.delete(`/scraps/dictionaries/${wordId}`);
  },
};
export default newsApi;
