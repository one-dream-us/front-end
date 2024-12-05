import { useEffect } from 'react';

export default function useMarkEvent(
  handleMouseOver: (event: MouseEvent) => void,
  handleMouseLeave: (event: MouseEvent) => void,
) {
  useEffect(() => {
    const marks = document.querySelectorAll('mark');
    marks.forEach((mark) => {
      mark.addEventListener('mouseenter', handleMouseOver);
      mark.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      marks.forEach((mark) => {
        mark.removeEventListener('mouseenter', handleMouseOver);
        mark.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [handleMouseOver, handleMouseLeave]);
}
