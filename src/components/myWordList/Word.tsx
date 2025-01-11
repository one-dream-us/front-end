import scrapIcon from '@/assets/p2/icon_bookmark_grey.png';
import bookMarkIcon from '@/assets/p2/icon_bookmark_dark.png';
import reviewNoteIcon from '@/assets/p2/icon_X_dark.png';
import graduationIcon from '@/assets/p2/icon_grad.png';
import { MyWordListMenuType } from '@/types/types';
import useAddKeyNote from '@/hooks/myWordList/api/useAddKeyNote';
import useDeleteKeyNote from '@/hooks/myWordList/api/useDeleteKeyNote';
import { WordType } from '@/types/interface';

export default function Word({
  activeMenu,
  word,
}: {
  activeMenu: MyWordListMenuType;
  word: WordType;
}) {
  const info = {
    스크랩: scrapIcon,
    핵심노트: bookMarkIcon,
    오답노트: reviewNoteIcon,
    졸업노트: graduationIcon,
  };

  const { addKeyNote } = useAddKeyNote(word.dictionaryId, activeMenu);
  const { deleteKeyNote } = useDeleteKeyNote(word.dictionaryId, activeMenu);
  return (
    <div className='flex flex-col justify-center gap-y-2 rounded-[10px] border border-custom-gray-200 p-4'>
      <div
        className={`flex ${activeMenu === '스크랩' || activeMenu === '핵심노트' ? 'justify-between' : 'gap-x-2'}`}
      >
        {activeMenu === '오답노트' ||
          (activeMenu === '졸업노트' && (
            <img src={info[activeMenu]} alt={activeMenu} className='h-[22px] w-[22px]' />
          ))}
        <p className='font-bold text-custom-black'>{word.term}</p>
        {activeMenu === '핵심노트' ||
          (activeMenu === '스크랩' && (
            <button
              type='button'
              onClick={() => {
                {
                  if (activeMenu === '스크랩') addKeyNote();
                  else deleteKeyNote();
                }
              }}
            >
              <img src={info[activeMenu]} alt={activeMenu} className='h-[22px] w-[22px]' />
            </button>
          ))}
      </div>
      <p className='text-sm leading-160 text-custom-gray-dark'>{word.details}</p>
    </div>
  );
}
