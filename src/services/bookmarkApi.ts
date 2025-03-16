import client from '@/utils/client';

const bookmarkApi = {
  addBookmark: async (dictionaryId: number) =>
    (await client.post(`/bookmark/dictionaries/${dictionaryId}`)).data,
  getBookmark: async () => (await client.get('/bookmark')).data,
  removeBookmark: async (bookmarkId: number) => await client.delete(`/bookmark/${bookmarkId}`),
};
export default bookmarkApi;
