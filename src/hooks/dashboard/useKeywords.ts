import { useEffect } from 'react';
import useKeywordTooltip from '@/store/useTooltipState';
import { useOnboardingStore } from '@/store/useOnBoardingStore';

export default function useKeywords(withTooltip: boolean) {
  const { showTooltip, setShowTooltip } = useKeywordTooltip();
  const { showOnboarding } = useOnboardingStore();

  useEffect(() => {
    if (withTooltip && !showOnboarding) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [withTooltip]);
  return showTooltip;
}
