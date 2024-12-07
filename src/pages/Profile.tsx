import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileSkeleton from '@/components/profile/ProfileSkeleton';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import authApi from '@/services/authApi';
import { formatUserName } from '@/utils/formatUserName';
import profileImg from '@/assets/this_is_money_imgs/img_png/profile_small_active.png';
import { useImgHover } from '@/hooks/ui/useImgHover';

export default function Profile() {
  const { data: info, isLoading } = useUserInfoQuery(true);
  const { handleMouseEnter, handleMouseLeave, isHover } = useImgHover();

  const handleWithdraw = async () => {
    if (!confirm('ㄹㅇ?')) return;

    return await authApi.withDraw();
  };

  if (isLoading) return <ProfileSkeleton />;
  return (
    <div className='m-auto mt-[40px] w-full px-4 desktop:px-[128px]'>
      <h1 className='mb-6 text-[22px] font-bold'>프로필</h1>

      <div className='block desktop:flex desktop:items-center desktop:justify-center desktop:gap-x-[58px]'>
        <div>
          <div className='m-auto mb-2 flex h-[385px] w-[201px] flex-col items-center justify-between desktop:h-[177px] desktop:w-[254px]'>
            <div className='h-[127px]'>
              <img src='' alt='' />
              <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`m-auto mb-3 h-[88px] w-[88px] rounded-full ${isHover && 'scale-110 transition-all duration-300'}`}
                src={profileImg}
                alt='profileImg'
              />
              {isLoading ? (
                <div className='h-[19] w-[60px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
              ) : (
                <h3 className='text-center text-lg font-bold text-custom-gray-medium'>
                  {formatUserName(info?.email || '')}
                </h3>
              )}
            </div>

            {isLoading ? (
              <div className='flex h-[14px] w-[143px] items-center justify-between'>
                <div className='h-[14px] w-[60px] rounded-lg bg-custom-gray-medium'></div>
                <span>|</span>
                <div className='h-[14px] w-[60px] rounded-lg bg-custom-gray-medium'></div>
              </div>
            ) : (
              <div className='text-xs'>
                스크랩 178 | 본 콘텐츠 <span className='text-custom-gray-medium'>124</span>
              </div>
            )}

            <div
              className={`flex h-[198px] w-full flex-col items-center justify-between rounded-lg border p-4 desktop:hidden ${isLoading && 'animate-pulse bg-custom-gray-medium'}`}
            >
              {!isLoading && (
                <ProfileInfo createdAt={info?.createdAt ?? '??'} email={info?.email!} />
              )}
            </div>
          </div>

          <div
            role='button'
            onClick={authApi.logout}
            className='m-auto flex h-[30px] w-[200px] items-center justify-center rounded-lg bg-black text-xs text-white transition-all duration-200 hover:bg-custom-gray desktop:mt-[32px]'
          >
            로그아웃
          </div>
        </div>
        <div className='hidden rounded-lg border-2 p-8 desktop:flex desktop:h-[241px] desktop:w-[811px] desktop:flex-col desktop:items-start desktop:justify-between'>
          <ProfileInfo createdAt={info?.createdAt ?? '??'} email={info?.email!} />
        </div>
      </div>

      <div
        role='button'
        className='m-auto mb-[60px] mt-[130px] h-[18px] w-[44px] text-xs text-custom-gray-medium underline underline-offset-2 desktop:absolute desktop:bottom-[180px] desktop:right-[128px]'
        onClick={handleWithdraw}
      >
        회원탈퇴
      </div>
    </div>
  );
}
