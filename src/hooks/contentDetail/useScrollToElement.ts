import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  scrollTo?: string;
}

export const useScrollToElement = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState | null;

    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
};
