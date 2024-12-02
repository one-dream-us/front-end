import { handleCheckboxChange } from '@/handlers/myScrap/handleEdits';
import { useSelectedIdList } from '@/hooks/myScrap/useSelectedIdList';

export default function Checkbox({ id }: { id: number }) {
  const { selectedIdList, setSelectedIdList, allIdList, setIsAllChecked } = useSelectedIdList();
  return (
    <input
      type='checkbox'
      checked={selectedIdList.includes(id)}
      onChange={(e) =>
        handleCheckboxChange(e, selectedIdList, id, setSelectedIdList, allIdList, setIsAllChecked)
      }
      className='checkbox'
    />
  );
}
