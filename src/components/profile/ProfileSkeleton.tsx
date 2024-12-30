export default function ProfileSkeleton() {
  return (
    <div
      id='profile-container'
      className='m-auto mb-[130px] h-[423px] w-[201px] desktop:m-0 desktop:ml-auto desktop:grid desktop:h-[241px] desktop:w-[1097px]'
    >
      {/* <MyProfileNickname name={formatUserName(info?.email || '')} />
      <MyScrapViewCount />
      <ProfileInfo createdAt={formatDate(info?.createdAt ?? '')} email={info?.email ?? ''} /> */}
      <div style={{ gridArea: 'img' }} className='desktop:w-[201px]'>
        <div className='m-auto mb-[12px] h-[88px] w-[88px] animate-pulse rounded-full bg-custom-gray-300' />
        <div className='skeleton m-auto h-[19px] w-[60px] text-center text-[18px] font-medium text-custom-black desktop:text-[22px]'></div>
      </div>

      <div
        style={{ gridArea: 'content-info' }}
        className='m-auto my-[24px] flex h-[20px] w-[155px] items-center justify-center text-[12px] text-custom-gray-dark'
      >
        <div className='skeleton h-[14px] w-[60px] font-medium'></div>
        <div className='mx-[12px]'>|</div>
        <div className='skeleton h-[14px] w-[60px] font-medium'></div>
      </div>

      <div
        style={{ gridArea: 'user-info' }}
        className='skeleton mb-[8px] flex h-[198px] w-full flex-col justify-between gap-y-[20px] border border-custom-gray-200 p-4 desktop:row-span-3 desktop:mb-0 desktop:h-[241px] desktop:w-[811px] desktop:p-[32px]'
      ></div>

      <div
        style={{ gridArea: 'logout' }}
        role='button'
        className='skeleton m-auto flex h-[30px] w-[200px] cursor-pointer items-center justify-center rounded-lg text-xs text-white transition-all duration-200 hover:bg-[#B5B5B5]'
      ></div>
    </div>
  );
}
