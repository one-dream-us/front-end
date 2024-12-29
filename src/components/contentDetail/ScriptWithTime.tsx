import useMarkEvent from '@/hooks/contentDetail/useMarkEvent';
import { tooltipHandlers } from '@/handlers/contentDetail/handleToolTip';
import { ScriptNTimeProps } from '@/types/interface';
import useMatchedStore from '@/store/useMatchedStore';
import useToastStore from '@/store/useToastStore';
import useTooltipStore from '@/store/useTooltipStore';

export default function ScriptWithTime({
  id,
  time,
  script,
  onClick,
  dictionaries,
}: ScriptNTimeProps) {
  const setMatched = useMatchedStore((state) => state.setMatched);
  const hideToast = useToastStore((state) => state.hideToast);
  const { setTooltip } = useTooltipStore();

  useMarkEvent((event) => {
    hideToast();
    tooltipHandlers.handleClick(event, setTooltip, dictionaries, setMatched);
  });

  return (
    <div
      id={id}
      className='mb-8 flex w-full flex-col gap-y-1 leading-170 md:flex-row md:gap-x-[46px] desktop:gap-x-[30px]'
    >
      <button
        id='timestamp'
        type='button'
        className='flex h-5 items-center justify-center self-start rounded-[10px] bg-custom-gray-dark px-2 text-xs text-primary md:mt-1'
        onClick={onClick}
      >
        {time}
      </button>
      <p
        dangerouslySetInnerHTML={{ __html: script }}
        className='text-custom-gray-dark md:text-sm md:leading-170'
      />
    </div>
  );
}
