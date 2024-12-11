import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileSkeleton from '@/components/profile/ProfileSkeleton';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import authApi from '@/services/authApi';
import { formatUserName } from '@/utils/formatUserName';
import profileImg from '@/assets/this_is_money_imgs/img_png/profile_small_active.png';
import { useScrapTotalQuery } from '@/hooks/scrap/useScrapTotalQuery';
import WithdrawModal from '@/components/withdraw/WithdrawModal';
import { useState } from 'react';
import { useMyViewCount } from '@/hooks/homeContent/useMyViewCount';

export default function Profile() {
  const { data: info, isLoading } = useUserInfoQuery(true);
  const { data, isLoading: scrapCountLoading } = useScrapTotalQuery();
  const { data: viewCount, isLoading: viewCountLoading } = useMyViewCount();
  const [showModal, setShowModal] = useState(false);

  if (isLoading || scrapCountLoading || viewCountLoading) return <ProfileSkeleton />;
  return (
    <div className='m-auto mt-[40px] w-full px-4 desktop:h-[500px] desktop:max-w-[1440px] desktop:px-[129px]'>
      <h1 className='mb-6 text-[22px] font-medium'>프로필</h1>

      <div className='block desktop:flex desktop:items-center desktop:justify-center desktop:gap-x-[58px]'>
        <div>
          <div className='m-auto mb-2 flex h-[385px] w-[201px] flex-col items-center justify-between desktop:h-[177px] desktop:w-[254px]'>
            <div className='h-[127px]'>
              <img src='' alt='' />
              <img
                className={`m-auto mb-3 h-[88px] w-[88px] rounded-full`}
                src={profileImg}
                alt='profileImg'
              />
              {isLoading ? (
                <div className='h-[19] w-[60px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
              ) : (
                <h3 className='text-center text-lg font-medium text-custom-black'>
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
              <div className='text-xs text-custom-gray-dark'>
                스크랩 <span className='font-medium'>{data?.totalScrapCnt || ' 0'}</span>
                <span className='mx-3'>|</span>본 콘텐츠{' '}
                <span className='font-medium'>{viewCount}</span>
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
            className='m-auto flex h-[30px] w-[200px] items-center justify-center rounded-lg bg-custom-gray-600 text-xs text-white transition-all duration-200 hover:bg-[#B5B5B5] desktop:mt-[32px]'
          >
            로그아웃
          </div>
        </div>
        <div className='hidden rounded-lg border-2 p-8 desktop:flex desktop:h-[241px] desktop:w-full desktop:flex-col desktop:items-start desktop:justify-between'>
          <ProfileInfo createdAt={info?.createdAt ?? '??'} email={info?.email!} />
        </div>
      </div>

      <div
        role='button'
        className='m-auto mb-[60px] mt-[130px] h-[18px] w-[50px] text-xs text-custom-gray-medium underline underline-offset-2 desktop:mx-0 desktop:ml-auto'
        onClick={() => setShowModal(true)}
      >
        회원탈퇴
      </div>
      {showModal && (
        <WithdrawModal closeModal={() => setShowModal(false)} handleWithdraw={authApi.withDraw} />
      )}
    </div>
  );
}
