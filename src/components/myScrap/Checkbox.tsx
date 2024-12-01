import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { selectedIdListAtom, allIdListAtom, isAllCheckedAtom } from '@/store/atom';
import { handleCheckboxChange } from '@/handlers/myScrap/handleEdits';

export default function Checkbox({ id }: { id: number }) {
  const [selectedIdList, setSelectedIdList] = useAtom(selectedIdListAtom);
  const allIdList = useAtomValue(allIdListAtom);
  const setIsAllChecked = useSetAtom(isAllCheckedAtom);

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
