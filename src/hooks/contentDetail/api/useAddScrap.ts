import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import useScrapedContents from '../../scrap/useScrapedContents';
import useLoginModalStore from '@/store/useLoginModalStore';
import useScrappedConStore from '@/store/useScrappedConStore';

export default function useAddScrap(contentId: number) {
  const { refetch: refetchScrapedContents } = useScrapedContents();
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);

  const mutation = useMutation({
    mutationFn: async () => await scrapApi.addScrapContent(contentId),
    onSuccess: () => {
      setIsScrapped(true);
      refetchScrapedContents();
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

  return { addScrapContent: mutation.mutate };
}
