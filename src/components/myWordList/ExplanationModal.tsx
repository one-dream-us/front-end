import ModalOverlay from '../common/modal/ModalOverlay';
import { Dispatch, SetStateAction } from 'react';
import closeIcon from '@/assets/p2/close.svg';
import useWordStore from '@/store/useWordStore';

export default function ExplanationModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { description, definition } = useWordStore();

  return (
    <ModalOverlay isOpen={showModal}>
      <section className='relative flex w-[341px] flex-col gap-y-2.5 rounded-[10px] bg-white p-6 text-sm text-custom-gray-dark md:w-[376px]'>
        <button
          type='button'
          className='absolute -top-9 right-0'
          onClick={() => setShowModal(false)}
          aria-label='설명 모달 닫기'
        >
          <img src={closeIcon} alt='설명 모달 닫기' className='h-6 w-6' />
        </button>
        <p className='text-xs leading-120 text-custom-gray-400'>단어 해석</p>
        <p className='font-bold'>{definition}</p>
        <p>{description}</p>
      </section>
    </ModalOverlay>
  );
}
