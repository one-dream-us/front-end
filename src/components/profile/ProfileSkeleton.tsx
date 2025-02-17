export default function ProfileSkeleton() {
  return (
    <div className='m-auto w-[343px] md:w-[353px]'>
      {/* 프사,이름 */}
      <div className='m-auto mb-[24px] h-auto w-[200px] px-[20px] text-center desktop:mb-[40px]'>
        <div className='skeleton m-auto mb-[7px] h-[73px] w-[73px] rounded-full desktop:h-[104px] desktop:w-[104px]'></div>
        {/* <h1 className='text-[18px] font-bold text-custom-black desktop:text-[22px]'></h1> */}
        <div className='skeleton w-15 h-5'></div>
      </div>

      {/* 달력 */}
      <div className='m-auto mb-[20px] w-full'>
        <div className='skeleton h-[70px] w-full rounded-[8px] p-1 text-white'></div>
        {/* <Calendar /> */}
        <div className='skeleton relative h-[308px] w-[343px] md:w-[353px]'></div>
        <div className='skeleton flex h-[40px] w-full items-center justify-center gap-x-[28px] rounded-[10px] border-[0.5px] border-[#F3F3F3]'>
          {/* <div className='flex h-[16px] w-[124px] items-center justify-between text-[12px] text-[#797979]'>
            <div className='size-4 rounded-full bg-[#BBFFE0]'></div>
            <span>오늘의 미션 1/2 성공</span>
          </div>

          <div className='flex h-[16px] w-[124px] items-center justify-between text-[12px] skeleton text-[#797979]'>
            <div className='size-4 rounded-full bg-[#06EA82]'></div>
            <span>오늘의 미션 2/2 성공</span>
          </div> */}
        </div>
      </div>

      {/* 회원 정보, 로그아웃 */}
      <div className='mb-[80px] h-[268px] w-full'>
        {/* 회원 정보 */}
        <div className='skeleton skeleton mb-[12px] flex h-[208px] w-full flex-col items-start justify-start gap-y-5 rounded-[10px] border-[1px] border-[#F3F3F3] p-[22px]'>
          {/* <h2 className='text-[18px] font-bold text-custom-black'>회원정보</h2> */}
        </div>

        <button className='skeleton h-[48px] w-full rounded-[10px] border border-[#F3F3F3]'>
          {/* 로그아웃 */}
        </button>
      </div>

      {/* 회원 탈퇴 */}
      {/* <WithdrawButton /> */}
    </div>
  );
}
