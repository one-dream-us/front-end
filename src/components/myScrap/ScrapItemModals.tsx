import DeleteModal from './edit/DeleteModal';
import useScrapModalHandlers from '@/hooks/myScrap/useScrapModalHandlers';

import { myScrapMenu } from '@/types/types';

export default function ScrapedItemModals({ itemName }: { itemName: myScrapMenu }) {
  const { isDelModalOpen, handleDeleteAction } = useScrapModalHandlers(itemName);

  return (
    <>
      {isDelModalOpen && (
        <DeleteModal isOpen={isDelModalOpen} onDelete={handleDeleteAction} itemName={itemName} />
      )}
    </>
  );
}
