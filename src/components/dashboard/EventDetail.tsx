import { Dispatch, SetStateAction } from 'react';

export default function EventDetail({
  selectedEvent,
  setShowEvent,
}: {
  selectedEvent: { date: number; title: string; description: string };
  setShowEvent: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className='flex h-[162px] flex-col gap-y-3 pb-4 pt-3.5 desktop:w-[356px] desktop:pr-4'>
      <div className='flex items-center justify-between px-[13.5px] md:px-[15.5px] desktop:px-0'>
        <p className='flex h-7 w-7 items-center justify-center bg-event bg-contain text-xs font-bold text-white'>
          {selectedEvent.date}
        </p>
        <button
          onClick={() => setShowEvent(false)}
          className='flex h-6 items-center justify-center rounded-lg bg-custom-gray-200 px-3 text-xs font-medium leading-[14.4px] tracking-[-0.24px] text-custom-gray-dark'
        >
          뒤로가기
        </button>
      </div>
      <div className='px-[17.5px] md:px-[19.5px] desktop:px-1'>
        <p className='line-clamp-1 font-bold'>{selectedEvent.title}</p>
        <p className='mt-1 line-clamp-3 break-keep text-sm font-medium leading-[21px] tracking-[-0.28px] text-calendar-gray'>
          {selectedEvent.description}
        </p>
      </div>
    </div>
  );
}
