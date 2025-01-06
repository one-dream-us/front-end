import { MyWordListMenuType } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export default function TutorialModalBtn({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: MyWordListMenuType;
  setActiveMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
}) {
  const nextMenu: Record<MyWordListMenuType, MyWordListMenuType | null> = {
    스크랩: '북마크',
    북마크: '오답노트',
    오답노트: '졸업노트',
    졸업노트: null,
  };
  return (
    <>
      <button
        type='button'
        className={`primary-btn h-12 w-[323px] rounded-[10px] text-sm md:w-[356px] ${activeMenu !== '졸업노트' ? '!text-white' : ''}`}
        onClick={() => {
          const next = nextMenu[activeMenu];
          if (next) setActiveMenu(next);
        }}
      >
        {activeMenu !== '졸업노트' ? '다음' : '시작하기'}
      </button>
    </>
  );
}
