import { quizApi } from '@/services/quizApi';
import quizCompleteStore from '@/store/quiz/quizCompleteStore';
import { IQuestionResult } from '@/types/interface';
import { useMutation } from '@tanstack/react-query';
import { useStore } from 'zustand';

const useSubmitQuiz = () => {
  const { setResult } = useStore(quizCompleteStore);
  const { mutate: submitQuiz } = useMutation({
    mutationFn: async (results: IQuestionResult[]) => await quizApi.postQuizResults(results),
    onSuccess: (data) => {
      // useStore -> 새로운 상태 저장, 결과 페이지에서 렌더링
      setResult(data);
    },
  });
  return submitQuiz;
};

export default useSubmitQuiz;
