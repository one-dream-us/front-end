import { MyWordListMenuType } from '@/types/types';
import { KeyNoteDictionary } from '@/types/interface';
import bookMarkIcon from '@/assets/p2/icon_bookmark_dark.png';
import useDeleteKeyNote from '@/hooks/myWordList/api/useDeleteKeyNote';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import ExplanationModal from '../ExplanationModal';

export default function KeyNote({
  activeMenu,
  word,
  setShowModal,
  showModal,
}: {
  activeMenu: MyWordListMenuType;
  word: KeyNoteDictionary;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}) {
  const { deleteKeyNote } = useDeleteKeyNote(word.keyNoteId, activeMenu);
  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex justify-between'>
        <p className='font-bold text-custom-black'>{word.dictionary.term}</p>
        <button
          type='button'
          onClick={() => {
            {
              deleteKeyNote();
            }
          }}
        >
          <img src={bookMarkIcon} alt={activeMenu} className='h-[22px] w-[22px]' />
        </button>
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{word.dictionary.details}</p>
      <button
        type='button'
        className='flex items-center self-end'
        onClick={() => setShowModal(true)}
      >
        <span className='text-sm leading-170 text-custom-gray-500'>해석 보기</span>
        <img src={arrowRightIcon} alt='해석 보기 아이콘' className='h-4 w-4' />
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
