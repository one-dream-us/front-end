import DeleteModal from './edit/DeleteModal';
import useScrapModalHandlers from '@/hooks/myScrap/useScrapModalHandlers';
import CompleteModal from './edit/CompleteModal';
import { myScrapMenu } from '@/types/types';

export default function ScrapedItemModals({ itemName }: { itemName: myScrapMenu }) {
  const { isDelModalOpen, isComModalOpen, handleDeleteAction } = useScrapModalHandlers(itemName);

  return (
    <>
      {isDelModalOpen && (
        <DeleteModal isOpen={isDelModalOpen} onDelete={handleDeleteAction} itemName={itemName} />
      )}
      {isComModalOpen && <CompleteModal isOpen={isComModalOpen} itemName={itemName} />}
    </>
  );
}
