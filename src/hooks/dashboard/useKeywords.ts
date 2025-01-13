import { useEffect } from 'react';
import useKeywordTooltip from '@/store/useKeywordTooltip';

export default function useKeywords(withTooltip: boolean) {
  const { showTooltip, setShowTooltip } = useKeywordTooltip();

  useEffect(() => {
    if (withTooltip) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [withTooltip]);
  return showTooltip;
}
