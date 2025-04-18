import {
  AdminUploadListResult,
  DraftListContent,
  ScheduledListContent,
  UploadedListContent,
} from '@/types/interface';
import adminApi from '@/services/adminApi';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useStore } from 'zustand';
import currentTabState from '@/store/admin/adminHome/currentTabState';

// const useUploadList = (page: number, size: number) => {
//   console.log('call', page);
//   const { currentTab } = useStore(currentTabState);

//   switch (currentTab) {
//     case 'scheduled':
//       return useGetSheduledUploadList(page, size);
//     case 'uploaded':
//       return useGetUploadedList(page, size);
//     case 'draft':
//       return useGetDraftUploadList(page, size);
//   }
// };
// export default useUploadList;

const useGetUploadedList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult<UploadedListContent>>({
    queryKey: ['uploaded-list', page + '', size + ''],
    queryFn: async () => await adminApi.getUploadedList(page - 1, size),
    placeholderData: keepPreviousData,
  });
};

const useGetSheduledUploadList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult<ScheduledListContent>>({
    queryKey: ['scheduled-upload-list', page + '', size + ''],
    queryFn: async () => await adminApi.getScheduledUploadList(page - 1, size),
    placeholderData: keepPreviousData,
  });
};

const useGetDraftUploadList = (page: number, size: number = 10) => {
  return useQuery<AdminUploadListResult<DraftListContent>>({
    queryKey: ['draft-upload-list', page + '', size + ''],
    queryFn: async () => await adminApi.getDraftList(page - 1, size),
    placeholderData: keepPreviousData,
  });
};

const uploadListQueryMap = {
  scheduled: useGetSheduledUploadList,
  draft: useGetDraftUploadList,
  uploaded: useGetUploadedList,
};

const useUploadList = (page: number, size: number) => {
  const { currentTab } = useStore(currentTabState);

  const queryFn = uploadListQueryMap[currentTab](page, size);

  return queryFn;
};
export default useUploadList;
