import { useState } from 'react';
import useLoginModalStore from '@/store/useLoginModalStore';
import { useCloseModal } from '@/hooks/ui/useCloseModal';
import authApi from '@/services/authApi';

export default function LoginModal() {
  const [isChecked, setIsChecked] = useState(false);
  const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore();
  const toggleModal = (isModalOpen: boolean) => setIsLoginModalOpen(isModalOpen);

  useCloseModal(() => setIsLoginModalOpen(false));
  return (
    <>
      {isLoginModalOpen && (
        <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60'>
          <div className='flex h-[230px] w-[343px] flex-col rounded-[10px] bg-custom-gray-lighter px-7 py-6 shadow-login outline-none md:w-[372px]'>
            <h2 className='mb-2 h-[54px] text-lg font-medium text-custom-black'>
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
                className='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor='login-conform' className='select-none text-xs text-custom-gray-dark'>
                [필수] 만 14세 이상입니다.
              </label>
            </div>
            <div className='flex gap-x-2 self-center transition'>
              <button
                onClick={async () => {
                  toggleModal(false);
                  setIsChecked(false);
                  return await authApi.unlinkSocial();
                }}
                className='h-[44px] w-[140px] cursor-pointer whitespace-nowrap rounded bg-custom-gray-300 px-[59px] py-3 text-xs text-custom-gray-600 hover:bg-hover-30'
              >
                닫기
              </button>
              <button
                onClick={async () => {
                  toggleModal(false);
                  return await authApi.joinSocial();
                }}
                className={`h-[44px] w-[140px] whitespace-nowrap rounded py-3 text-xs hover:bg-hover-80 hover:text-green-hover ${isChecked ? 'bg-custom-gray-dark text-custom-green-money' : 'bg-custom-gray-600 text-custom-gray-300'}`}
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
