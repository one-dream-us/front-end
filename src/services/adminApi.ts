import client from '@/utils/client';

const adminApi = {
  lookUpKeyword: async (keyword: string) => (await client.get(`/dictionary/${keyword}`)).data,
  uploadScheduled: async (payload: FormData, date: string) => {
    return (
      await client.post(`/back-office/contents/news/scheduled/${date}`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    ).data;
  },
  uploadImmediately: async (payload: FormData) => {
    return (
      await client.post('/back-office/contents/news', payload, {
        headers: { 'Content-Type': `multipart/form-data` },
      })
    ).data;
  },
  getScheduledUploadList: async (page: number, size: number = 10) => {
    return (await client.get(`/back-office/contents/news/scheduled?page=${page}&size=${size}`))
      .data;
  },
  getUploadedList: async (page: number, size: number = 10) =>
    (await client.get(`/back-office/contents/news?page=${page}&size=${size}`)).data,
  getDetailInfo: async (newsId: number) =>
    (await client.get(`/back-office/contents/news/${newsId}`)).data,
  lookupNewsAgency: async (newsAgency: string) =>
    (await client.get(`/back-office/agency/${newsAgency}`)).data,
};
export default adminApi;
