import { useEffect } from 'react';

function useTooltipPosition(
  targetRef: React.RefObject<HTMLElement>,
  tooltipRef: React.RefObject<HTMLElement>,
) {
  useEffect(() => {
    if (targetRef.current && tooltipRef.current) {
      const target = targetRef.current;
      const tooltip = tooltipRef.current;
      const rect = target.getBoundingClientRect();

      tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight + 5}px`;
    }
  }, [targetRef, tooltipRef]);
}

export default useTooltipPosition;
