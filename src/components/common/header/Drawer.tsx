import { HeaderMenuList } from '@/constants/constants';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import authApi from '@/services/authApi';
import { formatUserName } from '@/utils/formatUserName';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useMyViewCount } from '@/hooks/homeContent/useMyViewCount';
import { useLoginStore } from '@/store/useIsLoginStore';
import profileActvie from '@/assets/imgs_v2/icon_profile_active.png';
import login_chat_bubble from '@/assets/imgs_v2/login_bubble_.svg';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';

export default function Drawer({
  showSidebar,
  handleShowSlider,
  logged,
  // isLoading,
}: {
  showSidebar: boolean;
  handleShowSlider: () => void;
  logged: boolean;
  // isLoading: boolean;
}) {
  const { refetch, data: info } = useUserInfoQuery(false);
  const { isLoading } = useAuthCheckQuery();
  // const { data: viewCount, isLoading: viewCountLoading } = useMyViewCount();
  const { setIsLogin } = useLoginStore();
  const { pathname } = useLocation();

  useEffect(() => {
    if (logged && !isLoading) {
      refetch();
      setIsLogin(true);
    }
  }, [logged, isLoading]);

  return (
    <div
      onClick={handleShowSlider}
      className={`fixed right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-white text-black duration-300 ease-in-out md:hidden ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='relative h-full w-full px-8'>
        <div className='absolute top-[142px] flex items-center justify-start'>
          {logged ? (
            <Link to={'/profile'}>
              <div className='flex h-[60px] w-[217px] items-center justify-between'>
                <img
                  className={`h-[60px] w-[60px] rounded-full`}
                  src={profileActvie}
                  alt='profileImg'
                />
                <div className='flex h-[55px] w-[137px] flex-col items-start justify-between'>
                  <span className='text-[15px] font-medium text-custom-gray-medium'>
                    {formatUserName(info?.email || '')}
                  </span>
                  <div className='flex w-full items-center justify-start gap-x-3'>
                    <span>내가 본 콘텐츠</span>
                    <span>|</span>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to={'/login'}
              className='flex cursor-pointer items-center justify-start gap-x-[14px]'
              state={{ prevPage: location.href }}
            >
              <button
                className={`relative flex h-[30px] w-[96px] items-center justify-center rounded-[10px] bg-custom-green-money text-sm font-medium transition-all duration-200 hover:bg-green-hover`}
              >
                로그인
              </button>

              <img src={login_chat_bubble} alt='' />
            </Link>
          )}
        </div>

        <ul className='absolute top-[262px] flex h-[139px] w-[200px] flex-col items-start justify-between text-[22px] font-medium text-custom-gray-medium'>
          {HeaderMenuList.map((item) => (
            <li key={item.id}>
              <Link
                className={
                  item.to === pathname || pathname.includes(item.sub || 'sub') ? 'text-black' : ''
                }
                to={item.to}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {logged && (
          <button
            onClick={authApi.logout}
            className='absolute bottom-[103px] text-sm text-custom-gray-medium'
          >
            로그아웃
          </button>
        )}
      </div>
    </div>
  );
}
