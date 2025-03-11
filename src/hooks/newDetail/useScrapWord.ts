import QUERY_KEYS from '@/constants/queryKeys';
import newsApi from '@/services/newsApi';
import { IScrapList } from '@/types/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useScrapWord = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await newsApi.postScrapWord(wordId),
    onMutate: async (data) => {
      const start = performance.now();
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.getScrapList });

      const prevData = queryClient.getQueryData(QUERY_KEYS.getScrapList);

      queryClient.setQueryData(QUERY_KEYS.getScrapList, (oldData: IScrapList) => {
        return {
          ...oldData,
          dictionaryScraps: [...oldData.dictionaryScraps, { dictionaryId: data }],
        } as IScrapList;
      });
      const end = performance.now();
      console.log(
        `optimistic update 스크랩 ui 업데이트에 걸린 시간 : ${(end - start).toFixed(2)}ms`,
      );
      return { prevData };
    },
    onError: (_e, _newData, context) =>
      queryClient.setQueryData(QUERY_KEYS.getScrapList, context?.prevData),
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getScrapList }),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.learningStatus }),
  });
  return mutate;
};
export default useScrapWord;

export const useScrapWordNotOptimistic = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => {
      const start = performance.now();
      const res = await newsApi.postScrapWord(wordId);
      const end = performance.now();
      console.log(`일반 업데이트 스크랩 ui 업데이트에 걸린 시간 : ${(end - start).toFixed(2)}ms`);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getScrapList });
    },
  });
  return mutate;
};
