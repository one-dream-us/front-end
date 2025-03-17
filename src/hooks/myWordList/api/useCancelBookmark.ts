import { useLoginStore } from '@/store/useIsLoginStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { MyWordListMenuType } from '@/types/types';
import useGetWordListData from './useGetWordListData';
import useLearningStatus from './useLearningStatus';
import bookmarkApi from '@/services/bookmarkApi';

export default function useCancelBookmark(bookmarkId: number, activeMenu: MyWordListMenuType) {
  const { isLogin } = useLoginStore();
  const queryClient = useQueryClient();
  const { refetch } = useGetWordListData(activeMenu);
  const { refetchStatus } = useLearningStatus();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await bookmarkApi.removeBookmark(bookmarkId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getHistoryList,
      });
      refetch();
      refetchStatus();
    },
  });

  return { cancelBookmark: mutation.mutate };
}
