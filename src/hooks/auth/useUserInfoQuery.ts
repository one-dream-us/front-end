import authApi from '@/services/authApi';
import { useQuery } from '@tanstack/react-query';

export const useUserInfoQuery = () => {
  return useQuery({
    queryFn: authApi.getInfo,
    queryKey: ['userInfo'],
  });
};
