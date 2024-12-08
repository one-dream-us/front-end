import authApi from '@/services/authApi';
import { useQuery } from '@tanstack/react-query';

export const useAuthCheckQuery = () => {
  return useQuery({
    queryKey: ['auth-check'],
    queryFn: authApi.authCheck,
    refetchInterval: 10 * 60 * 1000,
    staleTime: Infinity,
  });
};
