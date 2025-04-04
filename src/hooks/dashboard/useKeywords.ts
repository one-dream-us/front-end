import { useEffect } from 'react';
import useKeywordTooltip from '@/store/useTooltipState';

export default function useKeywords(showOnboarding: boolean) {
  const { showTooltip, setShowTooltip } = useKeywordTooltip();

  useEffect(() => {
    if (showOnboarding) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showOnboarding]);
  return showTooltip;
}
