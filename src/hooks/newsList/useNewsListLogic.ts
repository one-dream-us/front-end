import useNewsList from '../dashboard/useNewsList';
import useLatestNews from '../dashboard/useLatestNews';

export default function useNewsListLogic() {
  const { newsList } = useNewsList();
  const { latestNews } = useLatestNews();

  return { newsList, latestNews };
}
