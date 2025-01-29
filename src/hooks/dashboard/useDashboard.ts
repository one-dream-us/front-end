import { useOnboardingStore } from '@/store/useOnBoardingStore';
import useLatestNews from './useLatestNews';
import useNewsList from './useNewsList';

export default function useDashboard() {
  const { showOnboarding, setShowOnboarding } = useOnboardingStore();
  const { latestNews } = useLatestNews();
  const { contents } = useNewsList(null, 4);
  const latestNewsId = latestNews ? latestNews.newsId : 0;

  return { showOnboarding, setShowOnboarding, latestNews, newsList: contents, latestNewsId };
}
