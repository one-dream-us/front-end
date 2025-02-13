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
                썸네일
              </th>
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
              <tr key={content.id} className='cursor-pointer hover:bg-gray-50'>
                <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
                  {content?.thumbnailUrl ? (
                    <img
                      className='h-12 min-w-20 rounded object-cover'
                      src={content.thumbnailUrl}
                      alt='thumbnail'
                    />
                  ) : (
                    <div className='flex h-12 w-20 items-center justify-center rounded bg-gray-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6 text-gray-400'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                        />
                      </svg>
                    </div>
                  )}
                </td>
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
                썸네일
              </th>
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
              <tr key={content.id} className='cursor-pointer hover:bg-gray-50'>
                <td className='whitespace-nowrap px-6 py-4'>
                  {content?.newsRequest?.thumbnailUrl ? (
                    <img
                      src={content?.newsRequest?.thumbnailUrl}
                      alt={content.id + ''}
                      className='h-12 min-w-20 rounded object-cover'
                    />
                  ) : (
                    <div className='flex h-12 w-20 items-center justify-center rounded bg-gray-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6 text-gray-400'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                        />
                      </svg>
                    </div>
                  )}
                </td>
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
          </tbody>
        </>
      );
    }
  };
  return <table className='min-w-full divide-y divide-gray-200'>{renderTable()}</table>;
}
