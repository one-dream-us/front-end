import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import ModalOverlay from '../../common/modal/ModalOverlay';
import TutorialModalBody from './TutorialModalBody';
import TutorialModalBtn from './TutorialModalBtn';
import TutorialNav from './TutorialNav';
import { MyWordListMenuType } from '@/types/types';

export default function TutorialModal({
  showTutorial,
  setShowTutorial,
  setShowTooltip,
}: {
  showTutorial: boolean;
  setShowTutorial: Dispatch<SetStateAction<boolean>>;
  setShowTooltip: Dispatch<SetStateAction<boolean>>;
}) {
  const [menu, setMenu] = useState<MyWordListMenuType>('스크랩');

  return (
    <ModalOverlay isOpen={showTutorial}>
      <div className='fixed left-1/2 top-1/2 flex h-[321px] w-[343px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[10px] bg-white md:h-[306px] md:w-[376px]'>
        <div className='mx-auto flex h-full flex-col justify-between py-6 md:py-5'>
          <TutorialNav menu={menu} setMenu={setMenu} />
          <TutorialModalBody menu={menu} />
          <TutorialModalBtn
            menu={menu}
            setMenu={setMenu}
            setShowTutorial={setShowTutorial}
            setShowTooltip={setShowTooltip}
          />
        </div>
      </div>
    </ModalOverlay>
  );
}
