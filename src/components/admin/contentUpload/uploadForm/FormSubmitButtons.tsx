import adminState from '@/store/admin/adminState';
import { useStore } from 'zustand';

export default function FormSubmitButtons() {
  const { setShowSchedule, showSchedule } = useStore(adminState);
  return (
    <div className='flex gap-4'>
      <button
        type='submit'
        className='flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
          />
        </svg>
        즉시 업로드
      </button>
      <button
        type='button'
        onClick={() => setShowSchedule()}
        className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-3 transition-colors ${showSchedule ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
        예약 업로드 {showSchedule ? '닫기' : '열기'}
      </button>
    </div>
  );
}
