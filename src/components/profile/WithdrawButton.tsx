import { useState } from 'react';
import WithdrawModal from '../withdraw/WithdrawModal';

export default function WithdrawButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='m-auto flex w-fit items-center justify-center text-[12px] text-custom-gray-medium underline underline-offset-4'
      >
        회원 탈퇴
      </button>
      {showModal && <WithdrawModal closeModal={() => setShowModal(false)} />}
    </>
  );
}
