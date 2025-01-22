import logo from '@/assets/imgs_v2/Logo_Icon+text_32_hor.png';
import { adminMenuList } from '@/constants/constants';
import { Link, useLocation } from 'react-router-dom';

export default function AdminHeader() {
  const { pathname } = useLocation();
  return (
    <header className='fixed left-0 right-0 z-[999] m-auto flex h-[80px] max-w-[1182px] items-center bg-white'>
      <Link to={'/'}>
        {' '}
        <img src={logo} className='mr-[40px] h-[28px] w-[117px]' alt='logo' />
      </Link>

      <ul className='flex items-center justify-center gap-x-[32px] text-[14px] font-bold leading-170'>
        {adminMenuList.map((item) => (
          <li key={item.id}>
            <Link
              className={pathname === item.to ? 'text-custom-gray-dark' : 'text-custom-gray-400'}
              to={item.to}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
