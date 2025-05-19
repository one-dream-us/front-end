import { useQuery } from '@tanstack/react-query';
import DashboardApi from '@/services/DashboardApi';
import QUERY_KEYS from '@/constants/queryKeys';

export default function useGetEvents() {
  const { data: events, isLoading: isEventsLoading } = useQuery({
    queryKey: QUERY_KEYS.getEvents,
    queryFn: () => DashboardApi.getEvents(),
  });
  return { events, isEventsLoading };
}
