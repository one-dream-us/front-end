import { useQuery } from '@tanstack/react-query';
import myPageApi from '@/services/myScrapApi';

export default function useScrapedContents() {
  const query = useQuery({
    queryKey: ['scrapedItems'],
    queryFn: myPageApi.getScrapedContents,
  });

  return query;
}
