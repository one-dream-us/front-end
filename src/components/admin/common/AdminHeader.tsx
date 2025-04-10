import logo from '@/assets/imgs_v2/Logo_Icon+text_32_hor.png';
import Player from '@/components/newAdmin/player/Player';
import { adminMenuList } from '@/constants/constants';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminHeader() {
  const { pathname } = useLocation();
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const $html = document.documentElement;

    if (isDarkTheme) {
      $html.classList.add('dark');
      setIsDarkTheme(true);
      localStorage.setItem('theme', 'dark');
    } else {
      $html.classList.remove('dark');
      setIsDarkTheme(false);
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);
  return (
    <header className='admin-header fixed left-0 right-0 z-[999] m-auto h-[80px] w-full items-center px-[24px] shadow-md backdrop-blur'>
      <div className='m-auto flex h-full max-w-[1182px] items-center gap-x-[40px]'>
        <Link to={'/'}>
          {' '}
          <img src={logo} className='h-[28px] w-[117px]' alt='logo' />
        </Link>

        <ul className='flex items-center justify-center gap-x-[32px] text-[14px] font-bold leading-170'>
          {adminMenuList.map((item) => (
            <li className='relative' key={item.id}>
              <Link
                className={
                  pathname === item.to
                    ? 'text-custom-gray-dark dark:text-white'
                    : 'text-custom-gray-400 dark:text-stone-500'
                }
                to={item.to}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button className='dark:text-white' onClick={() => setIsDarkTheme((prev) => !prev)}>
          {/* {isDarkTheme ? 'light' : 'dark'} */}

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
                !isDarkTheme
                  ? 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
                  : 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
              }
            />
          </svg>
        </button>

        <Player />
      </div>
    </header>
  );
}
