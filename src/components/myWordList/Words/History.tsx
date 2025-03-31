import { HistoryDictionary } from '@/types/interface';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import useWordStore from '@/store/useWordStore';
import bookmarkIcon from '@/assets/P2_5d/icon_Keynote.svg';
import historyIcon from '@/assets/P2_5d/icon_scrap.svg';

export default function History({
  word,
  setShowModal,
}: {
  word: HistoryDictionary;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { term, description, isBookmarked } = word;
  const { setDefinition, setDescription } = useWordStore();
  const cleanedText = word.definition.replace(/<\/?mark>/g, '');

  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex justify-between'>
        <p className='font-bold text-custom-black'>{term}</p>
        <img className='scrap_to_keynote h-5 w-5' src={isBookmarked ? bookmarkIcon : historyIcon} />
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{cleanedText}</p>
      <button
        type='button'
        className='view_commentary flex items-center self-end'
        onClick={() => {
          setDefinition(cleanedText);
          setDescription(description);
          setShowModal(true);
        }}
      >
        <span className='text-sm leading-170 text-custom-gray-500'>해석 보기</span>
        <img src={arrowRightIcon} alt='해석 보기' className='h-4 w-4' />
      </button>
    </div>
  );
}
