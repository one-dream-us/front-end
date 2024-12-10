import exit_png from '@/assets/this_is_money_imgs/img_png/exit.png';
import { useCloseModal } from '@/hooks/ui/useCloseModal';
export default function WithdrawModal({
  closeModal,
  handleWithdraw,
}: {
  closeModal: () => void;
  handleWithdraw: () => Promise<void>;
}) {
  useCloseModal(closeModal);
  return (
    <div className='fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center bg-black bg-opacity-60 px-4'>
      <div className='relative flex h-[287px] w-[343px] flex-col items-center justify-start rounded-lg bg-white px-5 py-4 md:h-[347px] md:w-[372px]'>
        <div className='h-[205px] w-[175px] md:h-[265px] md:w-[322px]'>
          {/* <ImgContainer
            imgs={{ png: exit_png, webp: exit_webp }}
            className='m-auto mb-5 h-[120px] w-full md:h-[180px] md:w-[166px]'
          /> */}
          <img
            className='mb-5 h-[120px] w-full md:h-[180px] md:max-w-[332px]'
            src={exit_png}
            alt=''
          />
          <div className='h-[65px] w-full text-center'>
            <h1 className='mb-3 text-sm font-medium text-custom-gray-dark'>정말 탈퇴하시겠어요?</h1>
            <span className='text-xs leading-[150%] text-custom-gray-dark'>
              탈퇴하면 계정 정보가 영구 삭제되고,
              <br /> 저장된 스크랩도 다시 볼 수 없어요!
            </span>
          </div>
        </div>
        <div className='mt-auto flex h-[30px] w-[303px] items-center justify-between md:mt-auto'>
          <button
            onClick={closeModal}
            className='h-[30px] w-[147px] rounded-[4px] bg-custom-gray-300 text-xs text-custom-gray-600 hover:bg-custom-gray-light-h'
          >
            돌아가기
          </button>
          <button
            onClick={async () => await handleWithdraw()}
            className='h-[30px] w-[147px] rounded-[4px] bg-custom-gray-dark text-xs text-custom-green-money hover:opacity-80'
          >
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
}
