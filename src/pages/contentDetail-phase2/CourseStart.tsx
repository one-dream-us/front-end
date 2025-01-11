import Title from '@/components/course/common/Title';
import { contentdetailList as data } from '@/mocks/data/contentdetail/contentDetailList';
import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import { Link } from 'react-router-dom';

export default function CourseStart() {
  const { company, desc, title, keywords } = data;

  return (
    <div className='left-0 top-0 w-full items-center justify-center md:absolute md:flex md:h-screen'>
      <div className='m-auto w-[341px] desktop:w-[440px]'>
        {/* mt-[138px] */}
        <div className='m-auto mb-[24px] h-[51px] w-[176px] text-center'>
          <Title main='오늘 배울 단어예요!' sub='오늘의 학습' />
        </div>

        {/* 뉴스 기사 */}
        <div className='mb-[182px] h-[276px] w-full rounded-[10px] bg-white p-[24px] md:mb-[24px] desktop:h-[253px]'>
          <span className='mb-2 text-[12px] leading-[120%] tracking-[0px] text-custom-gray-400'>
            {company}
          </span>
          <h1 className='mb-2 text-[20px] font-bold text-custom-gray-dark'>{title}</h1>
          <div
            className='text-[16px] tracking-[-0.16px] text-custom-gray-dark'
            dangerouslySetInnerHTML={{
              __html: highlightedDesc(desc, keywords, 'highlight_underline'),
            }}
          />
        </div>
        <Link to={'/course'}>
          <button className='h-[44px] w-full rounded-[10px] bg-custom-gray-dark text-[14px] font-bold text-custom-green-money transition-all duration-200 hover:bg-hover-80'>
            학습 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}
