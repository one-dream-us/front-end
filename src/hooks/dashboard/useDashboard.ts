import { useState } from 'react';
import useLatestNews from './useLatestNews';
import useNewsList from './useNewsList';

export default function useDashboard() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const { latestNews } = useLatestNews();
  const { newsList } = useNewsList();

  return { showOnboarding, setShowOnboarding, latestNews, newsList };
}
