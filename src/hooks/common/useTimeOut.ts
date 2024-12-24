import { useEffect } from 'react';

export default function useTimeOut(setState: () => void, delay: number) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setState();
    }, delay);

    return () => clearTimeout(timer);
  }, [setState, delay]);
}
