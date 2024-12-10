import { HeaderMenuList } from '@/constants';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import authApi from '@/services/authApi';
import { formatUserName } from '@/utils/formatUserName';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile_main from '@/assets/this_is_money_imgs/img_png/Icon_profile_main.png';
import profile_active from '@/assets/this_is_money_imgs/img_png/icon_profile_active.png';
import { useImgHover } from '@/hooks/ui/useImgHover';
import useLoginModalStore from '@/store/useLoginModalStore';
import { useMyViewCount } from '@/hooks/homeContent/useMyViewCount';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function Drawer({
  showSidebar,
  handleShowSlider,
  pathname,
  logged,
  isLoading,
}: {
  showSidebar: boolean;
  handleShowSlider: () => void;
  pathname: string;
  logged: boolean;
  isLoading: boolean;
}) {
  const { refetch, data: info } = useUserInfoQuery(false);
  const { handleMouseEnter, handleMouseLeave, isHover } = useImgHover();
  const { setIsLoginModalOpen } = useLoginModalStore();
  const { data: viewCount, isLoading: viewCountLoading } = useMyViewCount();
  const { setIsLogin } = useLoginStore();

  useEffect(() => {
    if (logged && !isLoading && !viewCountLoading) {
      refetch();
      setIsLogin(true);
    }
  }, [logged, isLoading, viewCountLoading]);

  return (
    <div
      onClick={handleShowSlider}
      className={`fixed right-0 top-0 z-40 flex h-full w-full items-center justify-center bg-white text-black duration-300 ease-in-out md:hidden ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='relative h-full w-full'>
        <div className='absolute top-[142px] flex items-center justify-start'>
          {logged ? (
            <Link className='mx-[30px]' to={'/profile'}>
              <div className='flex h-[60px] w-[217px] items-center justify-between'>
                <img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`h-[60px] w-[60px] rounded-full`}
                  src={isHover ? profile_active : profile_main}
                  alt='profileImg'
                />
                <div className='flex h-[55px] w-[137px] flex-col items-start justify-between'>
                  <span className='text-[15px] font-medium text-custom-gray-medium'>
                    {formatUserName(info?.email || '')}
                  </span>
                  <div className='flex w-full items-center justify-start gap-x-3'>
                    <span>내가 본 콘텐츠</span>
                    <span>|</span>
                    <span>{viewCount}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`relative ml-8 flex h-[30px] w-[96px] items-center justify-center rounded-xl bg-custom-green-money text-sm font-medium transition-all duration-200 hover:bg-green-hover`}
              >
                로그인
              </button>

              <div className='w-3 overflow-hidden'>
                <div className='h-4 origin-bottom-right rotate-45 transform rounded-sm bg-custom-gray-dark'></div>
              </div>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className='flex-1 rounded-lg bg-custom-gray-dark p-4 text-xs text-white'
              >
                로그인 하고 <span className='text-custom-green-money'>스크랩</span>하기!
              </button>
            </>
          )}
        </div>

        <ul className='absolute top-[262px] flex h-[139px] w-[200px] flex-col items-start justify-between px-8 text-[22px] font-medium text-custom-gray-medium'>
          {HeaderMenuList.map((item) => (
            <Link className={pathname === item.to ? 'text-black' : ''} to={item.to} key={item.id}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>

        {logged && (
          <button
            onClick={authApi.logout}
            className='absolute bottom-[103px] px-8 text-sm text-custom-gray-medium'
          >
            로그아웃
          </button>
        )}
      </div>
    </div>
  );
}
