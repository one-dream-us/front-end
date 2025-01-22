import QUERY_KEYS from '@/constants/queryKeys';
import newsApi from '@/services/newsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveScrapWord = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await newsApi.postRemoveScrapWord(wordId),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getScrapList });
    },
  });

  return mutate;
};
export default useRemoveScrapWord;
