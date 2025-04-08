import currentTabState from '@/store/admin/adminHome/currentTabState';
import pageState from '@/store/admin/adminHome/pageState';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from 'zustand';

const useUpdateAdminParams = () => {
  const { currentTab } = useStore(currentTabState);
  const { page } = useStore(pageState);
  const [_searchParams, setSearchParams] = useSearchParams({
    page: page + '',
    status: currentTab,
  });

  useEffect(() => {
    setSearchParams({
      page: page + '',
      status: currentTab,
    });
  }, [currentTab, page, setSearchParams]);
};
export default useUpdateAdminParams;
