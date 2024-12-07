import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import contentLoaded from '@/assets/this_is_money_imgs/img_png/content_loaded.png';

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
        <img className='m-auto my-[60px]' src={contentLoaded} alt='content loaded' />
      )}
    </>
  );
}
