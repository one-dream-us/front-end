import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedTerms from './useScrapedTerms';
import useScrappedState from '../contentDetail/useScrappedState';

export default function useDeleteScrapTerm({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { reloadScrapedTerms } = useScrapedTerms();
  const { reloadScrappedState } = useScrappedState();

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedTerm(id)));
    },

    onSuccess: () => {
      reloadScrappedState();
      reloadScrapedTerms();
      reset();
    },
  });

  return { deleteScrapTerm: mutation.mutate };
}
