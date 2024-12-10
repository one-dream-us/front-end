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
    <article className='flex w-full flex-col gap-y-2 rounded-[10px] border border-custom-gray-200 p-4 text-custom-gray-dark md:min-w-[631px] desktop:w-[722px]'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-2'>
          {isEditing && <Checkbox id={detail.scrapId} />}
          <span className='font-medium md:text-sm'>{detail.term}</span>
        </div>
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
