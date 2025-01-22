import contentApi from '@/services/contentAPi';
import { useQuery } from '@tanstack/react-query';
import { useLoginStore } from '@/store/useIsLoginStore';
import QUERY_KEYS from '@/constants/queryKeys';

export const useMyViewCount = () => {
  const isLogin = useLoginStore((state) => state.isLogin);

  return useQuery({
    queryKey: QUERY_KEYS.viewCount,
    queryFn: contentApi.getMyViewCount,
    enabled: isLogin,
    staleTime: 0,
  });
};
