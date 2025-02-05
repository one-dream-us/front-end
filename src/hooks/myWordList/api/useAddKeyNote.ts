import { useLoginStore } from '@/store/useIsLoginStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import wordListAPi from '@/services/wordListApi';
import { MyWordListMenuType } from '@/types/types';
import useLearningStatus from './useLearningStatus';
import useToastStore from '@/store/useToastStore';
import QUERY_KEYS from '@/constants/queryKeys';
import useGetWordListData from './useGetWordListData';

export default function useAddKeyNote(dictionaryId: number, activeMenu: MyWordListMenuType) {
  const { isLogin } = useLoginStore();
  const { refetch: refetchBoard } = useLearningStatus();
  const { showToast } = useToastStore();
  const queryClient = useQueryClient();
  const { refetch } = useGetWordListData(activeMenu);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await wordListAPi.addKeyNote(dictionaryId);
    },
    onSuccess: async () => {
      showToast('핵심노트로 이동하였습니다.', 'addTerm');
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getKeyNoteList });
      refetch();
      refetchBoard();
    },
  });

  return { addKeyNote: mutation.mutate };
}
