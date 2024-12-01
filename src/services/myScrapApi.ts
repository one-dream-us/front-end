import axios from 'axios';

const myScrapApi = {
  getScrapedContents: async () => {
    const { data: response } = await axios.get('/scraped-contents');
    return response;
  },

  getScrapedTerms: async () => {
    const { data: response } = await axios.get('/scraped-terms');
    return response;
  },

  deleteScrapedContent: async (selectedIdList: number[]) => {
    const { data: response } = await axios.delete('/delete/scraped-contents', {
      data: selectedIdList,
    });

    return response;
  },

  deleteScrapedTerm: async (selectedIdList: number[]) => {
    const { data: response } = await axios.delete('/delete/scraped-terms', {
      data: selectedIdList,
    });

    return response;
  },
};

export default myScrapApi;
