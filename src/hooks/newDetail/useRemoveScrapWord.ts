import QUERY_KEYS from '@/constants/queryKeys';
import newsApi from '@/services/newsApi';
import { IScrapList } from '@/types/interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveScrapWord = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (scrapId: number) => await newsApi.postRemoveScrapWord(scrapId),
    onMutate: async (scrapId) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.getScrapList });

      const prevData = queryClient.getQueryData(QUERY_KEYS.getScrapList);

      queryClient.setQueryData(QUERY_KEYS.getScrapList, (oldData: IScrapList) => {
        return oldData.dictionaryScraps.filter((item) => item.scrapId !== scrapId);
      });

      return { prevData };
    },
    onError(_e, _v, context) {
      return queryClient.setQueryData(QUERY_KEYS.getScrapList, context?.prevData);
    },
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getScrapList }),
  });

  return mutate;
};
export default useRemoveScrapWord;
