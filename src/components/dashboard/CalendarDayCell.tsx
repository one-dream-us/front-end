import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/ko';
import { WEEK_DAYS } from '@/constants/constants';
import { getWeekOfMonth, getThisWeekDays } from '@/utils/dashboardUtils';
import { Dispatch, SetStateAction } from 'react';
import useGetEvents from '@/hooks/dashboard/useGetEvents';

dayjs.extend(weekday);
dayjs.locale('ko');

export default function CalendarDayCell({
  setShowEvent,
  setSelectedEvent,
}: {
  setShowEvent: Dispatch<SetStateAction<boolean>>;
  setSelectedEvent: Dispatch<SetStateAction<{ date: number; title: string; description: string }>>;
}) {
  const today = dayjs();
  const weekOfMonth = getWeekOfMonth(today);
  const thisWeekDays = getThisWeekDays(today);
  const { events, isEventsLoading } = useGetEvents();
  const eventsMap = new Map<string, (typeof events)[0]>();
  if (!events || isEventsLoading) return null;
  for (const event of events) {
    if (!eventsMap.has(event.date)) {
      eventsMap.set(event.date, event);
    }
  }
  return (
    <section className='w-[343px] md:w-[353px] desktop:w-[359px] desktop:pr-[19px]'>
      <div className='flex h-[54px] justify-between bg-secondary px-[13.5px] md:px-[15.5px] desktop:mt-5 desktop:h-auto desktop:bg-white desktop:px-0'>
        <p className='self-center text-lg font-bold tracking-[-0.36px] text-[#010101]'>
          주간 머니 이슈
        </p>
        <p className='self-end pb-[13px] text-xs font-medium leading-[20px] tracking-[-0.24px] text-calendar-gray desktop:mt-2 desktop:pb-0'>
          {today.format('M')}월 {weekOfMonth}주차
        </p>
      </div>
      <div className='px-[13.5px] pb-[25px] pt-5 desktop:px-0 desktop:pb-[19px] desktop:pt-8'>
        <div className='flex items-center justify-between'>
          {thisWeekDays.map((day, i) => {
            const dateStr = day.format('YYYY-MM-DD');
            const isToday = day.isSame(today, 'day');
            const event = eventsMap.get(dateStr);
            const hasEvent = !!event;

            return (
              <div className='flex flex-col items-center gap-y-2 desktop:gap-y-3' key={dateStr}>
                <p className='text-xs font-bold leading-[18px] tracking-[-0.24px] text-calendar-gray'>
                  {WEEK_DAYS[i]}
                </p>
                <div className='relative h-8 w-8'>
                  {hasEvent ? (
                    <>
                      <button
                        aria-label={`${day.format('YYYY년 M월 D일')} 이벤트: ${event.title} 상세보기`}
                        className='flex h-full w-full items-center justify-center bg-event text-sm font-bold leading-[32px] tracking-[-0.28px] text-white'
                        onClick={() => {
                          setShowEvent(true);
                          setSelectedEvent({
                            date: day.date(),
                            title: event.title,
                            description: event.description,
                          });
                        }}
                      >
                        {day.date()}
                      </button>
                      {isToday && (
                        <div className='absolute right-0 top-0 h-2 w-2 rounded-full bg-[#FF4747]' />
                      )}
                    </>
                  ) : (
                    <p className='flex h-full w-full items-center justify-center text-sm font-bold leading-[32px] tracking-[-0.28px] text-[#cacaca]'>
                      {day.date()}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
