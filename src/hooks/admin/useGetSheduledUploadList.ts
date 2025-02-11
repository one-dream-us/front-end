import adminApi from '@/services/adminApi';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const useGetSheduledUploadList = (page: number, size: number = 10) => {
  return useQuery({
    queryKey: ['scheduled-upload-list', page + '', size + ''],
    queryFn: async () => await adminApi.getScheduledUploadList(page, size),
    placeholderData: keepPreviousData,
  });
};
export default useGetSheduledUploadList;
