import contentApi from '@/services/contentAPi';
import { useQuery } from '@tanstack/react-query';

export const useMyViewCount = () => {
  return useQuery({
    queryKey: ['myViewCount'],
    queryFn: contentApi.getMyViewCount,
  });
};
