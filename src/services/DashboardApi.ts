import client from '@/utils/client';

const DashboardApi = {
  checkFirstQuiz: async () => {
    const { data: response } = await client.get('/users/quiz/first-attempt');
    return response;
  },
};
export default DashboardApi;
