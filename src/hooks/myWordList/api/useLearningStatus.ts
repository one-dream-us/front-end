import wordListAPi from '@/services/wordListApi';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function useLearningStatus() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['learningStatus'],
    queryFn: wordListAPi.getLearningStatus,
  });
  useEffect(() => {
    refetch();
  });
  const username = data?.username ?? '';
  const totalScrap = data?.totalScrap ?? 0;
  const totalGraduation = data?.totalGraduation ?? 0;
  const totalKeyNote = data?.totalKeyNote ?? 0;
  const accuracyRate = data?.accuracyRate ?? 0;

  return {
    username,
    totalScrap,
    totalGraduation,
    totalKeyNote,
    accuracyRate,
    refetch,
    isLoading,
  };
}
