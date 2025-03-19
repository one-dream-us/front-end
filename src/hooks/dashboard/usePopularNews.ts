import DashboardApi from '@/services/DashboardApi';
import { useQuery } from '@tanstack/react-query';

export default function usePopularNews(size: number) {
  const { data: popularNews, isLoading: isPopularLoading } = useQuery({
    queryKey: ['getPopular'],
    queryFn: () => DashboardApi.getPopular(size),
  });
  return { popularNews, isPopularLoading };
}
