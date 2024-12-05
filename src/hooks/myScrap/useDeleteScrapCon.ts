import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedContents from '../scrap/useScrapedContents';

export default function useDeleteScrapCon({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { refetch } = useScrapedContents();

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedContent(id)));
    },

    onSuccess: () => {
      refetch();
      reset();
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
