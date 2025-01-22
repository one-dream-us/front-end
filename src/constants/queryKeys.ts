const QUERY_KEYS = {
  authCheck: ['auth-check'] as const,
  userInfo: ['userInfo'] as const,
  viewCount: ['myViewCount'] as const,
  newsDetail: (newsId: string) => ['news-detail', newsId] as const,
  getScrapList: ['myScrapList'] as const,
};
export default QUERY_KEYS;
