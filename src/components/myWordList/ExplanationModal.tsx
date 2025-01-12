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
        <p className='font-bold'>{description}</p>
        <p>
          이 지수는 환전처럼 환율에 영향을 받아요. 지수가 낮아지면 외국인 투자자들은 환율 변동으로
          인한 손실을 우려해 한국 주식을 팔고 자금을 회수하기 시작해요.
        </p>
      </section>
    </ModalOverlay>
  );
}
