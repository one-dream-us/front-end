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
    const { data: response } = await client.post(`/scraps/contenst/${contentId}`);
    return response;
  },

  addScrapTerm: async (termId: number) => {
    const { data: response } = await client.post(`/scraps/dictionaries/${termId}`);
    return response;
  },
};

export default scrapApi;
