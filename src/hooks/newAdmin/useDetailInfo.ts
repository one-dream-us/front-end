import adminApi from '@/services/adminApi';
import { AdminContentDetailType, CurrentTabType } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';

const useDetailInfo = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const status = searchParams.get('status') as CurrentTabType;

  const { data, isLoading, isError } = useQuery<AdminContentDetailType>({
    queryKey: ['admin-detail', id, status],
    queryFn: async () => {
      if (status === 'uploaded') {
        return await adminApi.getUploadedDetailInfo(Number(id));
      } else if (status === 'scheduled') {
        return await adminApi.getScheduledDetailInfo(Number(id));
      } else if (status === 'draft') {
        return await adminApi.getDraftDetailInfo(Number(id));
      }
    },
  });

  return { data, isLoading, isError, id, status };
};
export default useDetailInfo;
