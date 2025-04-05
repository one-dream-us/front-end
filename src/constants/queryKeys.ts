const QUERY_KEYS = {
  authCheck: ['auth-check'] as const,
  userInfo: ['userInfo'] as const,
  viewCount: ['myViewCount'] as const,
  newsDetail: (newsId: string) => ['news-detail', newsId] as const,
  getBookmarkList: ['북마크'] as const,
  getHistoryList: ['히스토리'] as const,
  getWrongList: ['오답노트'] as const,
  getGradList: ['졸업노트'] as const,
  learningDays: ['learningDays'],
  learningStatus: ['learningStatus'],
  continuousDays: ['continuousDays'],
  todaysMission: ['todaysMission'],
  checkFirstQuiz: ['isFirstQuiz'],
};
export default QUERY_KEYS;
