import authApi from '@/services/authApi';
import { useQuery } from '@tanstack/react-query';

export const useAuthCheckQuery = () => {
  return useQuery({
    queryKey: ['auth-check'],
    queryFn: authApi.authCheck,
  });
};
