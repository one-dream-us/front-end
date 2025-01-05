import { motion } from 'framer-motion';

export default function ProgressBar({ index }: { index: number }) {
  return (
    <div className='m-auto mb-[24px] mt-[40px] grid h-[10px] w-[343px] grid-cols-5 grid-rows-1 gap-x-1 md:w-[353px] desktop:my-[40px] desktop:h-[12px] desktop:w-[812px]'>
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className='relative'>
          <motion.div className='absolute left-0 top-0 z-10 h-full w-full rounded-[58px] bg-custom-gray-300'></motion.div>
          <motion.div
            initial={{ width: '0px' }}
            animate={{
              width: item <= index ? '100%' : '0px',
              backgroundColor: item <= index ? '#06EA82' : '',
              transformOrigin: 'left',
              transition: { duration: 0.5 },
            }}
            className='absolute left-0 top-0 z-20 h-full w-full rounded-[58px]'
          ></motion.div>
        </div>
      ))}
    </div>
  );
}
