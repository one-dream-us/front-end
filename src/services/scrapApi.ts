import client from '@/utils/client';

const scrapApi = {
  getScrapedContents: async () => {
    const { data: response } = await client.get('/scraps/contents');
    return response;
  },

  getScrapedTerms: async () => {
    const { data: response } = await client.get('/scraps/dictionaries');
    return response;
  },

  deleteScrapedContent: async (contentId: number) => {
    const { data: response } = await client.delete(`/scraps/contents/${contentId}`);
    return response;
  },

  deleteScrapedTerm: async (termId: number) => {
    const { data: response } = await client.delete(`/scraps/dictionaries/${termId}`);
    return response;
  },

  addScrapContent: async (contentId: number) => {
    const { data: response } = await client.post(`/scraps/contents/${contentId}`);
    return response;
  },

  addScrapTerm: async (termId: number, contentId: number) => {
    const { data: response } = await client.post(
      `/scraps/dictionaries/${termId}/contents/${contentId}`,
    );
    return response;
  },

  getTotalScrapCount: async () => (await client.get('scraps/total')).data,

  getTermsCnt: async () => {
    const { data: response } = await client.get(`/scraps/dictionaries/count`);
    return response;
  },

  getContentsCnt: async () => {
    const { data: response } = await client.get(`/scraps/contents/count`);
    return response;
  },
};

export default scrapApi;
