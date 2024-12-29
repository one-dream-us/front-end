import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrappedConStore from '@/store/useScrappedConStore';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useDeleteScrapCon({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { refetch: refetchScrapedContents } = useScrapedContents();
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);
  const { isLogin } = useLoginStore((state) => state);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedContent(id)));
    },

    onSuccess: () => {
      setIsScrapped(false);
      refetchScrapedContents();
      reset();
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
