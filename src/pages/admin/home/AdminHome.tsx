import ContentTableContainer from '@/components/admin/home/contentTable/ContentTable';
import NavigateTabButtonContainer from '@/components/admin/home/navigateTab/NavigateTabButton';
import PaginationButtonContainer from '@/components/admin/home/pagination/PaginationButton';
import useUpdateAdminParams from '@/hooks/admin/useAdminListParams';

export default function AdminHome() {
  useUpdateAdminParams();
  return (
    <div
      style={{ height: 'calc(100vh - 80px)' }}
      className='admin-home-container w-full bg-gray-50 p-6'
    >
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-6 text-2xl font-semibold text-gray-800'>콘텐츠 관리</h1>

        <NavigateTabButtonContainer />
        <div className='overflow-x-auto rounded-lg bg-white shadow'>
          <ContentTableContainer />
          <PaginationButtonContainer />
        </div>
      </div>
    </div>
  );
}
