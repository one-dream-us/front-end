import { useEffect } from 'react';

export default function useTooltipPosition(
  targetRef: React.RefObject<HTMLElement>,
  tooltipRef: React.RefObject<HTMLElement>,
) {
  useEffect(() => {
    if (targetRef.current && tooltipRef.current) {
      const target = targetRef.current;
      const tooltip = tooltipRef.current;
      const rect = target.getBoundingClientRect();

      tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `${rect.top + window.scrollY + rect.height + 4}px`;
    }
  }, [targetRef, tooltipRef]);
}
