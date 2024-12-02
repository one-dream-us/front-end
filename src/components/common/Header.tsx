import { Link } from 'react-router-dom';
import logo from '@/assets/imgs/main_logo.svg';
import { HeaderMenuList } from '@/constants';

export default function Header() {
  return (
    <header className='fixed left-0 top-0 z-[999] flex h-20 w-full items-center justify-between bg-white px-5 py-12 md:px-20 lg:px-32'>
      <div className='flex items-center justify-start'>
        <Link
          className='mr-20 flex items-center justify-center gap-x-1 text-xl font-extrabold'
          to={'/'}
        >
          <img src={logo} alt='' />
          <h1 className='hidden md:block'>이게머니</h1>
        </Link>

        <ul className='hidden items-center justify-center gap-5 text-custom-gray md:flex md:gap-10 lg:gap-x-16'>
          {HeaderMenuList.map((item) => (
            <li key={item.id}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to={'/login'}>
        <button>login</button>
      </Link>
    </header>
  );
}
