import reviewNoteIcon from '@/assets/p2/icon_X_dark.png';
import graduationIcon from '@/assets/p2/icon_grad.png';
import { MyWordListMenuType } from '@/types/types';
import { WordInterface } from '@/types/interface';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import ExplanationModal from '../ExplanationModal';

export default function WordNote({
  activeMenu,
  word,
  setShowModal,
  showModal,
}: {
  activeMenu: MyWordListMenuType;
  word: WordInterface;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}) {
  const info: Partial<Record<MyWordListMenuType, string>> = {
    오답노트: reviewNoteIcon,
    졸업노트: graduationIcon,
  };
  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex gap-x-2'>
        <img src={info[activeMenu]} alt={activeMenu} className='h-[22px] w-[22px]' />
        <p className='font-bold text-custom-black'>{word.dictionary.term}</p>
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{word.dictionary.details}</p>
      <button
        type='button'
        className='flex items-center self-end'
        onClick={() => setShowModal(true)}
      >
        <span className='text-sm leading-170 text-custom-gray-500'>해석 보기</span>
        <img src={arrowRightIcon} alt='해석 보기' className='h-4 w-4' />
      </button>
      {showModal && (
        <ExplanationModal
          showModal={showModal}
          setShowModal={setShowModal}
          description={word.dictionary.details}
        />
      )}
    </div>
  );
}
