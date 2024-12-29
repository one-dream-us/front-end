import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedTerms from './useScrapedTerms';
import useScrappedState from '../contentDetail/useScrappedState';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useDeleteScrapTerm({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { reloadScrapedTerms } = useScrapedTerms();
  const { reloadScrappedState } = useScrappedState();
  const { isLogin } = useLoginStore();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
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
