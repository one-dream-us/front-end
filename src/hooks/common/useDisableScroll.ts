import { useEffect, useRef } from 'react';

export default function useDisableScroll(isModalOpen: boolean) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isModalOpen) {
      scrollYRef.current = window.scrollY;

      requestAnimationFrame(() => {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollYRef.current}px`;
        document.body.style.left = '0';
        document.body.style.width = '100%';
      });
    } else {
      const scrollY = scrollYRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }

    return () => {
      if (!isModalOpen) return;
      const scrollY = scrollYRef.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [isModalOpen]);
}
