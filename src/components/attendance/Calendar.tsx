import { missionApi } from '@/services/missionApi';
import { MissionStatus } from '@/types/interface';
import { compareDate, formatLabel } from '@/utils/calendar/calendarUtils';
import { useEffect, useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/styles/calendar.css';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendar({ createdAt }: { createdAt: string }) {
  const [value, onChange] = useState<Value>(new Date());
  const [activeDate, setActiveDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<MissionStatus[]>([]);

  const lastDayOfThisMonth = new Date(
    activeDate.getFullYear(),
    activeDate.getMonth() + 1,
    0,
  ).getDate();

  const MissionCleatCount = status.filter((item) =>
    Object.values(item.missionStatus).every((i) => i === true),
  ).length;

  useEffect(() => {
    (async () => {
      const res = await missionApi
        .getMissionStatus(
          'month',
          `${activeDate.getFullYear()}-${String(activeDate.getMonth() + 1).padStart(2, '0')}`,
        )
        .then((res) => res.data.dailyMissionDetails);
      setStatus(res);
    })();
  }, [activeDate]);

  return (
    <ErrorBoundary FallbackComponent={CalendarFallback}>
      <div className='relative w-[343px] md:w-[353px]'>
        {' '}
        <ReactCalendar
          onChange={onChange}
          nextAriaLabel='next month button'
          prevAriaLabel='previous month button'
          value={value}
          next2Label={null}
          prev2Label={null}
          prevLabel={<PrevIcon />}
          nextLabel={<NextIcon />}
          navigationLabel={({ label }) => formatLabel(label)}
          locale='ko-KO'
          formatShortWeekday={(_locale, date) => date.toString().split(' ')[0]}
          showNeighboringMonth={false}
          formatDay={(_locale, date) => `${date.getDate()}`}
          minDetail='month'
          maxDate={new Date()}
          minDate={new Date(createdAt)}
          tileClassName={({ date }) => compareDate(date, status!, createdAt)}
          onActiveStartDateChange={({ activeStartDate }) =>
            setActiveDate(activeStartDate ?? new Date())
          }
        />
        <div className='absolute right-[30px] top-[24px] text-[12px]'>
          <span className='mr-2 font-medium text-[#797979]'>이번 달 미션 완료</span>
          <span className='font-medium text-[#454545]'>
            <span className='font-bold'>{MissionCleatCount}</span>
            <span className='mx-[1px]'>/</span>
            {lastDayOfThisMonth}
          </span>
        </div>
      </div>
    </ErrorBoundary>
  );
}
const PrevIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-4'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
    </svg>
  );
};
const NextIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-4'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
    </svg>
  );
};

const CalendarFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className='flex h-[348px] w-[343px] flex-col items-center justify-center gap-y-3 rounded-[10px] bg-custom-black-light text-white md:w-[353px]'>
      <h1 className='text-xl'>잠시 후 다시 시도해주세요</h1>
      <span className='text-center text-sm'>
        요청사항을 처리하는데 <br />
        실패했습니다.
      </span>
      <button
        className='w-1/2 border bg-white py-2 text-black hover:bg-hover-30'
        onClick={resetErrorBoundary}
      >
        다시 시도
      </button>
    </div>
  );
};
