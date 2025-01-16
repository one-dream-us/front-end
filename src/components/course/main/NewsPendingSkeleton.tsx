import Title from '../common/Title';

export default function NewsPendingSkeleton() {
  return (
    <div className='left-0 top-0 w-full items-center justify-center md:absolute md:flex md:h-screen'>
      <div className='m-auto w-[341px] desktop:w-[440px]'>
        {/* mt-[138px] */}
        <div className='m-auto mb-[24px] mt-[40px] h-[51px] min-w-[176px] text-center md:mt-0'>
          <Title main='오늘 배울 단어예요!' sub='오늘의 학습' />
        </div>

        {/* 뉴스 기사 */}
        <div className='skeleton mb-[182px] h-[300px] w-full rounded-[10px] p-[24px] md:mb-[24px] desktop:h-[253px]'></div>

        <button className='mb-[40px] h-[44px] w-full rounded-[10px] bg-custom-gray-dark text-[14px] font-bold text-custom-green-money transition-all duration-200 hover:bg-hover-80 md:mb-0'>
          학습 시작하기
        </button>
      </div>
    </div>
  );
}
