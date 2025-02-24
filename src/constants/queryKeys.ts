const QUERY_KEYS = {
  authCheck: ['auth-check'] as const,
  userInfo: ['userInfo'] as const,
  viewCount: ['myViewCount'] as const,
  newsDetail: (newsId: string) => ['news-detail', newsId] as const,
  getScrapList: ['스크랩'] as const,
  getKeyNoteList: ['핵심노트'] as const,
  getWrongList: ['오답노트'] as const,
  getGradList: ['졸업노트'] as const,
  learngingDays: ['learngingDays'],
  learningStatus: ['learningStatus'],
  continuousDays: ['continuousDays'],
  todaysMission: ['todaysMission'],
};
export default QUERY_KEYS;
