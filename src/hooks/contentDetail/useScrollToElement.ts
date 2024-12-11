import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  scrollTo?: string;
}

export const useScrollToElement = () => {
  const location = useLocation();
  const elementRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
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
  }, [location]);

  return { elementRefs };
};
