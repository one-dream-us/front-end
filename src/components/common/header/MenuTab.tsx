import { HeaderMenuList } from '@/constants/constants';
import { Link, useLocation } from 'react-router-dom';

export default function MenuTab() {
  const { pathname } = useLocation();
  return (
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
  );
}
