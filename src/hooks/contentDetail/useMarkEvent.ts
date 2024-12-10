import { useEffect, useCallback } from 'react';

export default function useMarkEvent(handleClick: (event: MouseEvent) => void) {
  const memoizedHandleClick = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      handleClick(event);
    },
    [handleClick],
  );

  useEffect(() => {
    const marks = document.querySelectorAll('mark');

    marks.forEach((mark) => {
      mark.addEventListener('click', memoizedHandleClick);
    });

    return () => {
      marks.forEach((mark) => {
        mark.removeEventListener('click', memoizedHandleClick);
      });
    };
  }, [memoizedHandleClick]);
}
