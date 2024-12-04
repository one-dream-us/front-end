import authApi from '@/services/authApi';
import { UserInfoData } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';

export const useUserInfoQuery = () => {
  return useQuery<UserInfoData>({
    queryFn: authApi.getInfo,
    queryKey: ['userInfo'],
  });
};
