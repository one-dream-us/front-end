import { handleConCheckChange } from '@/handlers/myScrap/handleEdits';
import { useSelectedIdList } from '@/hooks/myScrap/useSelectedIdList';

export default function Checkbox({ id }: { id: number }) {
  const { selectedIdList, setSelectedIdList, allIdList, setIsAllChecked } = useSelectedIdList();
  return (
    <label className='h-5 desktop:h-6'>
      <input
        type='checkbox'
        checked={selectedIdList.includes(id)}
        onChange={(e) =>
          handleConCheckChange(e, selectedIdList, id, setSelectedIdList, allIdList, setIsAllChecked)
        }
        className='checkbox desktop:!h-6 desktop:!w-6'
      />
    </label>
  );
}
