import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginModalStore from '@/store/useLoginModalStore';

export default function LoginModal() {
  const [isChecked, setIsChecked] = useState(false);
  const { isLoginModalOpen, setLoginConfirmed, setIsLoginModalOpen } = useLoginModalStore();
  const toggleModal = (isModalOpen: boolean) => setIsLoginModalOpen(isModalOpen);
  const navigate = useNavigate();

  return (
    <>
      {isLoginModalOpen && (
        <div className='fixed inset-0 z-[500] flex items-center justify-center bg-black bg-opacity-60'>
          <div className='flex h-[230px] w-[343px] flex-col rounded-[10px] bg-custom-gray-lighter px-7 py-6 shadow-login outline-none md:w-[372px]'>
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
                id='login-conform'
                className='h-5 w-5 text-custom-gray-dark checked:appearance-none checked:rounded-[3px] checked:bg-checked'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor='login-conform'
                className='select-none text-xs font-medium text-custom-gray-dark'
              >
                [필수] 만 14세 이상입니다.
              </label>
            </div>
            <div className='flex gap-x-2 self-center'>
              <button
                onClick={() => toggleModal(false)}
                className='h-[44px] w-[140px] cursor-pointer whitespace-nowrap rounded bg-custom-gray-300 px-[59px] py-3 text-xs font-medium text-custom-gray-600 hover:bg-hover-30'
              >
                닫기
              </button>
              <button
                onClick={() => {
                  toggleModal(false);
                  setLoginConfirmed();
                  navigate('/login');
                }}
                className={`h-[44px] w-[140px] whitespace-nowrap rounded py-3 text-xs font-medium hover:bg-hover-80 hover:text-green-hover ${isChecked ? 'bg-custom-gray-dark text-custom-green-money' : 'bg-custom-gray-600 text-custom-gray-300'}`}
                disabled={!isChecked}
              >
                로그인 하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
