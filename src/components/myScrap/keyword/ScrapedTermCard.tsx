import useMyScrapStore from '@/store/useMyScrapStore';
import Checkbox from '../Checkbox';
import IconBtn from './IconBtn';
import ViewAgainBtn from './ViewAgainBtn';

export default function ScrapedTermCard({
  isExpanded,
  setExpandedItems,
  id,
  term,
  definition,
}: {
  isExpanded: boolean;
  setExpandedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  id: number;
  term: string;
  definition: string;
}) {
  const isEditing = useMyScrapStore((state) => state.isEditing);

  return (
    <article className='flex w-full flex-col gap-y-2 rounded-[10px] border border-custom-gray-200 p-4 text-custom-gray-dark md:min-w-[631px] desktop:w-[722px]'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-2'>
          {isEditing && <Checkbox id={id} />}
          <span className='font-bold md:text-sm'>{term}</span>
        </div>
        <IconBtn isExpanded={isExpanded} id={id} setExpandedItems={setExpandedItems} />
      </div>
      <p className={`text-xs leading-5 ${isExpanded ? 'block' : 'hidden'} md:block`}>
        {definition}
      </p>
      {isExpanded && <ViewAgainBtn id={1} />}
    </article>
  );
}
