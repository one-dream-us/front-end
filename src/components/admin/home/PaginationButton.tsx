import { ADMIN_UPLOAD_LIST_PAGE_SIZE } from '@/constants/constants';
import useUploadList from '@/hooks/admin/useUploadList';
import pageState from '@/store/admin/adminHome/pageState';
import { useStore } from 'zustand';

export default function PaginationButtonContainer() {
  const { page, handleNextPage, handlePrevPage } = useStore(pageState);

  const { data } = useUploadList(page, ADMIN_UPLOAD_LIST_PAGE_SIZE);

  const lastPage = Math.ceil((data?.totalElements as number) / ADMIN_UPLOAD_LIST_PAGE_SIZE);

  const isFirstPage = page === 1;

  const isLastPage = page >= lastPage;

  return (
    <PaginationButton
      currentPage={page}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      lastPage={lastPage}
    />
  );
}

const PaginationButton = ({
  isFirstPage,
  currentPage,
  isLastPage,
  lastPage,
  handleNextPage,
  handlePrevPage,
}: {
  isFirstPage: boolean;
  currentPage: number;
  isLastPage: boolean;
  lastPage: number;
  handleNextPage: (lastPage: number) => void;
  handlePrevPage: () => void;
}) => {
  return (
    <div className='flex items-center justify-between border-t border-gray-200 px-6 py-3'>
      <div className='flex items-center'>
        <button
          onClick={handlePrevPage}
          disabled={isFirstPage}
          className={`mr-2 rounded-lg p-2 ${isFirstPage ? 'cursor-not-allowed text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
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
          페이지 {currentPage} / {lastPage === 0 ? 1 : lastPage}
        </span>
        <button
          onClick={() => handleNextPage(lastPage)}
          disabled={isLastPage}
          className={`ml-2 rounded-lg p-2 ${isLastPage ? 'cursor-not-allowed text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
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
};
