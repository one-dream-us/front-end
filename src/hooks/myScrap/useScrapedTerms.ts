import { useQuery } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useScrapedTerms() {
  const navigate = useNavigate();
  const { isLogin } = useLoginStore((state) => state);

  const { data, error, refetch, isLoading } = useQuery({
    queryKey: ['scrapedTerms'],
    queryFn: scrapApi.getScrapedTerms,
    enabled: isLogin,
  });

  if (error) {
    const apiError = error as unknown as ApiError;
    if (apiError?.errorCode === 'NEED_LOGIN') {
      navigate('/login');
    }
  }

  const scrapedTerms = data?.dictionaryScraps ?? [];

  return {
    scrapedTerms: isLogin ? scrapedTerms : [],
    reloadScrapedTerms: isLogin ? refetch : async () => Promise.resolve(),
    isLoading,
  };
}
