import { useMutation } from '@tanstack/react-query';
import myScrapApi from '@/services/myScrapApi';
import { useResetScrap } from './useResetScrap';

export default function useDeleteScrapCon({
  selectedIdList,
  refetch,
}: {
  selectedIdList: number[];
  refetch: () => void;
}) {
  const reset = useResetScrap();

  const mutation = useMutation({
    mutationFn: async () => {
      await Promise.all(selectedIdList.map((id) => myScrapApi.deleteScrapedContent(id)));
    },
    onSuccess: () => {
      console.log('스크랩 콘텐츠 삭제 성공');
      refetch();
      reset();
    },
    onError: (error: Error) => {
      console.error('스크랩 콘텐츠 삭제 실패:', error);
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
