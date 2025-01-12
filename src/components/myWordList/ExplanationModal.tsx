import ModalOverlay from '../common/modal/ModalOverlay';
import { Dispatch, SetStateAction } from 'react';
import closeIcon from '@/assets/p2/close.svg';

export default function ExplanationModal({
  showModal,
  setShowModal,
  description,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  description: string;
}) {
  return (
    <ModalOverlay isOpen={showModal}>
      <section className='relative flex w-[341px] flex-col gap-y-2.5 rounded-[10px] bg-white p-6 md:w-[376px]'>
        <button
          type='button'
          className='absolute -top-9 right-0'
          onClick={() => setShowModal(false)}
          aria-label='설명 모달 닫기'
        >
          <img src={closeIcon} alt='설명 모달 닫기' className='h-6 w-6' />
        </button>
        <p className='text-xs leading-120 text-custom-gray-400'>단어 해석</p>
        <p className='text-sm font-bold text-custom-gray-dark'>{description}</p>
      </section>
    </ModalOverlay>
  );
}
