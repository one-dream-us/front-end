import { useQuery } from '@tanstack/react-query';
import DashboardApi from '@/services/DashboardApi';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useCheckFirstQuiz() {
  const { isLogin } = useLoginStore();
  const { data } = useQuery({
    queryKey: ['checkFirstQuiz'],
    queryFn: DashboardApi.checkFirstQuiz,
    enabled: isLogin,
  });

  const isFirstQuizAttempt = data?.isFirstQuizAttempt;

  return { isFirstQuizAttempt: isLogin ? isFirstQuizAttempt : false };
}
