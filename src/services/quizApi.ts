import { IQuestionResult, IQuizResult } from '@/types/interface';
import client from '@/utils/client';

export const quizApi = {
  getRandomQuizzes: async () => {
    return (await client.get('/quiz/random')).data;
  },
  postQuizResults: async (payload: IQuestionResult[]) => {
    const res = (await client.post('/quiz', payload)).data as IQuizResult;
    return res;
  },
};
