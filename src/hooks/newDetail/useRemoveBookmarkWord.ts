import QUERY_KEYS from '@/constants/queryKeys';
import bookmarkApi from '@/services/bookmarkApi';
import newsApi from '@/services/newsApi';
import { IScrapList } from '@/types/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveScrapWord = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await newsApi.postRemoveScrapWord(wordId),
    onMutate: async (wordId) => {
      const start = performance.now();
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.getScrapList });

      const prevData = queryClient.getQueryData(QUERY_KEYS.getScrapList);

      queryClient.setQueryData(QUERY_KEYS.getScrapList, (oldData: IScrapList) => {
        const res: IScrapList = {
          scrapCnt: oldData.scrapCnt - 1,
          dictionaryScraps: oldData.dictionaryScraps.filter((item) => item.scrapId !== wordId),
        };

        return res;
      });
      const end = performance.now();
      console.log(`optimistic update 삭제 ui 업데이트에 걸린 시간 : ${(end - start).toFixed(2)}ms`);
      return { prevData };
    },
    onError: (_e, _v, context) =>
      queryClient.setQueryData(QUERY_KEYS.getScrapList, context?.prevData),
    onSettled: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getScrapList }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.learningStatus }),
  });

  return mutate;
};
export default useRemoveScrapWord;

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
