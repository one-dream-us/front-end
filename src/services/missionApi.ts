import client from '@/utils/client';

export const missionApi = {
  getContinuousDays: async () =>
    (await client.get('/missions/status/continuous-days')).data.continuousDays,
  getMissionStatus: async (type: 'month' | 'date', query: string) =>
    (await client.get(`/missions/status?${type}=${query}`)).data,
  postNewsComplete: async () => (await client.post('/missions/status/news-learn')).data,
};
