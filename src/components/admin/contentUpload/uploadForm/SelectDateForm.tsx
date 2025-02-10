import adminState from '@/store/admin/adminState';
import { useUploadFormStore } from '@/store/admin/uploadFormState';
import { MouseEvent, useState } from 'react';
import { useStore } from 'zustand';

export default function SelectDateForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { showSchedule } = useStore(adminState);

  const handleScheduledSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(date);
    console.log(time);

    const uploadForm = useUploadFormStore.getState().uploadForm;
    console.log(uploadForm);

    alert(`${date} 06:00AM 예약 완료`);
  };
  return (
    <>
      {showSchedule && (
        <div className='rounded-md border bg-gray-50 p-4'>
          <div className='flex items-center gap-4'>
            <div className='flex-1'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>예약 날짜</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type='date'
                className='w-full rounded-md border p-2'
              />
            </div>
            <div className='flex-1'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>예약 시간</label>
              <input
                disabled
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type='time'
                className='w-full rounded-md border p-2'
              />
            </div>
          </div>
          <button
            disabled={!date}
            onClick={handleScheduledSubmit}
            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-md border bg-blue-400 px-4 py-3 transition-colors ${date ? 'bg-green-600 text-white hover:bg-green-700' : 'hover:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-700'}`}
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
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
              />
            </svg>
            예약 시간에 업로드
          </button>
        </div>
      )}
    </>
  );
}
