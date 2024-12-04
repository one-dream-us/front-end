import { useMutation } from '@tanstack/react-query';
import myScrapApi from '@/services/myScrapApi';
import useScrapedContents from '../myScrap/useScrapedContents';

export default function useScrapContent(contentId: number) {
  const { refetch } = useScrapedContents();
  const mutation = useMutation({
    mutationFn: async () => await myScrapApi.addScrapContent(contentId),
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
