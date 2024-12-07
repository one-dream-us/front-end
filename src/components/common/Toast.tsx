import { useAutoCloseToast } from '@/hooks/common/useAutoCloseToast';
import { getToastStyles } from '@/utils/commonUtils';
import useToastStore from '@/store/useToastStore';

export default function Toast() {
  const { message, type, isVisible, hideToast } = useToastStore();
  useAutoCloseToast();

  if (!isVisible) return null;
  const toastStyles = getToastStyles(type);
  if (!toastStyles) return null;
  const { alt, icon, size, textColor } = toastStyles;

  return (
    <div
      className={`fixed bottom-3 right-4 z-[700] h-[42px] w-[343px] transform rounded-[10px] bg-custom-gray-dark px-5 py-3 opacity-95 shadow-custom transition-transform md:right-6 desktop:bottom-6 ${
        isVisible ? 'animate-toast-slide-in' : 'animate-toast-slide-out'
      }`}
    >
      <div className='flex h-[18px] items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <img src={icon} alt={alt} className={`${size}`} />
          <p className={`${textColor} text-xs`}>{message}</p>
        </div>
        <button onClick={hideToast} className='text-xs font-medium text-custom-gray-300'>
          닫기
        </button>
      </div>
    </div>
  );
}
