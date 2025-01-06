import { MyWordListMenuType } from '@/types/types';
import { myWordListMenu } from '@/constants';
import { Dispatch, SetStateAction } from 'react';

export default function MyWordListNavBar({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: MyWordListMenuType;
  setActiveMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
}) {
  return (
    <div className='w-[324px] md:w-[352px]'>
      <ul className='flex w-full h-10 text-sm font-bold text-custom-gray-300'>
        {myWordListMenu.map((item: MyWordListMenuType) => (
          <li
            key={item}
            className={`relative flex h-full w-[81px] items-center justify-center md:w-[88px] ${activeMenu === item ? 'text-custom-gray-dark after:absolute after:-bottom-[1px] after:h-0.5 after:w-[81px] after:bg-custom-gray-dark after:md:w-[88px]' : ''}`}
          >
            <button type='button' onClick={() => setActiveMenu(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <hr className='w-full' />
      </div>
    </div>
  );
}
