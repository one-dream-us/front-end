import axios from 'axios';

const myScrapApi = {
  getScrapedContents: async () => {
    const { data: response } = await axios.get('/scrap/content');
    return response;
  },

  getScrapedTerms: async () => {
    const { data: response } = await axios.get('/scrap/term');
    return response;
  },

  deleteScrapedContent: async (contentId: number) => {
    const { data: response } = await axios.delete(`/scrap/content/${contentId}`);

    return response;
  },

  deleteScrapedTerm: async (termId: number) => {
    const { data: response } = await axios.delete(`/scrap/term/${termId}`);

    return response;
  },

  addScrapContent: async (contentId: number) => {
    const { data: response } = await axios.post(`/scrap/content/${contentId}`);
    return response;
  },

  addScrapTerm: async (termId: number) => {
    const { data: response } = await axios.post(`/scrap/term/${termId}`);
    return response;
  },
};

export default myScrapApi;
