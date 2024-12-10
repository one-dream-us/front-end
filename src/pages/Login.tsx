import KakaoLoginButton from '@/components/socialLogin/KakaoLoginButton';
// import logo from '@/assets/imgs/main_logo.svg';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import { Navigate, useLocation } from 'react-router-dom';
import useLoginModalStore from '@/store/useLoginModalStore';
import logo from '@/assets/imgs_v2/Logo_Icon+text_horx4_for_login.png';

export default function Login() {
  const { data, isLoading } = useAuthCheckQuery();
  const { loginConfirmed } = useLoginModalStore();

  const {
    state: { prevPage },
  } = useLocation();

  if (data && !isLoading) {
    return <Navigate to={'/'} />;
  }
  if (!loginConfirmed) return <Navigate to={'/'} />;
  return (
    <div className='absolute left-0 top-0 flex h-screen w-full'>
      <div className='flex w-full flex-1 items-center justify-center bg-white'>
        <div className='m-auto w-[343px] px-4 md:w-[368px] desktop:w-[488px]'>
          {/* <div className='m-auto mb-44 flex h-14 w-full items-center justify-center text-4xl font-extrabold md:mb-60 desktop:mb-56 desktop:h-[72px]'> */}
          <img src={logo} className='m-auto h-[47px] w-[195px]' alt='' />
          {/* </div> */}
          <KakaoLoginButton prevPage={prevPage} />
        </div>
      </div>
    </div>
  );
}
