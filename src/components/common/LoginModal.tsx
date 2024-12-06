import Modal from 'react-modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

export default function LoginModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) {
  const [isChecked, setIsChecked] = useState(false);
  const toggleModal = (isModalOpen: boolean) => setIsModalOpen(isModalOpen);
  const navigate = useNavigate();
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => toggleModal(false)}
      className='shadow-login flex h-[230px] w-[343px] flex-col rounded-[10px] bg-custom-gray-lighter px-7 py-6 outline-none md:w-[372px]'
      overlayClassName='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center'
    >
      <h2 className='mb-2 h-[54px] text-lg font-bold text-custom-black'>
        <div>로그인이 필요한 서비스입니다.</div>
        <div>로그인하시겠어요?</div>
      </h2>
      <p className='mb-5 text-[10px] text-custom-gray-600'>
        이게머니는 14세 미만의 투자를 권장하지 않습니다.
      </p>
      <div className='mb-5 flex items-center gap-x-1.5'>
        <input
          type='checkbox'
          className='checked:bg-checked h-5 w-5 text-custom-gray-dark checked:appearance-none checked:rounded-[3px]'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <p className='text-xs font-medium text-custom-gray-dark'>[필수] 만 14세 이상입니다.</p>
      </div>
      <div className='flex gap-x-2 self-center'>
        <button
          onClick={() => toggleModal(false)}
          className='h-[44px] w-[140px] whitespace-nowrap rounded bg-custom-gray-300 px-[59px] py-3 text-xs font-medium text-custom-gray-600'
        >
          닫기
        </button>
        <button
          onClick={() => {
            toggleModal(false);
            navigate('/login');
          }}
          className={`h-[44px] w-[140px] whitespace-nowrap rounded py-3 text-xs font-medium ${isChecked ? 'bg-custom-gray-dark text-primary' : 'cursor-not-allowed bg-custom-gray-600 text-custom-gray-300'}`}
          disabled={!isChecked}
        >
          로그인 하기
        </button>
      </div>
    </Modal>
  );
}
