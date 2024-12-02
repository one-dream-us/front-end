import { useQuery } from '@tanstack/react-query';
import myPageApi from '@/services/myScrapApi';

export default function useScrapedTerms() {
  const query = useQuery({
    queryKey: ['scrapedTerms'],
    queryFn: myPageApi.getScrapedTerms,
  });

  return query;
}
