import { MyWordListMenuType } from '@/types/types';
import { KeyNoteDictionary } from '@/types/interface';
import useDeleteKeyNote from '@/hooks/myWordList/api/useDeleteKeyNote';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import useWordStore from '@/store/useWordStore';

export default function KeyNote({
  activeMenu,
  word,
  setShowModal,
}: {
  activeMenu: MyWordListMenuType;
  word: KeyNoteDictionary;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { deleteKeyNote } = useDeleteKeyNote(word.keyNoteId, activeMenu);
  const { setDefinition, setDescription } = useWordStore();
  const cleanedText = word.dictionary.definition.replace(/<\/?mark>/g, '');
  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex justify-between'>
        <p className='font-bold text-custom-black'>{word.dictionary.term}</p>
        <button
          type='button'
          onClick={() => {
            deleteKeyNote();
          }}
          className='keynote_to_scrap h-[22px] w-[22px] bg-keynote bg-contain bg-no-repeat hover:bg-scrap'
        />
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{cleanedText}</p>
      <button
        type='button'
        className='view_commentary flex items-center self-end'
        onClick={() => {
          setDefinition(cleanedText);
          setDescription(word.dictionary.description);
          setShowModal(true);
        }}
      >
        <span className='text-sm leading-170 text-custom-gray-500'>해석 보기</span>
        <img src={arrowRightIcon} alt='해석 보기' className='h-4 w-4' />
      </button>
    </div>
  );
}
