import contentApi from '@/services/contentAPi';
import { useQuery } from '@tanstack/react-query';
import { useLoginStore } from '@/store/useIsLoginStore';

export const useMyViewCount = () => {
  const isLogin = useLoginStore((state) => state.isLogin);

  return useQuery({
    queryKey: ['myViewCount'],
    queryFn: contentApi.getMyViewCount,
    enabled: isLogin,
    staleTime: 0,
  });
};
