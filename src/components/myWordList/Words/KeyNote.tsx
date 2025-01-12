import { MyWordListMenuType } from '@/types/types';
import { KeyNoteDictionary } from '@/types/interface';
import bookMarkIcon from '@/assets/p2/icon_bookmark_dark.png';
import useDeleteKeyNote from '@/hooks/myWordList/api/useDeleteKeyNote';

export default function KeyNote({
  activeMenu,
  word,
}: {
  activeMenu: MyWordListMenuType;
  word: KeyNoteDictionary;
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
    </div>
  );
}
