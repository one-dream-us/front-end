import { FormEvent, MouseEvent, useState } from 'react';
import FormSubmitButtons from './FormSubmitButtons';
import { useUploadFormStore } from '@/store/admin/uploadFormState';
import LabelInput from './LabelInput';
import NewsContentForm from './NewsContentForm';

const UploadForm = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  console.log('rerender');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadForm = useUploadFormStore.getState().uploadForm;

    console.log(uploadForm);
    console.log('바로 업로드');
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full space-y-6 p-6'>
      <div className='space-y-4'>
        <LabelInput id='title' label='제목' placeholder='제목을 입력하세요' />
        <LabelInput id='newsCompany' label='뉴스사' placeholder='뉴스사를 입력하세요' />
        <LabelInput
          id='newsLink'
          label='뉴스 원문 링크'
          placeholder='뉴스 원문 링크를 입력하세요'
        />
        <LabelInput id='imgLink' label='이미지 링크' placeholder='이미지 링크를 입력하세요' />

        <div className='space-y-4'>
          <NewsContentForm />
          <NewsContentForm />
        </div>

        {showSchedule && <SelectDateForm />}
      </div>
      <FormSubmitButtons
        showSchedule={showSchedule}
        handleShowSchedule={() => setShowSchedule((prev) => !prev)}
      />
    </form>
  );
};

export default UploadForm;

const SelectDateForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const uploadForm = useUploadFormStore((s) => s.uploadForm);
  const handleScheduledSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(date);
    console.log(time);

    console.log(uploadForm);
  };
  return (
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
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type='time'
            className='w-full rounded-md border p-2'
          />
        </div>
      </div>
      <button
        onClick={handleScheduledSubmit}
        className='mt-2 flex w-full items-center justify-center gap-2 rounded-md border bg-blue-400 px-4 py-3 transition-colors'
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
  );
};

{
  /* <div>
          <label htmlFor='title' className='mb-1 block text-sm font-medium text-gray-700'>
            제목
          </label>
          <input
            ref={titleRef}
            type='text'
            id='title'
            className='w-full rounded-md border p-2'
            placeholder='제목을 입력하세요'
          />
        </div>
        <div>
          <label htmlFor='newsCompany' className='mb-1 block text-sm font-medium text-gray-700'>
            뉴스사
          </label>
          <input
            ref={newsCompanyRef}
            type='text'
            id='newsCompany'
            className='w-full rounded-md border p-2'
            placeholder='뉴스사를 입력하세요'
          />
        </div>
        <div>
          <label htmlFor='newsLink' className='mb-1 block text-sm font-medium text-gray-700'>
            뉴스 원문 링크
          </label>
          <input
            ref={newsLinkRef}
            id='newsLink'
            className='w-full rounded-md border p-2'
            placeholder='뉴스 원문 링크를 입력하세요'
          />
        </div>
        <div>
          <label htmlFor='imgLink' className='mb-1 block text-sm font-medium text-gray-700'>
            이미지 링크
          </label>
          <input
            ref={imgLinkRef}
            id='imgLink'
            className='w-full rounded-md border p-2'
            placeholder='이미지 링크를 입력하세요'
          />
        </div> */
}
