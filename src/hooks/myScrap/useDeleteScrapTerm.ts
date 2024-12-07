import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedTerms from './useScrapedTerms';

export default function useDeleteScrapTerm({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { reloadScrapedTerms } = useScrapedTerms();

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedTerm(id)));
    },

    onSuccess: () => {
      reloadScrapedTerms();
      reset();
    },
  });

  return { deleteScrapTerm: mutation.mutate };
}
