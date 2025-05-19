import CalendarDayCell from './CalendarDayCell';
import { useState } from 'react';
import EventDetail from './EventDetail';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import chevronRight from '@/assets/icons/chevron-right.svg';

export default function CalendarBanner() {
  const [showEvent, setShowEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ date: 0, title: '', description: '' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const navigate = useNavigate();

  const isDesktopLayout = (
    <div className='relative flex justify-between'>
      <div className='absolute left-0 top-0 -z-[10] h-full w-[453px] bg-gradient-to-r from-[#FFED85] to-[#ffffff]' />
      <div className='my-[22px] ml-8 text-custom-gray-dark'>
        <p className='text-[29px] font-bold leading-[44px] tracking-[-0.58px]'>
          이번주 경제 흐름 파악하기
        </p>
        <p className='mb-3 text-sm leading-[22px] tracking-[-0.28px]'>
          최신 경제 일정과 트렌드를
          <br />
          주간 캘린더로 한번에 보고 파악하기!
        </p>
        <button onClick={() => navigate('/news-list')} className='flex h-[18px] items-center'>
          <p className='text-xs font-medium leading-[18px] tracking-[-0.24px]'>머니뉴스 바로보기</p>
          <img src={chevronRight} alt='머니뉴스 바로보기' className='h-4 w-4' />
        </button>
      </div>
      {showEvent ? (
        <EventDetail selectedEvent={selectedEvent} setShowEvent={setShowEvent} />
      ) : (
        <CalendarDayCell setShowEvent={setShowEvent} setSelectedEvent={setSelectedEvent} />
      )}
    </div>
  );

  const isMobileLayout = showEvent ? (
    <EventDetail selectedEvent={selectedEvent} setShowEvent={setShowEvent} />
  ) : (
    <CalendarDayCell setShowEvent={setShowEvent} setSelectedEvent={setSelectedEvent} />
  );

  return (
    <div className='mb-[19px] mt-4 flex flex-col overflow-hidden rounded-lg border border-[#e2e2e2] border-opacity-40 shadow-wcal-both md:mb-7 md:mt-3 desktop:mb-[46px]'>
      {isDesktop ? isDesktopLayout : isMobileLayout}
    </div>
  );
}
