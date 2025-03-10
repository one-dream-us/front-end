import useLoginModalStore from '@/store/useLoginModalStore';
import createLoginUrl from '@/utils/createLoginUrl';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const GOOGLE_LOGO = `https://cdn.iconscout.com/icon/free/png-256/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp&w=128`;
const KAKAO_LOGO = `https://www.svgrepo.com/show/368252/kakao.svg`;

export default function LoginButton({ provider }: { provider: 'kakao' | 'google' }) {
  const [searchParams] = useSearchParams();
  const isNewUser = searchParams.get('isNewUser');
  const { setIsLoginModalOpen } = useLoginModalStore();

  const isKakao = provider === 'kakao';

  useEffect(() => {
    if (isNewUser) {
      setIsLoginModalOpen(true);
    }
  }, [isNewUser]);
  return (
    <Link
      to={createLoginUrl(provider)}
      className={`relative flex h-[45px] w-full items-center justify-center rounded-[6px] transition-all duration-200 hover:bg-opacity-50 ${isKakao ? 'bg-custom-kakao-yellow' : 'bg-slate-100'}`}
    >
      <img
        className='absolute left-[35px] size-[18px] md:left-[48px] desktop:left-[108px]'
        src={isKakao ? KAKAO_LOGO : GOOGLE_LOGO}
        alt='social login image'
      />

      <span className='text-[15px] font-semibold'>{isKakao ? '카카오' : '구글'} 로그인</span>
    </Link>
  );
}
