import { missionApi } from '@/services/missionApi';
import { MissionStatus } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';

const useMissionStatus = (month: string) => {
  return useQuery<MissionStatus[]>({
    queryKey: ['missionStatus', month],
    queryFn: () =>
      missionApi.getMissionStatus('month', month).then((res) => res.data.dailyMissionDetails),
  });
};
export default useMissionStatus;
