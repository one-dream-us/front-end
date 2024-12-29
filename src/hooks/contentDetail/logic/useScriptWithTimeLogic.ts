import useMatchedStore from '@/store/useMatchedStore';
import useToastStore from '@/store/useToastStore';
import useTooltipStore from '@/store/useTooltipStore';
import useMarkEvent from '../useMarkEvent';
import { tooltipHandlers } from '@/handlers/contentDetail/handleToolTip';
import { Dictionary } from '@/types/interface';

export default function useScriptWithTimeLogic(dictionaries: Dictionary[]) {
  const setMatched = useMatchedStore((state) => state.setMatched);
  const hideToast = useToastStore((state) => state.hideToast);
  const { setTooltip } = useTooltipStore();

  useMarkEvent((event) => {
    hideToast();
    tooltipHandlers.handleClick(event, setTooltip, dictionaries, setMatched);
  });
}
