import { HeaderMenuList } from '@/constants';
import authApi from '@/services/authApi';
import { UserInfoData } from '@/types/interface';
import { Link } from 'react-router-dom';

export default function Drawer({
  showSidebar,
  handleShowSlider,
  pathname,
  data,
}: {
  showSidebar: boolean;
  handleShowSlider: () => void;
  pathname: string;
  data: UserInfoData | undefined;
}) {
  return (
    <div
      onClick={handleShowSlider}
      className={`fixed right-0 top-0 z-40 flex h-full w-full items-center justify-center bg-white text-black duration-300 ease-in-out md:hidden ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='relative h-full w-full px-8'>
        <div className='absolute top-[142px] flex items-center justify-start'>
          {data ? (
            <Link to={'/profile'}>
              <div className='flex h-[60px] w-[217px] items-center justify-between'>
                <div className='h-[60px] w-[60px] rounded-full bg-custom-gray-medium'></div>
                <div className='flex h-[55px] w-[137px] flex-col items-start justify-between'>
                  <span className='text-[15px] font-bold text-custom-gray-medium'>Money</span>
                  <div className='flex w-full items-center justify-start gap-x-3'>
                    <span>내가 본 콘텐츠</span>
                    <span>|</span>
                    <span>129</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <>
              <Link to={'/login'}>
                <button className='relative flex h-[30px] w-[96px] items-center justify-center rounded-xl bg-custom-gray text-sm font-bold'>
                  로그인
                </button>
              </Link>
              <div className='flex items-center justify-start'>
                <div className='w-3 overflow-hidden'>
                  <div className='h-4 origin-bottom-right rotate-45 transform rounded-sm bg-custom-gray-dark'></div>
                </div>
                <div className='flex-1 rounded-lg bg-custom-gray-dark p-4 text-xs text-white'>
                  로그인 하고 <span className='text-custom-green-money'>스크랩</span>하기!
                </div>
              </div>
            </>
          )}
        </div>

        <ul className='absolute top-[262px] flex h-[139px] w-[120px] flex-col items-start justify-between text-[22px] font-bold text-custom-gray-medium'>
          {HeaderMenuList.map((item) => (
            <Link className={pathname === item.to ? 'text-black' : ''} to={item.to} key={item.id}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>

        {data && (
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
