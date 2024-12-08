import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import { useResetScrap } from './useResetScrap';
import useScrapedTerms from './useScrapedTerms';
import useContentDetails from '../contentDetail/useContentDetails';
import useContentStore from '@/store/useContentStore';
import useScrappedState from '../contentDetail/useScrappedState';

export default function useDeleteScrapTerm({ selectedIdList }: { selectedIdList: number[] }) {
  const reset = useResetScrap();
  const { refetch } = useScrapedTerms();
  const contentId = useContentStore((state) => state.contentId);
  const { reloadContentDetails } = useContentDetails(contentId);
  const { reloadScrappedState } = useScrappedState();

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => scrapApi.deleteScrapedTerm(id)));
    },

    onSuccess: () => {
      reloadScrappedState();
      reloadContentDetails();
      refetch();
      reset();
    },
  });

  return { deleteScrapTerm: mutation.mutate };
}
