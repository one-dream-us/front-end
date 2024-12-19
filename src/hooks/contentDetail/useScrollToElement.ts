import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

  useLayoutEffect(() => {
    if (!isReady) return;

    const state = location.state as LocationState | null;
    if (state?.scrollTo) {
      const scrollToId = state.scrollTo;
      const element = elementRefs.current[scrollToId];

      if (element) {
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
          const parentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });

          setTimeout(() => {
            window.scrollTo(0, parentScrollTop);
          }, 0);
        } else {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, isReady]);

  return { elementRefs };
};
