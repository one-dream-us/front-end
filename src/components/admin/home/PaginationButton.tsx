import { ADMIN_UPLOAD_LIST_PAGE_SIZE } from '@/constants/constants';
import useUploadList from '@/hooks/admin/useUploadList';
import pageState from '@/store/admin/adminHome/pageState';
import { useStore } from 'zustand';

export default function PaginationButton() {
  const { page, handleNextPage, handlePrevPage } = useStore(pageState);
  const { data } = useUploadList(page, ADMIN_UPLOAD_LIST_PAGE_SIZE);

  const lastPage = Math.ceil((data?.totalElements as number) / ADMIN_UPLOAD_LIST_PAGE_SIZE);
  return (
    <div className='flex items-center justify-between border-t border-gray-200 px-6 py-3'>
      <div className='flex items-center'>
        <button
          onClick={handlePrevPage}
          disabled={page === 0}
          className={`mr-2 rounded-lg p-2 ${page === 0 ? 'cursor-not-allowed text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </button>
        <span className='text-sm text-gray-700'>
          페이지 {page + 1} / {lastPage === 0 ? 1 : lastPage}
        </span>
        <button
          onClick={() => handleNextPage(lastPage)}
          disabled={page + 1 === lastPage}
          className={`ml-2 rounded-lg p-2 ${page === lastPage - 1 ? 'cursor-not-allowed text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>
    </div>
  );
}
