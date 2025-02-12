import { UploadFormReqestBody } from '@/types/interface';
import client from '@/utils/client';

const adminApi = {
  lookUpKeyword: async (keyword: string) => (await client.get(`/dictionary/${keyword}`)).data,
  uploadScheduled: async (payload: UploadFormReqestBody, date: string) => {
    return (await client.post(`/back-office/contents/news/scheduled/${date}`, payload)).data;
  },
  uploadImmediately: async (payload: UploadFormReqestBody) => {
    return (await client.post('/back-office/contents/news', payload)).data;
  },
  getScheduledUploadList: async (page: number, size: number = 10) => {
    return (await client.get(`/back-office/contents/news/scheduled?page=${page}&size=${size}`))
      .data;
  },
  getUploadedList: async (page: number, size: number = 10) =>
    (await client.get(`/back-office/contents/news?page=${page}&size=${size}`)).data,
};
export default adminApi;
