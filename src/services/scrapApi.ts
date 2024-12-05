import client from '@/utils/client';

const scrapApi = {
  getScrapedContents: async () => {
    const { data: response } = await client.get('/scrap/content');
    return response;
  },

  getScrapedTerms: async () => {
    const { data: response } = await client.get('/scrap/dictionary');
    return response;
  },

  deleteScrapedContent: async (contentId: number) => {
    const { data: response } = await client.delete(`/scrap/content/${contentId}`);

    return response;
  },

  deleteScrapedTerm: async (termId: number) => {
    const { data: response } = await client.delete(`/scrap/dictionary/${termId}`);

    return response;
  },

  addScrapContent: async (contentId: number) => {
    const { data: response } = await client.post(`/scrap/content/${contentId}`);
    return response;
  },

  addScrapTerm: async (termId: number) => {
    const { data: response } = await client.post(`/scrap/dictionary/${termId}`);
    return response;
  },
};

export default scrapApi;
