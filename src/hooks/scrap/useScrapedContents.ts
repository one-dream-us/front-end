import { useQuery } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useNavigate } from 'react-router-dom';

export default function useScrapedContents() {
  const navigate = useNavigate();

  const { data, error, refetch, isLoading } = useQuery({
    queryKey: ['scrapedItems'],
    queryFn: scrapApi.getScrapedContents,
  });

  if (isLoading) {
    return { scrapedContents: [], refetch };
  }

  if (error) {
    const apiError = error as unknown as ApiError;
    if (apiError?.errorCode === 'NEED_LOGIN') {
      navigate('/login');
    }
  }

  const scrapedContents = data.contentScraps;
  return { scrapedContents, refetch, isLoading };
}