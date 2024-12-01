import { useMutation } from '@tanstack/react-query';
import myScrapApi from '@/services/myScrapApi';
import { useSetAtom } from 'jotai';
import { selectedIdListAtom, allIdListAtom, isAllCheckedAtom } from '@/store/atom';
import { reset } from '@/utils/myScrapUtils';

export default function useDeleteScrapTerm({
  selectedIdList,
  refetch,
}: {
  selectedIdList: number[];
  refetch: () => void;
}) {
  const setSelectedIdList = useSetAtom(selectedIdListAtom);
  const setAllIdList = useSetAtom(allIdListAtom);
  const setIsAllChecked = useSetAtom(isAllCheckedAtom);

  const mutation = useMutation({
    mutationFn: async () => await myScrapApi.deleteScrapedTerm(selectedIdList),
    onSuccess: () => {
      console.log('스크랩 단어 삭제 성공');
      refetch();
      reset(setSelectedIdList, setAllIdList, setIsAllChecked);
    },
    onError: (error: Error) => {
      console.error('스크랩 단어 삭제 실패:', error);
    },
  });

  return { deleteScrapTerm: mutation.mutate };
}
