import useMyScrapStore from '@/store/useMyScrapStore';
import Checkbox from '../Checkbox';
import IconBtn from './IconBtn';
import ViewAgainBtn from './ViewAgainBtn';
import { ScrapedTermData } from '@/types/interface';

export default function ScrapedTermCard({
  isExpanded,
  setExpandedItems,
  detail,
}: {
  isExpanded: boolean;
  setExpandedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  detail: ScrapedTermData;
}) {
  const isEditing = useMyScrapStore((state) => state.isEditing);

  return (
    <article className='flex w-full flex-col gap-y-2 rounded-[10px] border border-custom-gray-200 p-4 text-custom-gray-dark md:w-[631px] desktop:w-[722px]'>
      <div className='flex gap-x-2 items-center h-6'>
        {isEditing && <Checkbox id={detail.scrapId} />}
        <span className='font-medium md:text-sm'>{detail.term}</span>
        <IconBtn isExpanded={isExpanded} id={detail.scrapId} setExpandedItems={setExpandedItems} />
      </div>
      <p className={`text-xs leading-5 ${isExpanded ? 'block' : 'hidden'} md:block`}>
        {detail.details}
      </p>
      {isExpanded && (
        <ViewAgainBtn contentId={detail.contentId} dictionaryId={detail.dictionaryId} />
      )}
    </article>
  );
}
