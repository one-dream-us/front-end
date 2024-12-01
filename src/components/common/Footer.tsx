import logoWithName from '@/assets/imgs/logo_with_name.svg';
import { FooterMenuList } from '@/constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='flex h-[140px] w-full justify-center bg-custom-gray-lighter px-4 pb-[29px] pt-8 text-custom-gray-dark md:pb-8 md:pl-6 md:pr-[23px] md:pt-[23px]'>
      <div className='flex h-[79px] w-full items-center justify-between md:h-[85px] md:max-w-[1182px]'>
        <div className='flex w-[165px] flex-col gap-y-2'>
          <img src={logoWithName} alt='이게 머니 로고' className='h-[56px] w-[76px]' />
          <span className='ml-1 text-[11px]'>thisismoney.241209@gmail.com</span>
        </div>
        <nav>
          <ul className='gap-y-2'>
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
