import { useCloseModal } from '@/hooks/ui/useCloseModal';
import { useNavigate } from 'react-router-dom';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import ModalButton from './modal/ModalButton';
import ModalOverlay from './modal/ModalOverlay';

export default function LoginConfirmModal() {
  const { isOpen, setIsOpen, isNavigate, setIsNavigate } = useLoginConfirmModalState();
  const navigate = useNavigate();

  const handleCloseModal = () => setIsOpen(false);

  useCloseModal(handleCloseModal);
  return (
    <ModalOverlay isOpen={isOpen}>
      <div className='h-[166px] w-[372px] rounded-[10px] bg-custom-gray-lighter px-[28px] py-[24px]'>
        <div className='mb-[20px] h-[54px] w-[316px]'>
          <h1 className='text-[18px] font-bold leading-[150%] text-custom-black'>
            로그인이 필요한 서비스 입니다. <br />
            로그인 하시겠어요?
          </h1>
        </div>

        <ModalButton
          onClose={() => {
            if (isNavigate) {
              navigate(-2);
            } else {
              setIsNavigate(!isNavigate);
            }
            handleCloseModal();
          }}
          onProceed={() => {
            navigate('/login', { state: { prevPage: location.href } });
            handleCloseModal();
          }}
          buttonText={{ close: '닫기', proceed: '로그인 하기' }}
        />
      </div>
    </ModalOverlay>
  );
}
