import { MyWordListMenuType } from '@/types/types';
import { myWordListMenu } from '@/constants';
import { Dispatch, SetStateAction } from 'react';

export default function MyWordListNavBar({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: MyWordListMenuType;
  setActiveMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
  isTutorial: boolean;
}) {
  return (
    <div className='my-4 w-[343px] md:mt-6 md:w-[353px] desktop:w-full'>
      <ul className='grid h-10 w-full grid-cols-4 text-sm font-bold text-custom-gray-500'>
        {myWordListMenu.map((item: MyWordListMenuType) => (
          <li
            key={item}
            className={`relative flex h-full items-center justify-center ${activeMenu === item ? 'text-custom-gray-dark after:absolute after:-bottom-[1px] after:h-0.5 after:w-full after:bg-custom-gray-dark' : ''} `}
          >
            <button type='button' onClick={() => setActiveMenu(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <hr className='w-full border-custom-gray-300' />
      </div>
    </div>
  );
}
