import { useEffect } from 'react';

export default function useMarkEvent(handleClick: (event: MouseEvent) => void) {
  useEffect(() => {
    const marks = document.querySelectorAll('mark');
    marks.forEach((mark) => {
      mark.addEventListener('click', handleClick);
    });

    return () => {
      marks.forEach((mark) => {
        mark.removeEventListener('click', handleClick);
      });
    };
  }, [handleClick]);
}
