import { useMutation } from '@tanstack/react-query';
import scrapApi from '@/services/scrapApi';
import useScrapedContents from '../scrap/useScrapedContents';

export default function useAddScrap(contentId: number) {
  const { refetch } = useScrapedContents();

  const mutation = useMutation({
    mutationFn: async () => await scrapApi.addScrapContent(contentId),
    onSuccess: () => {
      console.log('스크랩 콘텐츠 추가 성공');
      refetch();
    },
    onError: (error: Error) => {
      console.error('스크랩 콘텐츠 추가 실패:', error);
    },
  });

  return { addScrapContent: mutation.mutate };
}
