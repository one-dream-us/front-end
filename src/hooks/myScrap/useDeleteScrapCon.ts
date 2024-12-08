import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrappedConStore from '@/store/useScrappedConStore';
import useMyScrap from './useMyScrap';

export default function useDeleteScrapCon({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { refetch: refetchScrapedContents } = useScrapedContents();
  const { refetch: refetchMyScrap } = useMyScrap();
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedContent(id)));
    },

    onSuccess: () => {
      setIsScrapped(false);
      refetchScrapedContents();
      refetchMyScrap();
      reset();
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
