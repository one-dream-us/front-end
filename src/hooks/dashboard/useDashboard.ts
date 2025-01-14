import { useOnboardingStore } from '@/store/useOnBoardingStore';
import useLatestNews from './useLatestNews';
import useNewsList from './useNewsList';

export default function useDashboard() {
  const { showOnboarding, setShowOnboarding } = useOnboardingStore();
  const { latestNews } = useLatestNews();
  const { newsList } = useNewsList();
  const latestNewsId = latestNews ? latestNews.newsId : 0;

  return { showOnboarding, setShowOnboarding, latestNews, newsList, latestNewsId };
}
