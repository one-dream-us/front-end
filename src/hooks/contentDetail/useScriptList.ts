import useTooltipStore from '@/store/useTooltipStore';
import useMatchedStore from '@/store/useMatchedStore';
import useScrappedStore from '@/store/useScrappedStore';
import { useScrollToElement } from './useScrollToElement';
import useHighlightMarks from './useHighlightMarks';

export default function useScriptList() {
  const scrappedData = useScrappedStore((state) => state.scrappedData);
  const { elementRefs } = useScrollToElement();
  useHighlightMarks(scrappedData, elementRefs);

  const { tooltip, setTooltip } = useTooltipStore();
  const matched = useMatchedStore((state) => state.matched);
  return { tooltip, setTooltip, matched };
}
