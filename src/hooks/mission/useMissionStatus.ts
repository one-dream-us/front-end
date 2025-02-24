import { missionApi } from '@/services/missionApi';
import { MissionStatus } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';

const useMissionStatus = (month: string) => {
  return useQuery<MissionStatus[]>({
    queryKey: ['missionStatus', month],
    queryFn: async () => await missionApi.getMissionStatus(month),
  });
};
export default useMissionStatus;
