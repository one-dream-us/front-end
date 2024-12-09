import scrapApi from '@/services/scrapApi';
import { useQuery } from '@tanstack/react-query';

export const useScrapTotalQuery = () => {
  return useQuery({
    queryKey: ['scrap-total'],
    queryFn: scrapApi.getTotalScrapCount,
    staleTime: 0,
  });
};
