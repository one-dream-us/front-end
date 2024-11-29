import { Link } from 'react-router-dom';

export default function KakaoLoginButton() {
  return (
    <div className='relative w-full'>
      <Link to={`${import.meta.env.VITE_BACKEND_SERVER_URL}/oauth2/authentication/kakao`}>
        <button className='flex items-center justify-center w-full mb-2 text-black transition-all duration-200 rounded-md bg-custom-kakao-yellow h-11 hover:bg-yellow-400'>
          <img
            className='w-[18px] h-[18px]'
            src='https://www.svgrepo.com/show/368252/kakao.svg'
            alt='kakao logo'
          />
          <div className='w-[254px] h-[23px] font-semibold'>카카오 로그인</div>
        </button>
      </Link>
      <Link to={'/'}>
        <button className='absolute left-0 right-0 w-24 p-1 m-auto text-sm underline text-custom-gray underline-offset-4'>
          다음에 할게요
        </button>
      </Link>
    </div>
  );
}
