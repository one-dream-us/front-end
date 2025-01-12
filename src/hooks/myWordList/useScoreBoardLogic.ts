import { useLoginStore } from '@/store/useIsLoginStore';
import wordListAPi from '@/services/wordListApi';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function useScoreBoardLogic() {
  const navigate = useNavigate();
  const { isLogin } = useLoginStore((state) => state);
  const { data, error, refetch, isLoading } = useQuery({
    queryKey: ['learningStatus'],
    queryFn: wordListAPi.getLearningStatus,
    enabled: isLogin,
  });
  if (error) {
    const apiError = error as unknown as ApiError;
    if (apiError?.errorCode === 'NEED_LOGIN') {
      navigate('/login');
    }
  }
  const username = data?.username ?? '';
  const totalScrap = data?.totalScrap ?? 0;
  const totalGraduation = data?.totalGraduation ?? 0;
  const totalKeyNote = data?.totalKeyNote ?? 0;
  const accuracyRate = data?.accuracyRate ?? 0;

  return {
    username: isLogin ? username : '',
    totalScrap: isLogin ? totalScrap : 0,
    totalGraduation: isLogin ? totalGraduation : 0,
    totalKeyNote: isLogin ? totalKeyNote : 0,
    accuracyRate: isLogin ? accuracyRate : 0,
    refetch: isLogin ? refetch : async () => Promise.resolve(),
    isLoading: isLogin && isLoading,
  };
}
