import { useCloseModal } from '@/hooks/ui/useCloseModal';
import authApi from '@/services/authApi';
import ModalButton from './modal/ModalButton';
import ModalOverlay from './modal/ModalOverlay';
import useLoginModalHandler from '@/hooks/ui/useLoginModalHandler';

export default function LoginModal() {
  const { isChecked, isLoginModalOpen, setIsChecked, closeModal } = useLoginModalHandler();

  useCloseModal(() => closeModal());

  const prevPage = localStorage.getItem('prevPage') ?? location.origin;
  return (
    <ModalOverlay isOpen={isLoginModalOpen}>
      <div className='flex h-[203px] w-[343px] flex-col rounded-[10px] bg-custom-gray-lighter px-7 py-6 shadow-login outline-none md:w-[372px]'>
        <h2 className='mb-2 h-[54px] text-lg font-bold text-custom-black'>
          회원가입이 거의 다 되었어요!
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
          <label
            htmlFor='login-conform'
            className='select-none text-xs font-medium text-custom-gray-dark'
          >
            [필수] 만 14세 이상입니다.
          </label>
        </div>

        <ModalButton
          onClose={async () => {
            closeModal();
            setIsChecked(false);
            return await authApi.unlinkSocial(prevPage);
          }}
          onLogin={async () => {
            closeModal();
            return await authApi.joinSocial(prevPage);
          }}
          isChecked={isChecked}
        />
      </div>
    </ModalOverlay>
  );
}
