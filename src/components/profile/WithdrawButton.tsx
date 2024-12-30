import { useState } from 'react';
import WithdrawModal from '../withdraw/WithdrawModal';

export default function WithdrawButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {' '}
      <button
        onClick={() => setShowModal(true)}
        className='m-auto flex text-[12px] text-custom-gray-600 underline underline-offset-2 desktop:m-0 desktop:ml-auto desktop:mt-[100px]'
      >
        회원탈퇴
      </button>
      {showModal && <WithdrawModal closeModal={() => setShowModal(false)} />}
    </>
  );
}
