import { Link } from 'react-router-dom';
import { useState } from 'react';
import Drawer from './Drawer';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import logo from '@/assets/p2/P2 에셋_2차전달/Logo_Icon+text_24H.png';
import MenuTab from './MenuTab';
import ProfileLink from './ProfileLink';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isLoading, data } = useAuthCheckQuery();
  const handleShowSlider = () => setShowSidebar((prev) => !prev);

  return (
    <header className='fixed left-0 top-0 z-[999] h-[52px] w-full bg-white text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] desktop:right-0 desktop:h-20'>
      <div className='flex h-full items-center justify-between bg-white px-4 md:px-6 md:py-[11px] desktop:m-auto desktop:max-w-[1440px] desktop:px-[129px]'>
        {' '}
        <div className='flex items-center justify-start'>
          <Link
            className='flex items-center justify-center gap-x-1 text-xl font-extrabold md:mr-[84px] desktop:mr-[68px]'
            to={'/'}
          >
            <img className='h-[24px] desktop:h-[28px]' src={logo} alt='logo' />
          </Link>

          <MenuTab />
        </div>
        {data ? (
          <ProfileLink />
        ) : (
          <Link
            to={'/login'}
            className={`hidden h-[30px] w-[96px] items-center justify-center rounded-[10px] bg-custom-gray-medium py-2 md:flex ${isLoading ? 'animate-pulse' : 'bg-custom-green-money transition-all duration-200 hover:bg-green-hover'}`}
            state={{ prevPage: location.href }}
          >
            {' '}
            {isLoading ? '' : '로그인'}
          </Link>
        )}
        <button
          aria-label='drawer open button'
          onClick={handleShowSlider}
          className='z-[999] block md:hidden'
        >
          <svg
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={
                showSidebar
                  ? 'M6 18 18 6M6 6l12 12'
                  : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              }
            />
          </svg>
        </button>
        <Drawer logged={data} showSidebar={showSidebar} handleShowSlider={handleShowSlider} />
      </div>
    </header>
  );
}
