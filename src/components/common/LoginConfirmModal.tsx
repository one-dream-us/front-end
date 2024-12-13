import { useCloseModal } from '@/hooks/ui/useCloseModal';
import { useNavigate } from 'react-router-dom';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';

export default function LoginConfirmModal() {
  const { isOpen, setIsOpen, isNavigate, setIsNavigate } = useLoginConfirmModalState();
  const navigate = useNavigate();

  const handleCloseModal = () => setIsOpen(false);

  useCloseModal(handleCloseModal);
  return (
    <>
      {isOpen && (
        <div className='fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-black bg-opacity-60'>
          <div className='h-[166px] w-[372px] rounded-[10px] bg-custom-gray-lighter px-[28px] py-[24px]'>
            <div className='mb-[20px] h-[54px] w-[316px]'>
              <h1 className='text-[18px] font-bold leading-[150%] text-custom-black'>
                로그인이 필요한 서비스 입니다. <br />
                로그인 하시겠어요?
              </h1>
            </div>

            <div className='flex h-[44px] w-[316px] gap-x-2 self-center transition'>
              <button
                onClick={() => {
                  if (isNavigate) {
                    navigate(-2);
                  } else {
                    setIsNavigate(!isNavigate);
                  }
                  handleCloseModal();
                }}
                className='h-[44px] w-[154px] cursor-pointer whitespace-nowrap rounded bg-custom-gray-300 px-[59px] py-3 text-xs text-custom-gray-600 transition-all duration-200 hover:bg-hover-30'
              >
                닫기
              </button>

              <button
                onClick={() => {
                  navigate('/login', { state: { prevPage: location.href } });
                  handleCloseModal();
                }}
                className={`h-[44px] w-[154px] whitespace-nowrap rounded bg-custom-gray-dark py-3 text-xs text-custom-green-money transition-all duration-200 hover:bg-hover-80 hover:text-green-hover`}
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
