import { useLoginStore } from '@/store/useIsLoginStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import bookmarkApi from '@/services/bookmarkApi';

export default function useCancelBookmark(bookmarkId: number) {
  const { isLogin } = useLoginStore();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      if (!isLogin) throw new Error();
      await bookmarkApi.removeBookmark(bookmarkId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getHistoryList,
      });
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.getBookmarkList,
      });
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.learningStatus,
      });
    },
  });

  return { cancelBookmark: mutation.mutate };
}
