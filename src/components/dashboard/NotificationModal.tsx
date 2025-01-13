import ModalOverlay from '../common/modal/ModalOverlay';
import ModalButton from '../common/modal/ModalButton';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import scrapIcon from '@/assets/p2/icon_bookmark_grey.png';
import bookmarkIcon from '@/assets/p2/icon_bookmark_dark.png';

export default function NotificationModal({
  modalOpen,
  isKeynote,
  setModalOpen,
}: {
  modalOpen: boolean;
  isKeynote: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const proceedText = isKeynote ? '단어장 확인하기' : '머니뉴스 보기';
  const navigate = useNavigate();
  const title = isKeynote ? '핵심노트가 부족해요!' : '스크랩이 필요해요!';
  return (
    <ModalOverlay isOpen={modalOpen}>
      <section className='flex h-[124px] w-[343px] flex-col items-center gap-y-4 rounded-[10px] bg-white p-5 md:w-[375px]'>
        <h2 className='flex items-center gap-x-1 text-sm font-medium leading-170 text-custom-gray-dark'>
          <img
            src={isKeynote ? bookmarkIcon : scrapIcon}
            alt={isKeynote ? '핵심 노트' : '스크랩'}
            className='h-5 w-5'
          />
          {title}
        </h2>
        <ModalButton
          onClose={() => setModalOpen(false)}
          onProceed={() => {
            if (isKeynote) navigate('/my-word-list?tab="bookmark"');
            else navigate('/'); // 콘텐츠 목록 랜딩
          }}
          buttonText={{ close: '닫기', proceed: proceedText }}
        />
      </section>
    </ModalOverlay>
  );
}
