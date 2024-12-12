import { Link, useSearchParams } from 'react-router-dom';
import kakao_logo from '@/assets/imgs/kakao_logo.png';
import useLoginModalStore from '@/store/useLoginModalStore';
import { useEffect } from 'react';

export default function KakaoLoginButton() {
  const [searchParams] = useSearchParams();
  const isNewUser = searchParams.get('isNewUser');
  const { setIsLoginModalOpen } = useLoginModalStore();

  useEffect(() => {
    if (isNewUser) {
      setIsLoginModalOpen(true);
    }
  }, [isNewUser]);

  return (
    <div className='relative w-full'>
      <Link
        to={`${import.meta.env.VITE_BACKEND_SERVER_URL}oauth2/authorization/kakao?redirectUrl=${location.origin}/login`}
      >
        <button className='mb-2 mt-[236px] flex h-11 w-full items-center justify-center rounded-md bg-custom-kakao-yellow text-black transition-all duration-200 hover:bg-yellow-400 md:mt-[285px] desktop:mt-[258px]'>
          <img className='h-[18px] w-[18px]' src={kakao_logo} alt='kakao logo' />
          <div className='h-[23px] w-[254px] font-semibold'>카카오 로그인</div>
        </button>
      </Link>

      <button
        onClick={() => history.back()}
        className='absolute left-0 right-0 m-auto w-24 p-1 text-sm text-custom-gray underline underline-offset-4'
      >
        다음에 할게요
      </button>
    </div>
  );
}
