import { Dispatch, SetStateAction } from 'react';
import { MyWordListMenuType } from '@/types/types';
import MyWordListNavBar from './MyWordListNavBar';
import ModalOverlay from '../common/modal/ModalOverlay';
import TutorialModalBody from './TutorialModalBody';
import TutorialModalBtn from './TutorialModalBtn';

export default function TutorialModal({
  showTutorial,
  setShowTutorial,
  activeMenu,
  setActiveMenu,
}: {
  showTutorial: boolean;
  setShowTutorial: Dispatch<SetStateAction<boolean>>;
  activeMenu: MyWordListMenuType;
  setActiveMenu: Dispatch<SetStateAction<MyWordListMenuType>>;
}) {
  return (
    <ModalOverlay isOpen={showTutorial}>
      <div className='fixed left-1/2 top-1/2 flex h-[321px] w-[343px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[10px] bg-white md:h-[306px] md:w-[376px]'>
        <div className='mx-auto flex h-full flex-col justify-between py-6 md:py-5'>
          <MyWordListNavBar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            isTutorial={true}
          />
          <TutorialModalBody activeMenu={activeMenu} />
          <TutorialModalBtn
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            setShowTutorial={setShowTutorial}
          />
        </div>
      </div>
    </ModalOverlay>
  );
}
