import { useQuery } from '@tanstack/react-query';
import contentApi from '@/services/contentApi';

export default function useContentDetails(contentId: number) {
  const {
    data,
    isLoading,
    refetch: reloadContentDetails,
  } = useQuery({
    queryKey: ['contentDetail', contentId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return contentApi.getContentDetail(id as number);
    },
    enabled: !!contentId,
  });

  const contentDetails = data;

  return { contentDetails, isLoading, reloadContentDetails };
}
