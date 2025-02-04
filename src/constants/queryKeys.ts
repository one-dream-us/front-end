const QUERY_KEYS = {
  authCheck: ['auth-check'] as const,
  userInfo: ['userInfo'] as const,
  viewCount: ['myViewCount'] as const,
  newsDetail: (newsId: string) => ['news-detail', newsId] as const,
  // getScrapList: ['myScrapList'] as const,
  getScrapList: ['스크랩'] as const,
  learngingDays: ['learngingDays'],
};
export default QUERY_KEYS;
