import QUERY_KEYS from '@/constants/queryKeys';
import bookmarkApi from '@/services/bookmarkApi';
import { BookMark } from '@/types/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useBookmarkWord = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await bookmarkApi.addBookmark(wordId),
    onMutate: async (data) => {
      const start = performance.now();
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.getBookmarkList });

      const prevData = queryClient.getQueryData(QUERY_KEYS.getBookmarkList);

      queryClient.setQueryData(QUERY_KEYS.getBookmarkList, (oldData: BookMark) => {
        return {
          bookmarkCount: oldData.bookmarkCount + 1,
          bookmarkList: [...oldData.bookmarkList, { dictionary: { id: data } }],
        } as BookMark;
      });
      const end = performance.now();
      console.log(
        `optimistic update 스크랩 ui 업데이트에 걸린 시간 : ${(end - start).toFixed(2)}ms`,
      );
      return { prevData };
    },
    onError: (_e, _newData, context) =>
      queryClient.setQueryData(QUERY_KEYS.getBookmarkList, context?.prevData),
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getBookmarkList }),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.learningStatus }),
  });
  return mutate;
};
export default useBookmarkWord;

export const useBookmarkWordNormal = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => {
      const start = performance.now();
      const res = await bookmarkApi.addBookmark(wordId);
      const end = performance.now();
      console.log(`일반 업데이트 스크랩 ui 업데이트에 걸린 시간 : ${(end - start).toFixed(2)}ms`);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getBookmarkList });
    },
  });
  return mutate;
};
