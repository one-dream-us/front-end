import { useQuery } from '@tanstack/react-query';
import contentApi from '@/services/contentApi';
import useContentStore from '@/store/useContentStore';
import useScrappedStore from '@/store/useScrappedStore';
import { useEffect } from 'react';

export default function useScrappedState() {
  const contentId = useContentStore((state) => state.contentId);

  const { data, refetch: reloadScrappedState } = useQuery({
    queryKey: ['scrappedState', contentId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return contentApi.getScrappedState(id as number);
    },
    enabled: !!contentId,
  });

  const setScrappedData = useScrappedStore((state) => state.setScrappedData);

  useEffect(() => {
    if (data) {
      setScrappedData(data);
    }
  }, [data, setScrappedData]);

  return { reloadScrappedState };
}
