import { MyWordListMenuType } from '@/types/types';
import { myWordListMenu } from '@/constants/constants';
import { Dispatch, SetStateAction } from 'react';

export default function MyWordListNavBar({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: MyWordListMenuType;
  setActiveMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
  isTutorial: boolean;
}) {
  const id =
    activeMenu === '스크랩'
      ? 'tap_scrap'
      : activeMenu === '핵심노트'
        ? 'tap_keynote'
        : activeMenu === '오답노트'
          ? 'tap_wrong_answer_note'
          : 'tap_graduation_note';
  return (
    <div className='my-6 box-content w-[343px] px-4 md:w-[353px] md:px-0 desktop:w-[812px]'>
      <ul className='grid h-10 w-full grid-cols-4 text-sm font-bold text-custom-gray-500'>
        {myWordListMenu.map((item: MyWordListMenuType) => (
          <li
            key={item}
            className={`relative flex h-full items-center justify-center ${activeMenu === item ? 'text-custom-gray-dark after:absolute after:-bottom-[1px] after:h-0.5 after:w-full after:bg-custom-gray-dark' : ''} `}
          >
            <button id={id} type='button' onClick={() => setActiveMenu(item)}>
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
