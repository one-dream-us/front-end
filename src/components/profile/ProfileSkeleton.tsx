export default function ProfileSkeleton() {
  return (
    <div className='m-auto mt-[40px] w-full px-4 desktop:px-[128px]'>
      <h1 className='mb-6 text-[22px] font-medium'>프로필</h1>

      <div className='block desktop:flex desktop:items-center desktop:justify-center desktop:gap-x-[58px]'>
        <div>
          <div className='m-auto mb-2 flex h-[385px] w-[201px] flex-col items-center justify-between desktop:h-[177px] desktop:w-[254px]'>
            <div className='h-[127px]'>
              <div className='m-auto mb-3 h-[88px] w-[88px] animate-pulse rounded-full bg-custom-gray-medium'></div>
              <div className='h-[19] w-[60px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
            </div>

            <div className='flex h-[14px] w-[143px] animate-pulse items-center justify-between'>
              <div className='h-[14px] w-[60px] rounded-lg bg-custom-gray-medium'></div>
              <span>|</span>
              <div className='h-[14px] w-[60px] rounded-lg bg-custom-gray-medium'></div>
            </div>

            <div className='flex h-[198px] w-full animate-pulse flex-col items-center justify-between rounded-lg border bg-custom-gray-medium p-4 desktop:hidden'></div>
          </div>

          <div
            role='button'
            className='m-auto flex h-[30px] w-[200px] animate-pulse items-center justify-center rounded-lg bg-custom-gray text-xs desktop:mt-[32px]'
          >
            {/* 로그아웃 */}
          </div>
        </div>
        <div className='hidden animate-pulse rounded-lg border-2 bg-custom-gray-medium p-8 desktop:flex desktop:h-[241px] desktop:w-[811px] desktop:flex-col desktop:items-start desktop:justify-between'>
          {/* <ProfileInfo createdAt={info?.createdAt ?? '??'} email={info?.email!} /> */}
        </div>
      </div>

      <div
        role='button'
        className='m-auto mb-[60px] mt-[130px] h-[18px] w-[44px] animate-pulse rounded-lg bg-custom-gray-medium text-xs text-custom-gray-medium underline underline-offset-2 desktop:absolute desktop:bottom-[180px] desktop:right-[128px]'
      >
        {/* 회원탈퇴 */}
      </div>
    </div>
  );
}
