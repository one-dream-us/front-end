import logoWithName from '@/assets/imgs/logo_with_name.svg';
import { FooterMenuList } from '@/constants/constants';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='flex h-[140px] w-full items-center justify-center bg-[#FAFAFA] px-4 text-custom-gray-dark drop-shadow-[0_-1px_1px_rgba(0,0,0,0.05)] md:px-6 desktop:h-[120px] desktop:px-0'>
      <div className='flex w-full items-center justify-between text-[10px] md:h-[85px] md:items-end md:text-xs desktop:w-[1440px] desktop:px-[129px]'>
        <div className='flex w-[165px] flex-col gap-y-2'>
          <img src={logoWithName} alt='이게 머니 로고' className='h-[56px] w-[76px]' />
          <a className='ml-1 cursor-pointer' href='mailto:thisismoney.241209@gmail.com'>
            thisismoney.241209@gmail.com
          </a>
        </div>
        <nav>
          <ul className='flex flex-col gap-y-3 underline md:flex-row md:gap-x-10 md:gap-y-0'>
            {FooterMenuList.map((item) => (
              <li key={item.id} className='h-[11px] md:h-4'>
                <Link to={item.to} target='_blank' rel='noopener noreferrer'>
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
