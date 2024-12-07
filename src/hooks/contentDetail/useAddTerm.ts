import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import useScrapedContents from '../scrap/useScrapedContents';
import useLoginModalStore from '@/store/useLoginModalStore';
import useContentDetails from './useContentDetails';
import useContentStore from '@/store/useContentStore';
import useScrappedState from './useScrappedState';

export default function useAddTerm(termId: number) {
  const { refetch } = useScrapedContents();
  const contentId = useContentStore((state) => state.contentId);
  const { reloadContentDetails } = useContentDetails(contentId);
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);
  const { reloadScrappedState } = useScrappedState();

  const mutation = useMutation({
    mutationFn: async () => await scrapApi.addScrapTerm(termId),
    onSuccess: () => {
      reloadScrappedState();
      reloadContentDetails();
      refetch();
    },
    onError: (error: Error) => {
      if (error) {
        const apiError = error as unknown as ApiError;
        if (apiError?.errorCode === 'NEED_LOGIN') {
          setIsLoginModalOpen(true);
        }
      }
    },
  });

  return { addScrapTerm: mutation.mutate };
}
