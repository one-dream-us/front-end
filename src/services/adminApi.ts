import { UploadFormReqestBody } from '@/types/interface';
import client from '@/utils/client';

const adminApi = {
  lookUpKeyword: async (keyword: string) => (await client.get(`/dictionary/${keyword}`)).data,
  uploadScheduled: async (date: string, payload: UploadFormReqestBody) => {
    return (await client.post(`/contents/news/scheduled/${date}`, payload)).data;
  },
  uploadImmediately: async (payload: UploadFormReqestBody) => {
    return (await client.post('/contents/news', payload)).data;
  },
  getScheduledUploadList: async (page: number, size: number = 10) => {
    return (await client.get(`/contents/news/scheduled?page=${page}&size=${size}`)).data;
  },
};
export default adminApi;
