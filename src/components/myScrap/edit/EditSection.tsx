import EditBtn from './EditBtn';
import SelectionControls from './SelectionControls';
import useMyScrapStore from '@/store/useMyScrapStore';

export default function EditSection() {
  const isEditing = useMyScrapStore((state) => state.isEditing);

  return <>{!isEditing ? <EditBtn /> : <SelectionControls />}</>;
}
