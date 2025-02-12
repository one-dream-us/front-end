import {
  AdminUploadListResult,
  ScheduledListContent,
  UploadedListContent,
} from '@/types/interface';
import adminApi from '@/services/adminApi';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useStore } from 'zustand';
import currentTabState from '@/store/admin/adminHome/currentTabState';

const useUploadList = (page: number, size: number) => {
  const { currentTab } = useStore(currentTabState);

  if (currentTab === 'scheduled') {
    return useGetSheduledUploadList(page, size);
  } else {
    return useGetUploadedList(page, size);
  }
};
export default useUploadList;

const useGetUploadedList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult<UploadedListContent>>({
    queryKey: ['uploaded-list', page + '', size + ''],
    queryFn: async () => await adminApi.getUploadedList(page, size),
    placeholderData: keepPreviousData,
  });
};

const useGetSheduledUploadList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult<ScheduledListContent>>({
    queryKey: ['scheduled-upload-list', page + '', size + ''],
    queryFn: async () => await adminApi.getScheduledUploadList(page, size),
    placeholderData: keepPreviousData,
  });
};
