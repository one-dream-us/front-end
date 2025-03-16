import { AddHistoriesPayload } from '@/types/interface';
import client from '@/utils/client';

const historyApi = {
  addHistories: async (payload: AddHistoriesPayload) =>
    (await client.post(`/history/dictionaries`, payload)).data,
  addHistory: async (dictionaryId: number) =>
    (await client.post(`/history/dictionaries/${dictionaryId}`)).data,
  getHistory: async () => (await client.get('/history')).data,
};
export default historyApi;
