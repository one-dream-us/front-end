import newsApi from '@/services/newsApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRemoveScrapWord = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await newsApi.postRemoveScrapWord(wordId),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['myScrapList'] });
    },
  });

  return mutate;
};
export default useRemoveScrapWord;
