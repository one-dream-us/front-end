import client from '@/utils/client';

export const missionApi = {
  getContinuousDays: async () =>
    (await client.get('missions/status/continuous-days')).data.continuousDays,
};
