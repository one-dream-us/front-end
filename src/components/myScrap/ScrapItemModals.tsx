import DeleteModal from './edit/DeleteModal';
import useScrapModalHandlers from '@/hooks/myScrap/useScrapModalHandlers';
import CompleteModal from './edit/CompleteModal';
import { myScrapMenu } from '@/types/types';

export default function ScrapedItemModals({
  itemName,
  refetch,
}: {
  itemName: myScrapMenu;
  refetch: () => void;
}) {
  const { isDelModalOpen, isComModalOpen, handleDeleteAction } = useScrapModalHandlers(
    itemName,
    refetch,
  );

  return (
    <>
      {isDelModalOpen && (
        <DeleteModal isOpen={isDelModalOpen} onDelete={handleDeleteAction} itemName={itemName} />
      )}
      {isComModalOpen && <CompleteModal isOpen={isComModalOpen} itemName={itemName} />}
    </>
  );
}
