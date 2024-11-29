import KakaoLoginButton from '@/components/socialLogin/KakaoLoginButton';
import logo from '@/assets/imgs/main_logo.svg';

export default function Login() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='m-auto w-[343px] md:w-[368px] lg:w-[488px] px-4'>
        <div className='w-full h-14  lg:h-[72px] m-auto mb-44 md:mb-60 lg:mb-56 text-4xl font-extrabold flex justify-center items-center'>
          <img src={logo} className='w-[72px] h-14' alt='' />
          <h1>이게머니</h1>
        </div>
        <KakaoLoginButton />
      </div>
    </div>
  );
}
