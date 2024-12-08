import DeleteModal from './edit/DeleteModal';
import useScrapModalHandlers from '@/hooks/myScrap/useScrapModalHandlers';
import { myScrapMenu } from '@/types/types';

export default function ScrapedItemModals({ activeMenu }: { activeMenu: myScrapMenu }) {
  const { isDelModalOpen, handleDeleteAction } = useScrapModalHandlers(activeMenu);

  return (
    <>
      {isDelModalOpen && (
        <DeleteModal
          isOpen={isDelModalOpen}
          onDelete={handleDeleteAction}
          activeMenu={activeMenu}
        />
      )}
    </>
  );
}
