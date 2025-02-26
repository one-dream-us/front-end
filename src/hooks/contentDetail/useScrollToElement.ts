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
    setIsReady(true);
  }, []);

  useLayoutEffect(() => {
    if (!isReady) return;

    const state = location.state as LocationState | null;
    if (state?.scrollTo) {
      const scrollToId = state.scrollTo;
      const element = elementRefs.current[scrollToId];

      if (element) {
        const isDesktop = window.innerWidth >= 1440;

        if (isDesktop) {
          const disableScroll = (e: Event) => e.preventDefault();

          window.addEventListener('wheel', disableScroll, { passive: false });
          window.addEventListener('touchmove', disableScroll, { passive: false });

          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });

            document.body.style.overflow = '';
            window.removeEventListener('wheel', disableScroll);
            window.removeEventListener('touchmove', disableScroll);

            const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
            window.scrollTo(0, scrollY);
          }, 400);
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
