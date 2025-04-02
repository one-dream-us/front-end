import ModalOverlay from '../common/modal/ModalOverlay';
import ModalButton from '../common/modal/ModalButton';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import bookmarkIcon from '@/assets/P2_5d/icon_Keynote.svg';

export default function NotificationModal({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  return (
    <ModalOverlay isOpen={modalOpen}>
      <section className='flex h-[124px] w-[343px] flex-col items-center gap-y-4 rounded-[10px] bg-white p-5 md:w-[375px]'>
        <h2 className='flex h-6 items-center gap-x-1 text-sm font-medium text-custom-gray-dark'>
          <img src={bookmarkIcon} alt='북마크 아이콘' className='h-5 w-5' />
          북마크가 부족해요!
        </h2>
        <ModalButton
          onClose={() => setModalOpen(false)}
          onProceed={() => navigate('/news-list')}
          buttonText={{ close: '닫기', proceed: '머니뉴스 보기' }}
        />
      </section>
    </ModalOverlay>
  );
}
