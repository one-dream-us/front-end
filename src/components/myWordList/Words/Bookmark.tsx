import { BookmarkDictionary } from '@/types/interface';
import useCancelBookmark from '@/hooks/myWordList/api/useCancelBookmark';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import { Dispatch, SetStateAction } from 'react';
import useWordStore from '@/store/useWordStore';

export default function Bookmark({
  word,
  setShowModal,
}: {
  word: BookmarkDictionary;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { definition, term, description } = word.dictionary;
  const { cancelBookmark } = useCancelBookmark(word.bookmarkId);
  const { setDefinition, setDescription } = useWordStore();
  const cleanedText = definition.replace(/<\/?mark>/g, '');

  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div className='flex justify-between'>
        <p className='font-bold text-custom-black'>{term}</p>
        <button
          type='button'
          aria-label='북마크 취소'
          onClick={() => {
            cancelBookmark();
          }}
          className='keynote_to_scrap h-5 w-5 bg-keynote bg-contain bg-no-repeat transition-colors hover:bg-scrap'
        />
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
        <img src={arrowRightIcon} alt='해석 보기 아이콘' className='h-4 w-4' />
      </button>
    </div>
  );
}
