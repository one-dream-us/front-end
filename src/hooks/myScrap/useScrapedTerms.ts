import { useQuery } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useNavigate } from 'react-router-dom';

export default function useScrapedTerms(isLogin: boolean = true) {
  const navigate = useNavigate();

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
