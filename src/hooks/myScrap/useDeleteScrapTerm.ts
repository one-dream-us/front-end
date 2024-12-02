import { useMutation } from '@tanstack/react-query';
import myScrapApi from '@/services/myScrapApi';
import { useResetScrap } from './useResetScrap';

export default function useDeleteScrapTerm({
  selectedIdList,
  refetch,
}: {
  selectedIdList: number[];
  refetch: () => void;
}) {
  const reset = useResetScrap();
  const mutation = useMutation({
    mutationFn: async () => await myScrapApi.deleteScrapedTerm(selectedIdList),
    onSuccess: () => {
      console.log('스크랩 단어 삭제 성공');
      refetch();
      reset();
    },
    onError: (error: Error) => {
      console.error('스크랩 단어 삭제 실패:', error);
    },
  });

  return { deleteScrapTerm: mutation.mutate };
}
