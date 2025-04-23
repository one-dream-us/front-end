import { ADMIN_UPLOAD_LIST_PAGE_SIZE } from '@/constants/constants';
import useUploadList from '@/hooks/admin/useUploadList';
import currentTabState from '@/store/admin/adminHome/currentTabState';
import pageState from '@/store/admin/adminHome/pageState';
import { DraftListContent, ScheduledListContent, UploadedListContent } from '@/types/interface';
import { useStore } from 'zustand';
import ContentTableItem from './ContentTableItem';

export default function ContentTableContainer() {
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
          {res?.map((content) => (
            <ContentTableItem
              key={content?.id}
              id={content?.id}
              thumbnailUrl={content?.thumbnailUrl}
              title={content?.title || ''}
              newsAgency={content?.newsAgency || ''}
              link={content?.link}
              createdAt={content?.createdAt?.split('T')[0]}
              currentTab={currentTab}
            />
          ))}
        </>
      );
    }
    if (currentTab === 'scheduled') {
      const res = data?.content as ScheduledListContent[];
      console.log(res);

      if (isLoading || !res) return <h1>loading...</h1>;
      return (
        <>
          {res?.map((content) => (
            <ContentTableItem
              key={content?.id}
              id={content?.id}
              thumbnailUrl={content?.newsContent?.thumbnailUrl}
              title={content?.newsContent?.title || ''}
              newsAgency={content?.newsContent?.newsAgency || ''}
              link={content?.newsContent?.originalLink}
              createdAt={content?.scheduledAt?.split('T')[0] || ''}
              currentTab={currentTab}
            />
          ))}
        </>
      );
    }
    if (currentTab === 'draft') {
      const res = data?.content as DraftListContent[];
      console.log(res);

      if (isLoading || !res) return <h1>loading...</h1>;
      return (
        <>
          {res?.map((content) => (
            <ContentTableItem
              key={content?.id}
              id={content?.id}
              thumbnailUrl={content?.newsContent?.thumbnailUrl}
              title={content?.newsContent?.title || ''}
              newsAgency={content?.newsContent?.newsAgency || ''}
              link={content?.newsContent?.originalLink}
              createdAt={content?.createdAt?.split('T')[0] || ''}
              currentTab={currentTab}
            />
          ))}
        </>
      );
    }
  };
  return <ContentTable renderTable={renderTable} />;
}

const adminTableColumnList = [
  { id: 1, text: '썸네일' },
  { id: 2, text: '제목' },
  { id: 3, text: '뉴스사' },
  { id: 4, text: '원본 링크' },
  { id: 5, text: '업로드 날짜' },
];
export const ContentTable = ({ renderTable }: { renderTable: () => JSX.Element | undefined }) => (
  <table className='admin-table min-w-full divide-y divide-gray-200'>
    <thead className='bg-gray-50'>
      <tr>
        {adminTableColumnList.map((col) => (
          <th
            key={col.id}
            className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
          >
            {col.text}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className='divide-y divide-gray-200 bg-white'>{renderTable()}</tbody>
  </table>
);
