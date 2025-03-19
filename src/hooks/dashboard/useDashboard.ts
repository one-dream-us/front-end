import { useOnboardingStore } from '@/store/useOnBoardingStore';
import useLatestNews from './useLatestNews';
import usePopularNews from './usePopularNews';

export default function useDashboard() {
  const { showOnboarding, setShowOnboarding } = useOnboardingStore();
  const { latestNews, isLatestLoading } = useLatestNews();
  const { popularNews, isPopularLoading } = usePopularNews(4);
  const latestNewsId = latestNews ? latestNews.newsId : 0;

  return {
    showOnboarding,
    setShowOnboarding,
    latestNews,
    popularNews,
    latestNewsId,
    isLatestLoading,
    isPopularLoading,
  };
}
