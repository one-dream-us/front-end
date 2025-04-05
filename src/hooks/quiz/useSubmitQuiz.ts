import { NORMAL_QUIZ_RESULT_KEY, RANDOM_QUIZ_RESULT_KEY } from '@/constants/constants';
import { quizApi } from '@/services/quizApi';
import quizStore from '@/store/quiz/quizStore';
import { IQuestionResult } from '@/types/interface';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';
import { useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';

const useSubmitQuiz = () => {
  const { quizType } = useStore(quizStore);
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: submitQuiz } = useMutation({
    mutationFn: async (results: IQuestionResult[]) => await quizApi.postQuizResults(results),
    onSuccess: (data) => {
      if (!quizType) {
        return alert('다시 시도해주세요.');
      }
      if (quizType === 'normal') {
        localStorage.setItem(NORMAL_QUIZ_RESULT_KEY, JSON.stringify(data));
      } else if (quizType === 'random') {
        localStorage.setItem(RANDOM_QUIZ_RESULT_KEY, JSON.stringify(data));
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.checkFirstQuiz });
      }

      navigate('/quiz-loading');
    },
  });
  return submitQuiz;
};

export default useSubmitQuiz;
