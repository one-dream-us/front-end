import QUERY_KEYS from '@/constants/queryKeys';
import newsApi from '@/services/newsApi';
import { IScrapList } from '@/types/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useScrapWord = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await newsApi.postScrapWord(wordId),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.getScrapList });

      const prevData = queryClient.getQueryData(QUERY_KEYS.getScrapList);

      queryClient.setQueryData(QUERY_KEYS.getScrapList, (oldData: IScrapList) => {
        return {
          ...oldData,
          dictionaryScraps: [...oldData.dictionaryScraps, { dictionaryId: data }],
        } as IScrapList;
      });
      return { prevData };
    },
    onError: (_e, _newData, context) =>
      queryClient.setQueryData(QUERY_KEYS.getScrapList, context?.prevData),
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getScrapList }),
  });
  return mutate;
};
export default useScrapWord;
