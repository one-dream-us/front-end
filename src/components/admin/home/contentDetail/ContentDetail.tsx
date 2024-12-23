import { Link } from 'react-router-dom';
import ScriptSummary from './ScriptSummary';
import Tags from './Tags';
import Scripts from './Scripts';
import Dictionaries from './Dictionaries';

export default function ContentDetail({
  detail,
  handleClose,
}: {
  detail: number;
  handleClose: () => void;
}) {
  return (
    <div className='w-full bg-view'>
      <div className='relative m-auto max-w-[1182px] pt-[36px]'>
        <button onClick={handleClose} className='absolute right-0 top-[20px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 text-custom-gray-700'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </button>
        <span className='mb-[4px] text-[14px] font-medium text-custom-gray-500'>
          content id {detail}
        </span>

        <div className='mb-[32px] flex items-center justify-between'>
          <h1 className='text-[18px] font-bold text-custom-gray-dark'>title {detail}</h1>
          <h1 className='mr-[117px] text-[16px] font-bold text-custom-gray-dark'>
            채널 명 <span className='font-medium'>오늘은 투자왕 - 김단테</span>
          </h1>
        </div>

        <div className='mb-[56px] flex items-center justify-between'>
          <ScriptSummary />
          <Tags />
        </div>

        <Scripts />

        <Dictionaries />

        <Link to={'/'}>
          <button className='my-[30px] ml-auto flex h-[44px] w-[278px] items-center justify-center rounded-[4px] bg-custom-gray-dark text-[12px] font-medium leading-170 text-custom-green-money hover:bg-custom-gray-700'>
            콘텐츠 수정하기
          </button>
        </Link>
      </div>
    </div>
  );
}
