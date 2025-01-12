import { MyWordListMenuType } from '@/types/types';
import { myWordListMenu } from '@/constants';
import { Dispatch, SetStateAction } from 'react';

export default function TutorialNav({
  menu,
  setMenu,
}: {
  menu: MyWordListMenuType;
  setMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
}) {
  return (
    <div className='w-[323px] md:w-[353px]'>
      <ul className='grid h-10 w-full grid-cols-4 text-sm font-bold text-custom-gray-300'>
        {myWordListMenu.map((item: MyWordListMenuType) => (
          <li
            key={item}
            className={`relative flex h-full items-center justify-center ${menu === item ? 'text-custom-gray-dark after:absolute after:-bottom-[1px] after:h-0.5 after:w-full after:bg-custom-gray-dark' : ''} `}
          >
            <button type='button' onClick={() => setMenu(item)}>
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
