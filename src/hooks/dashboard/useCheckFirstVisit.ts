import { useEffect } from 'react';

export default function useCheckFirstVisit(setShowOnboarding: (onBoardingStatus: boolean) => void) {
  useEffect(() => {
    const isFirstVisit = localStorage.getItem('hasSeenOnboarding');

    if (!isFirstVisit) {
      setShowOnboarding(true);
      localStorage.setItem('hasSeenOnboarding', 'true');
    }
  }, []);
}
