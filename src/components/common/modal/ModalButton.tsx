export default function ModalButton({
  onClose,
  onProceed,
  isChecked,
  buttonText,
}: {
  onClose: () => void;
  onProceed: () => void;
  isChecked?: boolean;
  buttonText: { close: string; proceed: string };
}) {
  return (
    <div className='flex h-[44px] w-full gap-x-2 self-center text-sm font-bold transition'>
      <button
        onClick={onClose}
        className='h-[44px] w-1/2 cursor-pointer whitespace-nowrap rounded bg-custom-gray-300 px-[59px] py-3 text-custom-gray-dark transition-all duration-200 hover:bg-hover-30'
      >
        {buttonText.close}
      </button>

      <button
        onClick={onProceed}
        className={`h-[44px] w-1/2 whitespace-nowrap rounded py-3 transition-all duration-200 ${isChecked === false ? 'bg-custom-gray-600 text-custom-gray-300' : 'bg-custom-gray-dark text-custom-green-money hover:bg-hover-80 hover:text-green-hover'}`}
      >
        {buttonText.proceed}
      </button>
    </div>
  );
}
