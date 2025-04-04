import useLatestNews from './useLatestNews';
import usePopularNews from './usePopularNews';
import { useState, useEffect } from 'react';

export default function useDashboard() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('hasCheckedOnboarding');
    console.log(showOnboarding);
    setShowOnboarding(value !== 'true');
  }, []);

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
    modalOpen,
    setModalOpen,
  };
}
