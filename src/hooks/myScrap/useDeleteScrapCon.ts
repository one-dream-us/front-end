import { useMutation } from '@tanstack/react-query';
import myScrapApi from '@/services/myScrapApi';

export default function useDeleteScrapCon({
  selectedIdList,
  refetch,
}: {
  selectedIdList: number[];
  refetch: () => void;
}) {
  const mutation = useMutation({
    mutationFn: async () => await myScrapApi.deleteScrapedContent(selectedIdList),
    onSuccess: () => {
      console.log('스크랩 콘텐츠 삭제 성공');
      refetch();
    },
    onError: (error: Error) => {
      console.error('스크랩 콘텐츠 삭제 실패:', error);
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
