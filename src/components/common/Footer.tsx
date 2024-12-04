import logoWithName from '@/assets/imgs/logo_with_name.svg';
import { FooterMenuList } from '@/constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='desktop:h-[120px] flex h-[140px] w-full items-center justify-center bg-custom-gray-lighter px-4 text-custom-gray-dark md:px-6'>
      <div className='desktop:items-end flex h-[79px] w-full items-center justify-between sm:max-w-[720px] md:h-[85px] md:max-w-[1186px]'>
        <div className='flex w-[165px] flex-col gap-y-2'>
          <img src={logoWithName} alt='이게 머니 로고' className='h-[56px] w-[76px]' />
          <a
            className='ml-1 cursor-pointer text-[11px]'
            onClick={() => (window.location.href = 'mailto:thisismoney.241209@gmail.com')}
          >
            thisismoney.241209@gmail.com
          </a>
        </div>
        <nav>
          <ul className='desktop:flex desktop:gap-x-10 gap-y-2'>
            {FooterMenuList.map((item) => (
              <li key={item.id}>
                <Link to={item.to} className='text-[11px] font-medium underline'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
