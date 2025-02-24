import QUERY_KEYS from '@/constants/queryKeys';
import { missionApi } from '@/services/missionApi';
import { useQuery } from '@tanstack/react-query';

const useTodaysMissionStatus = () => {
  const today = new Date();
  const queryString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getDate()}`;
  const res = useQuery({
    queryKey: [QUERY_KEYS.todaysMission],
    queryFn: () => {
      return missionApi.getMissionStatus('date', queryString).then((res) => res.data);
    },
  });
  return res;
};

export default useTodaysMissionStatus;
