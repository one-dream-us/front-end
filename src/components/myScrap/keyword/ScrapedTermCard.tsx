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
    <article
      className={`flex flex-col gap-y-2 rounded-[10px] bg-gray-300 px-4 pb-[21px] pt-[30px] ${
        isExpanded ? 'h-auto' : 'h-[119px]'
      }`}
    >
      <div className='flex h-6 justify-between'>
        <div className='flex items-center gap-x-2'>
          {isEditing && <Checkbox id={id} />}
          <span className='h-full whitespace-nowrap text-sm font-bold leading-6'>{term}</span>
        </div>
        <IconBtn isExpanded={isExpanded} id={id} setExpandedItems={setExpandedItems} />
      </div>
      <p
        className={`text-xs leading-5 ${
          isExpanded ? 'h-auto overflow-y-visible' : 'line-clamp-2 h-9 overflow-y-hidden'
        }`}
      >
        {definition}
      </p>
      {isExpanded && <ViewAgainBtn id={id} />}
    </article>
  );
}
