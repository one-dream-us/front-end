import { Link, useLocation } from 'react-router-dom';
import { HeaderMenuList } from '@/constants';
import { useState } from 'react';
import Drawer from './Drawer';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import profile_main from '@/assets/this_is_money_imgs/img_png/Icon_profile_main.png';
import profile_active from '@/assets/this_is_money_imgs/img_png/icon_profile_active.png';
import { useImgHover } from '@/hooks/ui/useImgHover';
import useLoginModalStore from '@/store/useLoginModalStore';
import LoginModal from '../LoginModal';
import logo from '@/assets/imgs_v2/Logo_Icon+text_32_hor.png';
import logo_mobile from '@/assets/imgs_v2/main_logo_32.png';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const profileHover = useImgHover();
  const logoHover = useImgHover();
  const { setIsLoginModalOpen } = useLoginModalStore();

  const { isLoading, data } = useAuthCheckQuery();

  const { pathname } = useLocation();

  const handleShowSlider = () => setShowSidebar((prev) => !prev);

  return (
    <header className='fixed left-0 top-0 z-[999] flex h-[52px] w-full items-center justify-between bg-white px-4 text-sm md:px-6 md:py-[11px] desktop:right-0 desktop:m-auto desktop:h-20 desktop:max-w-[1440px] desktop:px-[129px]'>
      <div className='flex items-center justify-start'>
        <Link
          className='mr-10 flex items-center justify-center gap-x-1 text-xl font-extrabold'
          to={'/'}
          onMouseEnter={logoHover.handleMouseEnter}
          onMouseLeave={logoHover.handleMouseLeave}
        >
          <img src={logo_mobile} className='block h-[40px] w-[40px] md:hidden' alt='' />
          <img className='hidden h-[28px] w-[117px] md:block' src={logo} alt='logo' />
        </Link>

        <ul className='hidden items-center justify-center text-custom-gray md:flex md:gap-8 desktop:gap-x-16'>
          {HeaderMenuList.map((item) => (
            <li key={item.id}>
              <Link
                className={`${item.to === pathname || pathname.includes(item.sub || 'sub') ? 'font-medium text-black' : 'hover:text-custom-gray-h'}`}
                to={item.to}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {data ? (
        <Link to={'/profile'}>
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
            alt='profileImg'
          />
        </Link>
      ) : (
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className={`hidden h-[30px] w-[96px] items-center justify-center rounded-[10px] bg-custom-gray-medium py-2 md:flex ${isLoading ? 'animate-pulse' : 'bg-custom-green-money transition-all duration-200 hover:bg-green-hover'}`}
        >
          {isLoading ? '' : '로그인'}
        </button>
      )}

      <LoginModal />

      <button onClick={handleShowSlider} className='z-[999] block md:hidden'>
        <svg
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
              showSidebar ? 'M6 18 18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
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
    </header>
  );
}
