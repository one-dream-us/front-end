import { Link, useLocation, Navigate } from 'react-router-dom';
import logo from '@/assets/imgs/main_logo.svg';
import { HeaderMenuList } from '@/constants';
import { useState } from 'react';
import Drawer from './Drawer';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const { isLoading, data } = useUserInfoQuery();
  console.log(data);

  const { pathname } = useLocation();

  const handleShowSlider = () => setShowSidebar((prev) => !prev);
  if (pathname === '/login' && data) {
    return <Navigate to={'/'} />;
  }

  return (
    <header className='fixed left-0 top-0 z-[999] flex h-[52px] w-full items-center justify-between bg-white px-4 text-sm md:px-6 md:py-[11px] lg:h-20 lg:px-32 lg:py-6'>
      <div className='flex items-center justify-start'>
        <Link
          className='mr-10 flex items-center justify-center gap-x-1 text-xl font-extrabold'
          to={'/'}
        >
          <img src={logo} alt='' />
          <h1 className='hidden md:block'>이게머니</h1>
        </Link>

        <ul className='hidden items-center justify-center text-custom-gray md:flex md:gap-8 lg:gap-x-16'>
          {HeaderMenuList.map((item) => (
            <li key={item.id}>
              <Link className={pathname === item.to ? 'font-bold text-black' : ''} to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {data ? (
        <>
          {/* desktop */}
          <div className={`hidden h-9 w-9 rounded-full bg-custom-gray lg:block`}></div>
          {/* tablet */}
          <div
            className={`hidden h-11 w-11 items-center justify-center bg-custom-gray-light md:flex lg:hidden`}
          >
            <div className='h-6 w-6 bg-custom-gray'></div>
          </div>
        </>
      ) : (
        <Link
          className={`hidden h-[30px] w-[96px] items-center justify-center rounded-xl bg-custom-gray-medium py-2 md:flex ${isLoading && 'animate-pulse'}`}
          to={'/login'}
        >
          <button>{isLoading ? '' : data ? 'my page' : 'login'}</button>
        </Link>
      )}

      <button onClick={handleShowSlider} className='z-[999] block md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-7'
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
      <Drawer pathname={pathname} showSidebar={showSidebar} handleShowSlider={handleShowSlider} />
    </header>
  );
}
