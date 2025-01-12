import { MyWordListMenuType } from '@/types/types';
import scrapIcon from '@/assets/p2/icon_bookmark_grey.png';
import useAddKeyNote from '@/hooks/myWordList/api/useAddKeyNote';
import { ScrapDictionary } from '@/types/interface';

export default function ScrapWord({
  activeMenu,
  word,
}: {
  activeMenu: MyWordListMenuType;
  word: ScrapDictionary;
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
        >
          <img src={scrapIcon} alt={activeMenu} className='h-[22px] w-[22px]' />
        </button>
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{word.details}</p>
    </div>
  );
}
