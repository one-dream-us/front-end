import { useQuery } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useNavigate } from 'react-router-dom';

export default function useScrapedTerms() {
  const navigate = useNavigate();

  const {
    data,
    error,
    refetch: reloadScrapedTerms,
    isLoading,
  } = useQuery({
    queryKey: ['scrapedTerms'],
    queryFn: scrapApi.getScrapedTerms,
  });

  if (isLoading) {
    return { scrapedTerms: [], reloadScrapedTerms };
  }

  if (error) {
    const apiError = error as unknown as ApiError;
    if (apiError?.errorCode === 'NEED_LOGIN') {
      navigate('/login');
    }
  }

  const scrapedTerms = data.dictionaryScraps;

  return { scrapedTerms, reloadScrapedTerms, isLoading };
}
