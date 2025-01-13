import { useEffect, Dispatch, SetStateAction } from 'react';

export default function useCheckFirstVisit(setShowOnboarding: Dispatch<SetStateAction<boolean>>) {
  useEffect(() => {
    const isFirstVisit = localStorage.getItem('hasSeenOnboarding');

    if (!isFirstVisit) {
      setShowOnboarding(true);
      localStorage.setItem('hasSeenOnboarding', 'true');
    }
  }, []);
}
