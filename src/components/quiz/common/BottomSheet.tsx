import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function BottomSheet({
  imgSrc,
  titleText,
  buttonText,
  buttonTextColor,
  handleButtonClick,
}: {
  imgSrc: string;
  titleText: string;
  buttonText: string;
  buttonTextColor: 'text-custom-green-money' | 'text-custom-gray-lighter';
  handleButtonClick: () => void;
}) {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      exit={{ y: 150 }}
      transition={{ duration: 0.4 }}
      className='bottom-sheet-shadow fixed bottom-0 left-0 h-[180px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-custom-gray-lighter px-4 desktop:right-0 desktop:m-auto desktop:max-w-[812px]'
    >
      <div className='m-auto max-w-[375px]'>
        <div className='mb-[20px] mt-[33px] flex items-center justify-start gap-x-2 md:justify-center'>
          <img className={`size-${pathname === '/quiz' ? '6' : '9'}`} src={imgSrc} alt='correct' />
          <h1 className='text-[22px] font-bold text-custom-gray-dark'>{titleText}</h1>
        </div>

        <button
          onClick={handleButtonClick}
          className={`h-[54px] w-full rounded-[10px] bg-custom-gray-dark text-[16px] font-bold leading-170 transition-all duration-200 hover:bg-custom-gray-medium ${buttonTextColor}`}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}
