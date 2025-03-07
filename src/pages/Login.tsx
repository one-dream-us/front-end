import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import { Navigate, useLocation } from 'react-router-dom';
import logo_png from '@/assets/imgs_v2/Logo_Icon+text_horx4_for_login.png';
import logo_webp from '@/assets/webps/loginLogo.webp';
import { useEffect } from 'react';
import LoginButton from '@/components/socialLogin/LoginButton';
import ImgContainer from '@/components/common/ImgContainer';

export default function Login() {
  const { data, isLoading } = useAuthCheckQuery();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) return;

    localStorage.setItem('prevPage', state.prevPage);
  }, []);

  if (data && !isLoading) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white'>
      <div className='min-w-[343px] md:w-[368px] desktop:w-[488px]'>
        <ImgContainer
          className='m-auto mb-[236px] h-[47px] w-[195px]'
          alt='login page logo'
          imgs={{ png: logo_png, webp: logo_webp }}
        />

        <div className='flex flex-col gap-y-[12px]'>
          <LoginButton provider='google' />
          <LoginButton provider='kakao' />
          <button
            onClick={() => history.back()}
            className='m-auto w-fit text-[13px] font-light text-custom-gray-500 underline underline-offset-4'
          >
            다음에 할게요
          </button>
        </div>
      </div>
    </div>
  );
}
