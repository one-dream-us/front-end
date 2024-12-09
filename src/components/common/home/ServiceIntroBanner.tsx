import logo from '@/assets/imgs/main_logo.svg';
import { Link } from 'react-router-dom';

export default function ServiceIntroBanner() {
  return (
    <section className='mt-[60px] flex h-[190px] w-full flex-col items-center justify-center bg-custom-gray-dark text-center md:h-[223px] desktop:mt-20'>
      <h1 className='mb-2 text-lg font-medium text-custom-yellow-light'>
        우리의 시작, Our Beginning
      </h1>
      <h3 className='mb-5 text-sm text-custom-gray-400'>
        투자의 기초 용어부터 재미있게 배워보고자 만들어진 <br /> 이게 MONEY, 그 시작이 궁금하다면?
      </h3>
      <Link
        to='https://www.notion.so/myinsightbox/MVP-3d0200e002e644de803c21b842cb2f0f?pvs=4'
        target='_blank'
      >
        <button className='flex h-[40px] w-[155px] items-center justify-center gap-x-1 rounded-3xl bg-white text-sm font-medium transition-all duration-200 hover:opacity-65'>
          <img className='h-[18px] w-[18px]' src={logo} alt='' />팀 노션 바로가기
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </Link>
    </section>
  );
}
