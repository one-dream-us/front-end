import { useQuery } from '@tanstack/react-query';
import DashboardApi from '@/services/DashboardApi';

export default function useNewsList(cursor: number | null = null, size: number = 4) {
  const { data } = useQuery({
    queryKey: ['getNewsList', { cursor, size }],
    queryFn: () => DashboardApi.getNewsList(cursor, size),
  });
  const contents = data ? data.contents : null;
  const hasNext = data ? data.hasNext : false;
  const totalElements = data ? data.totalElements : 0;
  const nextCursor = data ? data.nextCursor : 0;
  return { contents, hasNext, totalElements, nextCursor };
}
