import { toggleExpandDef } from '@/utils/myScrapUtils';
import chevronDownIcon from '@/assets/icons/icon_arrowdoun.svg';
import chevronUpIcon from '@/assets/icons/icon_arrowup.svg';

export default function IconBtn({
  isExpanded,
  id,
  setExpandedItems,
}: {
  isExpanded: boolean;
  id: number;
  setExpandedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}) {
  return (
    <button type='button' onClick={() => toggleExpandDef(id, setExpandedItems)}>
      <img
        src={isExpanded ? chevronUpIcon : chevronDownIcon}
        alt={isExpanded ? '단어 뜻 닫기' : '단어 뜻 보기'}
        className='h-full w-6'
      />
    </button>
  );
}
