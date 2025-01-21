import { useLoginStore } from '@/store/useIsLoginStore';
import { useMutation } from '@tanstack/react-query';
import wordListAPi from '@/services/wordListApi';
import useGetWordListData from './useGetWordListData';
import { MyWordListMenuType } from '@/types/types';
import useLearningStatus from './useLearningStatus';
import useToastStore from '@/store/useToastStore';

export default function useDeleteKeyNote(dictionaryId: number, activeMenu: MyWordListMenuType) {
  const { isLogin } = useLoginStore();
  const { refetch } = useGetWordListData(activeMenu);
  const { refetch: refetchBoard } = useLearningStatus();
  const { showToast } = useToastStore();
  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await wordListAPi.deleteKeyNote(dictionaryId);
    },
    onSuccess: () => {
      showToast('스크랩함으로 이동하였습니다.', 'addTerm');
      setTimeout(() => refetch(), 300);
      setTimeout(() => refetchBoard(), 300);
    },
  });

  return { deleteKeyNote: mutation.mutate };
}
