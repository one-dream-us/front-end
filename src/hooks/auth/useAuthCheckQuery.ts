import QUERY_KEYS from '@/constants/queryKeys';
import authApi from '@/services/authApi';
import { useQuery } from '@tanstack/react-query';

export const useAuthCheckQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.authCheck,
    queryFn: authApi.authCheck,
    refetchInterval: 10 * 60 * 1000,
    staleTime: Infinity,
  });
};
