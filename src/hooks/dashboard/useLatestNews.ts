import { useQuery } from '@tanstack/react-query';
import DashboardApi from '@/services/DashboardApi';
import { News } from '@/types/interface';

export default function useLatestNews() {
  const { data: latestNews, isLoading: isLatestLoading } = useQuery<News>({
    queryKey: ['getLatestNews'],
    queryFn: DashboardApi.getLatestNews,
  });

  return { latestNews, isLatestLoading };
}
