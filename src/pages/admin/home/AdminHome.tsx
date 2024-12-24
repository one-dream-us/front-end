import ContentDetail from '@/components/admin/home/contentDetail/ContentDetail';
import ContentTable from '@/components/admin/home/ContentTable';
import PaginationButton from '@/components/admin/home/PaginationButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
  const [contentType, setContentType] = useState<'작성완료' | '작성중'>('작성완료');
  const [data] = useState([1, 2, 3, 4, 5]);
  const [detail, setDetail] = useState<number | null>(null);

  return (
    <div className='mt-[40px]'>
      {' '}
      <div className='m-auto max-w-[1182px]'>
        <div className='mb-[20px] flex items-center justify-between'>
          <h1 className='text-[20px] font-bold leading-normal tracking-[-2%] text-custom-black-light'>
            콘텐츠 홈
          </h1>
          <Link to={'/admin/link-upload'}>
            <button className='flex h-[28px] w-[150px] items-center justify-center rounded-[1000px] border border-custom-gray-200 px-[10px] py-[4px] text-[12px] font-medium leading-normal tracking-[-2%] text-custom-gray-500 hover:border-custom-gray-300 hover:text-custom-gray-700'>
              <span className='mr-[6px]'>신규 콘텐츠 등록하기</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </button>
          </Link>
        </div>

        <div className='mb-[28px] flex items-center justify-between'>
          <button
            onClick={() => setContentType('작성완료')}
            className={`flex h-[44px] w-[591px] items-center justify-center text-[14px] font-bold leading-170 tracking-[-2%] ${contentType === '작성완료' ? 'border-b-[0.7px] border-custom-black-light text-custom-black-light' : 'border-b-[0.5px] border-custom-gray-500 text-custom-gray-500'}`}
          >
            작성완료
          </button>
          <button
            onClick={() => setContentType('작성중')}
            className={`flex h-[44px] w-[591px] items-center justify-center text-[14px] font-bold leading-170 tracking-[-2%] ${contentType === '작성중' ? 'border-b-[0.7px] border-custom-black-light text-custom-black-light' : 'border-b-[0.5px] border-custom-gray-500 text-custom-gray-500'}`}
          >
            작성중
          </button>
        </div>

        <ContentTable detail={detail} data={data} handleButtonClick={setDetail} />

        <PaginationButton />
      </div>
      {/* 상세보기 */}
      {detail && <ContentDetail detail={detail} handleClose={() => setDetail(null)} />}
    </div>
  );
}
