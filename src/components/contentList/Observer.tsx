import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
      {hasNext && (
        <div>
          <span ref={ref}></span>
        </div>
      )}
    </>
  );
}
