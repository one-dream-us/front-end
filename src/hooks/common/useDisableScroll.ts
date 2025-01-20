import { useEffect } from 'react';

export default function useDisableScroll(isModalOpen: boolean) {
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);
}
