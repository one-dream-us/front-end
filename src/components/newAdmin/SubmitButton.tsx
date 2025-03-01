import { UseUploadTypeStore } from '@/store/newAdmin/useFormStore';

export default function SubmitButton({
  isSchedule,
  toggleSchedule,
  setUploadType,
}: {
  isSchedule: boolean;
  toggleSchedule: () => void;
  setUploadType: UseUploadTypeStore['setUploadType'];
}) {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <button
        type='submit'
        onClick={() => setUploadType('immediately')}
        className='flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-sm text-white transition-colors hover:bg-blue-700 md:text-base'
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
        type='submit'
        onClick={() => setUploadType('draft')}
        className='flex flex-1 items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-3 text-sm text-white transition-colors hover:bg-purple-700 md:text-base'
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
            d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
          />
        </svg>
        임시저장
      </button>
      <button
        type='button'
        onClick={toggleSchedule}
        className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm transition-colors md:text-base ${isSchedule ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
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
        예약 업로드 {isSchedule ? '닫기' : '열기'}
      </button>
    </div>
  );
}
