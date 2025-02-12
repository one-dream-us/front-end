import { AdminUploadListResult, CurrentTabType } from '@/types/interface';
import adminApi from '@/services/adminApi';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const useUploadList = (currentTab: CurrentTabType, page: number, size: number) => {
  if (currentTab === 'scheduled') {
    return useGetSheduledUploadList(page, size);
  } else {
    return useGetUploadedList(page, size);
  }
};
export default useUploadList;

const useGetUploadedList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult>({
    queryKey: ['uploaded-list', page + '', size + ''],
    queryFn: async () => await adminApi.getUploadedList(page, size),
    placeholderData: keepPreviousData,
  });
};

const useGetSheduledUploadList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult>({
    queryKey: ['scheduled-upload-list', page + '', size + ''],
    queryFn: async () => await adminApi.getScheduledUploadList(page, size),
    placeholderData: keepPreviousData,
  });
};
