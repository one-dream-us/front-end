import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import content_end from '@/assets/this_is_money_imgs/img_png/coming_soon_310_360.png';

export default function Observer({
  fetchNext,
  hasNext,
}: {
  fetchNext: () => Promise<InfiniteQueryObserverResult>;
  hasNext: boolean;
}) {
  const { ref, inView } = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (inView) {
      fetchNext();
    }
  }, [inView]);
  return (
    <>
      {hasNext ? (
        <div>
          <span ref={ref}></span>
        </div>
      ) : (
        <div className=''>
          <h1 className='mt-[110px] text-center text-sm font-medium md:mt-[130px] md:text-lg'>
            곧 새로운 콘텐츠가 업로드 돼요!
          </h1>
          <img
            src={content_end}
            className='m-auto mb-[40px] mt-[32px] h-[150px] w-[130px] md:h-[180px] md:w-[155px]'
            alt='content end'
          />
        </div>
      )}
    </>
  );
}
