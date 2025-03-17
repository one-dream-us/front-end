import { lazy, Suspense, useState } from 'react';
// import WithdrawModal from '../withdraw/WithdrawModal';

const WithdrawModal = lazy(() => import('../withdraw/WithdrawModal'));

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
      {showModal && (
        <Suspense fallback={<WithDrawModalSkeleton />}>
          <WithdrawModal closeModal={() => setShowModal(false)} />
        </Suspense>
      )}
    </>
  );
}

export const WithDrawModalSkeleton = () => {
  return (
    <div className='fixed left-0 top-0 z-[1000] flex h-dvh w-full items-center justify-center bg-black bg-opacity-60 px-4'>
      <div className='skeleton relative flex h-[287px] w-[343px] flex-col items-center justify-start rounded-lg px-5 py-4 md:h-[347px] md:w-[372px]'></div>
    </div>
  );
};
