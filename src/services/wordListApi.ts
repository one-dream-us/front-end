import { IScrapList } from '@/types/interface';
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
  getBookmark: async () => {
    const { data: response } = await client.get('/bookmark');
    return response;
  },
  getScrap: async () => {
    const { data: response } = await client.get<IScrapList>('/scraps/news/dictionaries');
    return response;
  },
  getLearningStatus: async () => {
    const { data: response } = await client.get('/note/learning-status/');
    return response;
  },
  addKeyNote: async (dictionaryId: number) => {
    const { data: response } = await client.post(`/note/key-note/dictionary/${dictionaryId}`);
    return response;
  },
};
export default wordListAPi;
