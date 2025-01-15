import newsApi from '@/services/newsApi';
import { useMutation } from '@tanstack/react-query';

const useScrapWord = () => {
  const { mutate } = useMutation({
    mutationFn: async (wordId: number) => await newsApi.postScrapWord(wordId),
  });
  return mutate;
};
export default useScrapWord;
