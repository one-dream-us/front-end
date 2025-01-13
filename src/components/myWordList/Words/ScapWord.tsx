import { MyWordListMenuType } from '@/types/types';
import useAddKeyNote from '@/hooks/myWordList/api/useAddKeyNote';
import { ScrapDictionary } from '@/types/interface';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import ExplanationModal from '../ExplanationModal';

export default function ScrapWord({
  activeMenu,
  word,
  setShowModal,
  showModal,
}: {
  activeMenu: MyWordListMenuType;
  word: ScrapDictionary;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}) {
  const { addKeyNote } = useAddKeyNote(word.dictionaryId, activeMenu);

  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex justify-between'>
        <p className='font-bold text-custom-black'>{word.term}</p>
        <button
          type='button'
          onClick={() => {
            {
              addKeyNote();
            }
          }}
          className='bg-scrap hover:bg-keynote h-[22px] w-[22px] bg-contain'
        />
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{word.details}</p>
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
          description={word.details}
        />
      )}
    </div>
  );
}
