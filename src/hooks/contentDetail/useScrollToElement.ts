import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  scrollTo?: string;
}

export const useScrollToElement = () => {
  const location = useLocation();
  const elementRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const state = location.state as LocationState | null;
    if (state?.scrollTo) {
      const scrollToId = state.scrollTo;
      const element = elementRefs.current[scrollToId];
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, isReady]);

  return { elementRefs };
};
