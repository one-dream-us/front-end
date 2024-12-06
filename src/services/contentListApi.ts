import client from '@/utils/client';

const contentListApi = {
  getContentList: async (params: { cursor: number | null; size: number }) =>
    (await client.get('/content', { params })).data,
};
export default contentListApi;
