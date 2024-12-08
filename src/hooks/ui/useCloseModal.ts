import { useEffect } from 'react';

export const useCloseModal = (closeFn: () => void) => {
  useEffect(() => {
    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      closeFn();
    };

    window.addEventListener('keydown', handleCloseModal);

    return () => window.removeEventListener('keydown', handleCloseModal);
  }, []);
};
