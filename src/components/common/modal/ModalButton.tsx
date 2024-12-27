export default function ModalButton({
  onClose,
  onLogin,
  isChecked,
}: {
  onClose: () => void;
  onLogin: () => void;
  isChecked?: boolean;
}) {
  return (
    <div className='flex h-[44px] w-full gap-x-2 self-center transition'>
      <button
        onClick={onClose}
        className='h-[44px] w-1/2 cursor-pointer whitespace-nowrap rounded bg-custom-gray-300 px-[59px] py-3 text-xs font-medium text-custom-gray-600 transition-all duration-200 hover:bg-hover-30'
      >
        닫기
      </button>

      <button
        onClick={onLogin}
        className={`h-[44px] w-1/2 whitespace-nowrap rounded py-3 text-xs font-medium transition-all duration-200 ${isChecked === false ? 'bg-custom-gray-600 text-custom-gray-300' : 'bg-custom-gray-dark text-custom-green-money hover:bg-hover-80 hover:text-green-hover'}`}
      >
        로그인 하기
      </button>
    </div>
  );
}
