import client from '@/utils/client';

const DashboardApi = {
  checkFirstQuiz: async () => {
    const { data: response } = await client.get('/users/quiz/first-attempt');
    return response;
  },
  getLatestNews: async () => {
    const { data: response } = await client.get('/contents/news/latest');
    return response;
  },
  getNewsList: async (cursor: number | null, size: number = 10) => {
    const { data: response } = await client.get('/contents/news', {
      params: {
        cursor,
        size,
      },
    });
    return response;
  },
};
export default DashboardApi;
