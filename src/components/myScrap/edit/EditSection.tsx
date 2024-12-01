import EditBtn from './EditBtn';
import SelectionControls from './SelectionControls';
import { useAtomValue } from 'jotai';
import { isEditingAtom } from '@/store/atom';

export default function EditSection() {
  const isEditing = useAtomValue(isEditingAtom);
  return <>{!isEditing ? <EditBtn /> : <SelectionControls />}</>;
}
