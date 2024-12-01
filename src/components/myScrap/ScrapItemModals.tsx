import DeleteModal from './edit/DeleteModal';
import { handleDelete } from '@/handlers/myScrap/handleDelete';
import CompleteModal from './edit/CompleteModal';
import { myScrapMenu } from '@/types/types';
import { useAtom, useAtomValue } from 'jotai';
import { isDelModalOpenAtom, isComModalOpenAtom, selectedIdListAtom } from '@/store/atom';
import useDeleteScrapCon from '@/hooks/myScrap/useDeleteScrapCon';
import useDeleteScrapTerm from '@/hooks/myScrap/useDeleteScrapTerm';

export default function ScrapedItemModals({
  itemName,
  refetch,
}: {
  itemName: myScrapMenu;
  refetch: () => void;
}) {
  const [isDelModalOpen, setIsDelModalOpen] = useAtom(isDelModalOpenAtom);
  const [isComModalOpen, setIsComModalOpen] = useAtom(isComModalOpenAtom);
  const selectedIdList = useAtomValue(selectedIdListAtom);
  const { deleteScrapContent } = useDeleteScrapCon({
    selectedIdList,
    refetch,
  });
  const { deleteScrapTerm } = useDeleteScrapTerm({
    selectedIdList,
    refetch,
  });
  return (
    <>
      {isDelModalOpen && (
        <DeleteModal
          isOpen={isDelModalOpen}
          onDelete={() => {
            handleDelete(itemName, deleteScrapContent, deleteScrapTerm);
            setIsDelModalOpen(false);
            setIsComModalOpen(true);
          }}
          itemName={itemName}
        />
      )}
      {isComModalOpen && <CompleteModal isOpen={isComModalOpen} itemName={itemName} />}
    </>
  );
}
