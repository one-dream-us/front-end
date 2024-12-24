import validateLink from '@/utils/admin/validateLink';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function LinkForm() {
  const [link, setLink] = useState('');
  const [isValidate, setIsValidate] = useState<null | boolean>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setLink(value);
    const isValidate = validateLink(value);
    if (isValidate) setIsValidate(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidate = validateLink(link);

    if (isValidate) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='relative w-full'>
        <input
          value={link}
          onChange={handleInputChange}
          placeholder='링크 형식 : https://www.youtube.com/watch?v=XXXXXXXXXXX'
          type='text'
          className={`${isValidate === null ? 'text-custom-gray-400' : isValidate ? 'text-custom-gray-dark' : 'border-[#FF5050] text-[#FF5050]'} h-[52px] w-full rounded-[20px] border border-custom-gray-200 px-[22px] text-[14px] leading-normal tracking-[-2%] hover:border-custom-gray-300`}
        />
        <button
          className={`absolute bottom-0 right-[12px] top-0 m-auto flex h-[40px] w-[40px] items-center justify-center rounded-full ${isValidate ? 'bg-custom-gray-dark text-custom-green-money transition-all duration-200 hover:bg-opacity-80' : 'bg-view-bg text-view'}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
            />
          </svg>
        </button>
      </form>
      {isValidate !== null && isValidate === false && (
        <div className='mt-[16px] text-center text-[14px] leading-normal tracking-[-2%] text-[#FF5050]'>
          <span>잘못된 양식의 링크입니다.</span>
        </div>
      )}
    </>
  );
}
