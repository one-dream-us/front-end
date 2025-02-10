import { useState } from 'react';

export default function NewsContentForm({ id }: { id: number }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div key={id + 1} className='rounded-md border bg-gray-50 p-4'>
      <h3 className='mb-3 flex items-center gap-2 font-medium'>
        <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>
          {id + 1}
        </span>
        <span>문장, 용어, 정의, 해설 입력</span>
      </h3>
      <div className='space-y-4'>
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>문장</label>
          <input
            id={id + ''}
            disabled={isDone}
            type='text'
            className='w-full rounded-md border p-2'
            placeholder={`문장 ${id + 1}을 입력하세요`}
          />
        </div>
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>용어</label>
          <div className='flex gap-2'>
            <input
              disabled={isDone}
              type='text'
              className='w-full rounded-md border p-2'
              placeholder={`용어 ${id + 1}을 입력하세요`}
            />
            <button
              disabled={isDone}
              type='button'
              className='flex shrink-0 items-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:bg-custom-gray-medium'
            >
              조회
            </button>
          </div>
        </div>
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>정의</label>
          <input
            disabled={isDone}
            type='text'
            className='w-full rounded-md border p-2'
            placeholder={`정의 ${id + 1}을 입력하세요`}
          />
        </div>
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>해설</label>
          <textarea
            disabled={isDone}
            className='w-full resize-none rounded-md border p-2'
            rows={3}
            placeholder={`해설 ${id + 1}을 입력하세요`}
          />
        </div>

        <button
          onClick={() => setIsDone((prev) => !prev)}
          type='button'
          className='flex w-full items-center justify-center gap-2 rounded-md bg-custom-gray-dark px-4 py-3 text-white transition-colors hover:bg-hover-80'
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
              d={
                isDone
                  ? 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  : 'm4.5 12.75 6 6 9-13.5'
              }
            />
          </svg>

          {isDone ? '수정' : '완료'}
        </button>
      </div>
    </div>
  );
}
