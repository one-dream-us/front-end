import { useLoginStore } from '@/store/useIsLoginStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import wordListAPi from '@/services/wordListApi';
import useToastStore from '@/store/useToastStore';
import QUERY_KEYS from '@/constants/queryKeys';
import { MyWordListMenuType } from '@/types/types';
import useGetWordListData from './useGetWordListData';
import useLearningStatus from './useLearningStatus';

export default function useDeleteKeyNote(dictionaryId: number, activeMenu: MyWordListMenuType) {
  const { isLogin } = useLoginStore();
  const { showToast } = useToastStore();
  const queryClient = useQueryClient();
  const { refetch } = useGetWordListData(activeMenu);
  const { refetch: refetchBoard } = useLearningStatus();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await wordListAPi.deleteKeyNote(dictionaryId);
    },
    onSuccess: async () => {
      showToast('스크랩함으로 이동하였습니다.', 'addTerm');
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getScrapList,
      });
      refetch();
      refetchBoard();
    },
  });

  return { deleteKeyNote: mutation.mutate };
}
