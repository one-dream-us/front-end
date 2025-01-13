import { MyWordListMenuType } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export default function TutorialModalBtn({
  menu,
  setMenu,
  setShowTutorial,
  setShowTooltip,
}: {
  menu: MyWordListMenuType;
  setMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
  setShowTutorial: Dispatch<SetStateAction<boolean>>;
  setShowTooltip: Dispatch<SetStateAction<boolean>>;
}) {
  const nextMenu: Record<MyWordListMenuType, MyWordListMenuType | null> = {
    스크랩: '핵심노트',
    핵심노트: '오답노트',
    오답노트: '졸업노트',
    졸업노트: null,
  };
  return (
    <>
      <button
        type='button'
        className={`primary-btn h-12 w-[323px] rounded-[10px] text-sm md:w-[356px] ${menu !== '졸업노트' ? '!text-white' : ''}`}
        onClick={() => {
          const next = nextMenu[menu];
          if (next) setMenu(next);
          else {
            setShowTutorial(false);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
          }
        }}
      >
        {menu !== '졸업노트' ? '다음' : '시작하기'}
      </button>
    </>
  );
}
