import { useLoginStore } from '@/store/useIsLoginStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import bookmarkApi from '@/services/bookmarkApi';
import useToastStore from '@/store/useToastStore';

export default function useCancelBookmark(bookmarkId: number) {
  const { isLogin } = useLoginStore();
  const queryClient = useQueryClient();
  const { showToast } = useToastStore();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await bookmarkApi.removeBookmark(bookmarkId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getBookmarkList,
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getHistoryList,
      });
      showToast('북마크를 취소했어요.', 'deleteScrap');
    },
  });

  return { cancelBookmark: mutation.mutate };
}
