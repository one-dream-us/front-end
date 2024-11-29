import { Link } from 'react-router-dom';
import logo from '@/assets/imgs/main_logo.svg';
import { HeaderMenuList } from '@/constants';

export default function Header() {
  return (
    <header className='fixed top-0 left-0  w-full h-20 px-5 md:px-20 lg:px-32 py-12 bg-white z-[999] flex justify-between items-center'>
      <div className='flex items-center justify-start'>
        <Link
          className='flex items-center justify-center mr-20 text-xl font-extrabold gap-x-1'
          to={'/'}
        >
          <img src={logo} alt='' />
          <h1>이게머니</h1>
        </Link>

        <ul className='items-center justify-center hidden gap-5 md:flex md:gap-10 lg:gap-x-16 text-custom-gray'>
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
