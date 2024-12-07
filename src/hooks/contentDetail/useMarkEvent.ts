import { useEffect } from 'react';

export default function useMarkEvent(handleMouseOver: (event: MouseEvent) => void) {
  useEffect(() => {
    const marks = document.querySelectorAll('mark');
    marks.forEach((mark) => {
      mark.addEventListener('mouseenter', handleMouseOver);
    });

    return () => {
      marks.forEach((mark) => {
        mark.removeEventListener('mouseenter', handleMouseOver);
      });
    };
  }, [handleMouseOver]);
}
