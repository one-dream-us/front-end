import { useEffect } from 'react';

export default function useDisableScroll(isModalOpen: boolean, isShown: boolean) {
  useEffect(() => {
    if (isModalOpen && !isShown) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.width = '100%';
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }

    return () => {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [isModalOpen]);
}
