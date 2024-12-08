import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedTerms from './useScrapedTerms';
import useScrappedState from '../contentDetail/useScrappedState';
import useMyScrap from './useMyScrap';

export default function useDeleteScrapTerm({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { reloadScrapedTerms } = useScrapedTerms();
  const { reloadScrappedState } = useScrappedState();
  const { refetch: refetchMyScrap } = useMyScrap();

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedTerm(id)));
    },

    onSuccess: () => {
      reloadScrappedState();
      refetchMyScrap();
      reloadScrapedTerms();
      reset();
    },
  });

  return { deleteScrapTerm: mutation.mutate };
}
