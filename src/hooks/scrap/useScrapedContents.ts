import { useQuery } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useScrapedContents() {
  const navigate = useNavigate();
  const { isLogin } = useLoginStore((state) => state);

  const { data, error, refetch, isLoading } = useQuery({
    queryKey: ['scrapedItems'],
    queryFn: scrapApi.getScrapedContents,
    enabled: isLogin,
  });

  if (error) {
    const apiError = error as unknown as ApiError;
    if (apiError?.errorCode === 'NEED_LOGIN') {
      navigate('/login');
    }
  }

  const scrapCnt = data?.scrapCnt ?? 0;
  const scrapedContents = data?.contentScraps ?? [];

  return {
    scrapCnt: isLogin ? scrapCnt : 0,
    scrapedContents: isLogin ? scrapedContents : [],
    refetch: isLogin ? refetch : async () => Promise.resolve(),
    isLoading: isLogin && isLoading,
  };
}
