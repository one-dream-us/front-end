import { useQuery } from '@tanstack/react-query';
import contentApi from '@/services/contentAPi';
import useContentStore from '@/store/useContentStore';
import useScrappedStore from '@/store/useScrappedStore';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useScrappedState() {
  const contentId = useContentStore((state) => state.contentId);
  const isLogin = useLoginStore((state) => state.isLogin);
  if (!isLogin) {
    return {
      reloadScrappedState: () => {},
    };
  }

  const { data, refetch: reloadScrappedState } = useQuery({
    queryKey: ['scrappedState', contentId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return contentApi.getScrappedState(id as number);
    },
    enabled: !!contentId,
  });

  const setScrappedData = useScrappedStore((state) => state.setScrappedData);

  if (data) {
    setScrappedData(data);
  }

  return { reloadScrappedState };
}
