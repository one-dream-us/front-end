import { handleConCheckChange } from '@/handlers/myScrap/handleEdits';
import { useSelectedIdList } from '@/hooks/myScrap/useSelectedIdList';
import { myScrapMenu } from '@/types/types';

export default function Checkbox({
  id,
  activeMenu = '단어장',
}: {
  id: number;
  activeMenu?: myScrapMenu;
}) {
  const { selectedIdList, setSelectedIdList, allIdList, setIsAllChecked } = useSelectedIdList();
  return (
    <label className='h-5'>
      <input
        type='checkbox'
        checked={selectedIdList.includes(id)}
        onChange={(e) =>
          handleConCheckChange(e, selectedIdList, id, setSelectedIdList, allIdList, setIsAllChecked)
        }
        className={`checkbox ${activeMenu === '콘텐츠' ? 'desktop:!h-[22px] desktop:!w-[22px]' : ''}`}
      />
    </label>
  );
}
