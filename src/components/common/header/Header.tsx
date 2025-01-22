import { Link, useLocation } from 'react-router-dom';
import { HeaderMenuList } from '@/constants/constants';
import { useState } from 'react';
import Drawer from './Drawer';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import profile_main from '@/assets/this_is_money_imgs/img_png/Icon_profile_main.png';
import profile_active from '@/assets/this_is_money_imgs/img_png/icon_profile_active.png';
import { useImgHover } from '@/hooks/ui/useImgHover';
import logo from '@/assets/p2/P2 에셋_2차전달/Logo_Icon+text_24H.png';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const profileHover = useImgHover();
  const logoHover = useImgHover();

  const { isLoading, data } = useAuthCheckQuery();

  const { pathname } = useLocation();

  const handleShowSlider = () => setShowSidebar((prev) => !prev);

  return (
    <header className='fixed left-0 top-0 z-[999] h-[52px] w-full bg-white text-sm desktop:right-0 desktop:h-20'>
      <div className='flex h-full items-center justify-between bg-white px-4 md:px-6 md:py-[11px] desktop:m-auto desktop:max-w-[1440px] desktop:px-[129px]'>
        {' '}
        <div className='flex items-center justify-start'>
          <Link
            className='flex items-center justify-center gap-x-1 text-xl font-extrabold md:mr-[84px] desktop:mr-[68px]'
            to={'/'}
            onMouseEnter={logoHover.handleMouseEnter}
            onMouseLeave={logoHover.handleMouseLeave}
          >
            <img className='h-[24px] desktop:h-[28px]' src={logo} alt='logo' />
          </Link>

          <ul className='hidden items-center justify-center font-bold text-custom-gray md:flex md:gap-8 desktop:gap-x-16'>
            {HeaderMenuList.map((item, index) => (
              <li key={item.id}>
                <Link
                  className={`${item.to === pathname || pathname.includes(item.sub || 'sub') ? 'text-custom-gray-dark' : 'hover:text-custom-gray-400'}`}
                  to={item.to}
                  id={`${index === 1 && 'content-list'}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {data ? (
          <Link to={'/profile'} aria-label='프로필 버튼으로 이동'>
            {/* desktop */}
            <img
              onMouseEnter={profileHover.handleMouseEnter}
              onMouseLeave={profileHover.handleMouseLeave}
              className={`hidden h-9 w-9 rounded-full md:block`}
              src={
                pathname === '/profile'
                  ? profile_active
                  : profileHover.isHover
                    ? profile_active
                    : profile_main
              }
              alt='profile-img'
            />
          </Link>
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
        <Drawer
          isLoading={isLoading}
          logged={data}
          pathname={pathname}
          showSidebar={showSidebar}
          handleShowSlider={handleShowSlider}
        />
      </div>
    </header>
  );
}
