import QUERY_KEYS from '@/constants/queryKeys';
import bookmarkApi from '@/services/bookmarkApi';
import { BookMark } from '@/types/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveBookmark = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (bookmarkId: number) => await bookmarkApi.removeBookmark(bookmarkId),
    onMutate: async (bookmarkId) => {
      const start = performance.now();
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.getBookmarkList });

      const prevData = queryClient.getQueryData(QUERY_KEYS.getBookmarkList);

      queryClient.setQueryData(QUERY_KEYS.getBookmarkList, (oldData: BookMark) => {
        const res: BookMark = {
          bookmarkCount: oldData.bookmarkCount - 1,
          bookmarkList: oldData.bookmarkList.filter((item) => item.bookmarkId !== bookmarkId),
        };

        return res;
      });
      const end = performance.now();
      console.log(`optimistic update 삭제 ui 업데이트에 걸린 시간 : ${(end - start).toFixed(2)}ms`);
      return { prevData };
    },
    onError: (_e, _v, context) =>
      queryClient.setQueryData(QUERY_KEYS.getBookmarkList, context?.prevData),
    onSettled: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getBookmarkList }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.learningStatus }),
  });

  return mutate;
};
export default useRemoveBookmark;

export const useRemoveBookmarkNormal = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (bookmarkId: number) => {
      const start = performance.now();
      const res = await bookmarkApi.removeBookmark(bookmarkId);
      const end = performance.now();
      console.log(`일반 삭제 UI 업데이트 시간 : ${end - start}ms`);
      return res;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getBookmarkList }),
  });
  return mutate;
};
