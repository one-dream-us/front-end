import { ADMIN_UPLOAD_LIST_PAGE_SIZE } from '@/constants/constants';
import useUploadList from '@/hooks/admin/useUploadList';
import currentTabState from '@/store/admin/adminHome/currentTabState';
import pageState from '@/store/admin/adminHome/pageState';
import { ScheduledListContent, UploadedListContent } from '@/types/interface';
import { useStore } from 'zustand';

export default function ContentTable() {
  const { page } = useStore(pageState);
  const { currentTab } = useStore(currentTabState);

  const { isLoading, data } = useUploadList(page, ADMIN_UPLOAD_LIST_PAGE_SIZE);

  if (isLoading || !data) return <h1>loading...</h1>;
  const renderTable = () => {
    if (currentTab === 'uploaded') {
      const res = data?.content as UploadedListContent[];
      console.log(res);

      if (isLoading || !res) return <h1>loading...</h1>;
      return (
        <>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                제목
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                뉴스사
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                업로드 날짜
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {res?.map((content) => (
              <tr key={content.id} className='hover:bg-gray-50'>
                <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
                  {content.title}
                </td>
                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                  {content.newsAgency}
                </td>
                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                  {content.createdAt.split('T')[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </>
      );
    }
    if (currentTab === 'scheduled') {
      const res = data?.content as ScheduledListContent[];
      console.log(res);

      if (isLoading || !res) return <h1>loading...</h1>;
      return (
        <>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                제목
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                뉴스사
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                업로드 날짜
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {res?.map((content) => (
              <tr key={content.id} className='hover:bg-gray-50'>
                <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
                  {content?.newsRequest?.title || ''}
                </td>
                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                  {content?.newsRequest?.newsAgency || ''}
                </td>
                <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                  {content?.scheduledAt?.split('T')[0] || ''}
                </td>
              </tr>
            ))}
            {/* {JSON.stringify(res[0].newsRequest?.title)} */}
          </tbody>
        </>
      );
    }
  };
  return <table className='min-w-full divide-y divide-gray-200'>{renderTable()}</table>;
}
