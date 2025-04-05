import logo from '@/assets/imgs_v2/Logo_Icon+text_32_hor.png';
import Player from '@/components/newAdmin/player/Player';
import { adminMenuList } from '@/constants/constants';
import { Link, useLocation } from 'react-router-dom';

export default function AdminHeader() {
  const { pathname } = useLocation();
  return (
    <header className='fixed left-0 right-0 z-[999] m-auto h-[80px] w-full items-center px-[24px] shadow-md backdrop-blur'>
      <div className='m-auto flex h-full max-w-[1182px] items-center gap-x-[40px]'>
        <Link to={'/'}>
          {' '}
          <img src={logo} className='h-[28px] w-[117px]' alt='logo' />
        </Link>

        <ul className='flex items-center justify-center gap-x-[32px] text-[14px] font-bold leading-170'>
          {adminMenuList.map((item) => (
            <li className='relative' key={item.id}>
              <Link
                className={pathname === item.to ? 'text-custom-gray-dark' : 'text-custom-gray-400'}
                to={item.to}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Player />
      </div>
    </header>
  );
}
