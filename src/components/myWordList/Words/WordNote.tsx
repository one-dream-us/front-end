import reviewNoteIcon from '@/assets/p2/icon_X_dark.png';
import graduationIcon from '@/assets/p2/icon_grad.png';
import { MyWordListMenuType } from '@/types/types';
import { WordInterface } from '@/types/interface';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import useWordStore from '@/store/useWordStore';

export default function WordNote({
  activeMenu,
  word,
  setShowModal,
}: {
  activeMenu: MyWordListMenuType;
  word: WordInterface;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const info: Partial<Record<MyWordListMenuType, string>> = {
    오답노트: reviewNoteIcon,
    졸업노트: graduationIcon,
  };
  const { setDefinition, setDescription } = useWordStore();

  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex gap-x-2'>
        <img src={info[activeMenu]} alt={activeMenu} className='h-[22px] w-[22px]' />
        <p className='font-bold text-custom-black'>{word.dictionary.term}</p>
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{word.dictionary.definition}</p>
      <button
        type='button'
        className='view_commentary flex items-center self-end'
        onClick={() => {
          setDefinition(word.dictionary.definition);
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
