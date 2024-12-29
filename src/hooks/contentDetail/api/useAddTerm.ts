import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import useScrapedTerms from '../../myScrap/useScrapedTerms';
import useLoginModalStore from '@/store/useLoginModalStore';
import useScrappedState from '../useScrappedState';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useAddTerm(termId: number, contentId: number) {
  const { reloadScrapedTerms } = useScrapedTerms();
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);
  const { reloadScrappedState } = useScrappedState();
  const { isLogin } = useLoginStore();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await scrapApi.addScrapTerm(termId, contentId);
    },
    onSuccess: () => {
      reloadScrappedState();
      reloadScrapedTerms();
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
