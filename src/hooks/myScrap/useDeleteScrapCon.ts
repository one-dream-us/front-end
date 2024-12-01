import { useMutation } from '@tanstack/react-query';
import myScrapApi from '@/services/myScrapApi';
import { useSetAtom } from 'jotai';
import { selectedIdListAtom, allIdListAtom, isAllCheckedAtom } from '@/store/atom';
import { reset } from '@/utils/myScrapUtils';

export default function useDeleteScrapCon({
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
    mutationFn: async () => await myScrapApi.deleteScrapedContent(selectedIdList),
    onSuccess: () => {
      console.log('스크랩 콘텐츠 삭제 성공');
      refetch();
      reset(setSelectedIdList, setAllIdList, setIsAllChecked);
    },
    onError: (error: Error) => {
      console.error('스크랩 콘텐츠 삭제 실패:', error);
    },
  });

  return { deleteScrapContent: mutation.mutate };
}
