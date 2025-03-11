import ContentTable from '@/components/admin/home/ContentTable';
import NavigateTabButton from '@/components/admin/home/NavigateTabButton';
import PaginationButton from '@/components/admin/home/PaginationButton';

export default function AdminHome() {
  return (
    <div style={{ height: 'calc(100vh - 80px)' }} className='w-full bg-gray-50 p-6'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-6 text-2xl font-semibold text-gray-800'>콘텐츠 관리</h1>

        <NavigateTabButton />
        <div className='overflow-x-auto rounded-lg bg-white shadow'>
          <ContentTable />
          <PaginationButton />
        </div>
      </div>
    </div>
  );
}
