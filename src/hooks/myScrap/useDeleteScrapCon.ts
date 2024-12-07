import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrappedConStore from '@/store/useScrappedConStore';

export default function useDeleteScrapCon({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { refetch } = useScrapedContents();
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedContent(id)));
    },

    onSuccess: () => {
      setIsScrapped(false);
      refetch();
      reset();
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
