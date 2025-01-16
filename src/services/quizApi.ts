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
  checkIsFirstQuiz: async () => {
    return (
      await client.get<{
        isFirstQuizAttempt: boolean;
      }>('/users/quiz/first-attempt')
    ).data;
  },
  getNormalQuiz: async () => {
    return (await client.get('/quiz')).data;
  },
};
