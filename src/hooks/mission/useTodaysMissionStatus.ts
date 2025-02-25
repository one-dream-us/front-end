import QUERY_KEYS from '@/constants/queryKeys';
import { missionApi } from '@/services/missionApi';
import { useQuery } from '@tanstack/react-query';
import { useAuthCheckQuery } from '../auth/useAuthCheckQuery';

const useTodaysMissionStatus = () => {
  const today = new Date();
  const queryString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getDate()}`;
  const { data: islogin } = useAuthCheckQuery();
  const res = useQuery<{ quiz: boolean; news: boolean }>({
    queryKey: [QUERY_KEYS.todaysMission],
    queryFn: () => {
      return missionApi.getMissionStatus('date', queryString).then((res) => res.data);
    },
    enabled: islogin,
  });
  return res;
};

export default useTodaysMissionStatus;
