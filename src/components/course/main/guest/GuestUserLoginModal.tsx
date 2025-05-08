import ModalOverlay from '@/components/common/modal/ModalOverlay';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import courseIndexState from '@/store/course/courseStore';
import cardImg from '@/assets/P2_5d/word_card_img.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuestUserLoginModal() {
  const newsIndex = courseIndexState((s) => s.index);
  const { data: isLogin } = useAuthCheckQuery();
  const [closeModal, setCloseModal] = useState(false);

  if (!isLogin && newsIndex === 1) {
    return (
      <ModalOverlay isOpen={!closeModal}>
        <div className='relative -z-10 h-[252px] w-[280px] rounded-xl bg-custom-gray-lighter md:h-[278px] md:w-[320px]'>
          <div className='h-[calc(100%-48px)] w-full rounded-t-xl pt-7'>
            <h1 className='mb-3 text-center font-bold text-custom-gray-dark md:mb-4 md:text-lg'>
              오늘 배운 단어, <br /> 잊기 전에 저장해볼까요?
            </h1>

            <img src={cardImg} alt='modal image' className='m-auto h-[116px] w-[222px]' />
          </div>
          <div className='h-[48px] w-full' onClick={() => setCloseModal(true)}>
            <button className='h-full w-1/2 rounded-bl-xl bg-[#DEDEDE] px-7 py-[11px] text-sm font-bold text-[#626262]'>
              닫기
            </button>
            <Link to={'/login'}>
              <button className='h-full w-1/2 rounded-br-xl bg-custom-gray-dark px-7 py-[11px] text-sm font-bold text-custom-green-money'>
                로그인하기
              </button>
            </Link>
          </div>
        </div>
      </ModalOverlay>
    );
  } else {
    return null;
  }
}
