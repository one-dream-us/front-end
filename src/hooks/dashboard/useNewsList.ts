import { useQuery } from '@tanstack/react-query';
import DashboardApi from '@/services/DashboardApi';

export default function useNewsList(cursor: number | null = null, size: number = 4) {
  const { data } = useQuery({
    queryKey: ['getNewsList', { cursor, size }],
    queryFn: () => DashboardApi.getNewsList(cursor, size),
  });

  const newsList = data ? data.contents : null;

  return { newsList };
}
