import { useEffect } from 'react';
import useToastStore from '@/store/useToastStore';

export function useAutoCloseToast(timeout: number = 3000) {
  const { isVisible, hideToast } = useToastStore();

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      hideToast();
    }, timeout);

    return () => clearTimeout(timer);
  }, [isVisible, hideToast, timeout]);
}
