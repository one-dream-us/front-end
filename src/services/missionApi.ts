import client from '@/utils/client';

export const missionApi = {
  getContinuousDays: async () =>
    (await client.get('/missions/status/continuous-days')).data.continuousDays,
  getMissionStatus: async (month: string) =>
    (await client.get(`/missions/status?month=${month}`)).data?.data?.dailyMissionDetails,
  postNewsComplete: async () => (await client.post('/missions/status/news-learn')).data,
};
