import NewsDetailPage from '@/pages/newsDetail/NewsDetailPage';
import NewsPendingPage from '@/pages/newsDetail/NewsPendingPage';
import { useState } from 'react';

export default function NewsDetailContainer() {
  const [startCourse, setStartCourse] = useState(false);

  return (
    <>
      {startCourse ? (
        <NewsDetailPage />
      ) : (
        <NewsPendingPage handleStartCourse={() => setStartCourse(true)} />
      )}
    </>
  );
}
