import { useQuery } from '@tanstack/react-query';
import { quizApi } from '@/services/quizApi';
import QUERY_KEYS from '@/constants/queryKeys';

export default function useIsFirstQuiz() {
  const { data, isLoading: isCheckFirstLoading } = useQuery({
    queryKey: QUERY_KEYS.checkFirstQuiz,
    queryFn: () => quizApi.checkIsFirstQuiz(),
  });
  const isFirstQuiz = data?.isFirstQuizAttempt ?? false;

  return { isFirstQuiz, isCheckFirstLoading };
}
