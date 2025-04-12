import { useEffect } from 'react';

export default function useDisableScrollOnModal(condition: boolean) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [condition]);
}
