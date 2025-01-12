import client from '@/utils/client';

const wordListAPi = {
  getGraduationNote: async () => {
    const { data: response } = await client.get('/note/graduation-note');
    return response;
  },
  getIncorrectNote: async () => {
    const { data: response } = await client.get('/note/wrong-answer-note');
    return response;
  },
  getKeyNote: async () => {
    const { data: response } = await client.get('/note/key-note');
    return response;
  },
  getLearningStatus: async () => {
    const { data: response } = await client.get('/note/learning-status/');
    return response;
  },
  addKeyNote: async (dictionaryId: number) => {
    const { data: response } = await client.get(`/note/key-note/dictionary/${dictionaryId}`);
    return response;
  },
  deleteKeyNote: async (dictionaryId: number) => {
    const { data: response } = await client.delete(`/note/key-note/dictionary/${dictionaryId}`);
    return response;
  },
};
export default wordListAPi;
