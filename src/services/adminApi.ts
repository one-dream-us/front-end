import client from '@/utils/client';

const adminApi = {
  ////////////////////////////////////////////////////
  // 조회 (get) ///////////////////////////////////////
  ////////////////////////////////////////////////////
  // 용어 조회 (검색)
  lookUpKeyword: async (keyword: string) => (await client.get(`/dictionary/${keyword}`)).data,
  // 뉴스사 조회 (검색)
  lookupNewsAgency: async (newsAgency: string) =>
    (await client.get(`/back-office/agency/${newsAgency}`)).data,

  // 업로드 된 컨텐츠 리스트 조회
  getUploadedList: async (page: number, size: number = 10) =>
    (await client.get(`/back-office/contents/news?page=${page}&size=${size}`)).data,

  // 예약 컨텐츠 리스트 조회
  getScheduledUploadList: async (page: number, size: number = 10) => {
    return (await client.get(`/back-office/contents/news/scheduled?page=${page}&size=${size}`))
      .data;
  },
  // 임시 저장 컨텐츠 리스트 조회
  getDraftList: async (page: number, size: number = 10) => {
    return (await client.get(`/back-office/contents/news/drafts?page=${page}&size=${size}`)).data;
  },
  // 업로드 된 컨텐츠 상세 정보 조회
  getUploadedDetailInfo: async (newsId: number) =>
    (await client.get(`/back-office/contents/news/${newsId}`)).data,

  // 예약 컨텐츠 상세 정보 조회
  getScheduledDetailInfo: async (newsId: number) =>
    (await client.get(`/back-office/contents/news/scheduled/${newsId}`)).data,
  // 임시저장 컨텐츠 상세 정보 조회
  getDraftDetailInfo: async (newsId: number) =>
    (await client.get(`/back-office/contents/news/drafts/${newsId}`)).data,

  /////////////////////////////////////////////////////
  // 컨텐츠 업로드 (post) ////////////////////////////////
  /////////////////////////////////////////////////////
  // 컨텐츠 예약 업로드
  uploadScheduled: async (payload: FormData, date: string, draftId?: string) => {
    return (
      await client.post(
        `/back-office/contents/news/scheduled/${date}${draftId ? `?draftNewsId=${draftId}` : ''}`,
        payload,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      )
    ).data;
  },
  // 컨텐츠 즉시 업로드
  uploadImmediately: async (payload: FormData, draftId?: string) => {
    return (
      await client.post(
        `/back-office/contents/news${draftId ? `?draftNewsId=${draftId}` : ''}`,
        payload,
        {
          headers: { 'Content-Type': `multipart/form-data` },
        },
      )
    ).data;
  },
  // 컨텐츠 임시 저장 및 수정
  updateDraftContents: async (payload: FormData) =>
    (await client.post('/back-office/contents/news/drafts', payload)).data,
  // 예약 컨텐츠 수정
  updateScheduledContent: async (newsId: number, date: string, formData: FormData) => {
    return (
      await client.put(`/back-office/contents/news/scheduled/${newsId}/${date}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data;
  },

  /////////////////////////////////////////////////////
  // 삭제 (delete) /////////////////////////////////////
  /////////////////////////////////////////////////////
  // 임시 저장 컨텐츠 삭제
  deleteDraftContents: async (draftId: number) =>
    await client.delete(`/back-office/contents/news/drafts/${draftId}`),
  deleteScheduledContents: async (scheduledId: number) =>
    (await client.delete(`/back-office/contents/news/scheduled/${scheduledId}`)).data,
};
export default adminApi;
