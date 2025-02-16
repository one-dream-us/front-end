import authApi from '@/services/authApi';

export default function ProfileInfo({
  myInfo,
}: {
  myInfo: {
    title: string;
    data: string;
  }[];
}) {
  return (
    <div className='mb-[80px] h-[268px] w-full'>
      {/* 회원 정보 */}
      <div className='mb-[12px] flex h-[208px] w-full flex-col items-start justify-start gap-y-5 rounded-[10px] border-[1px] border-[#F3F3F3] bg-white p-[22px]'>
        <h2 className='text-[18px] font-bold text-custom-black'>회원정보</h2>

        {myInfo?.map((item) => (
          <div key={item.title} className='flex h-[24px] w-full items-center justify-start gap-x-2'>
            <div className='h-full w-[60px] text-[14px] font-medium leading-170'>{item.title}</div>
            <span className='text-[14px] leading-120 text-custom-gray-600'>{item.data}</span>
          </div>
        ))}
      </div>

      <button
        className='h-[48px] w-full rounded-[10px] border border-[#F3F3F3] bg-custom-gray-600 text-white transition-all duration-200 hover:bg-[#B5B5B5]'
        onClick={authApi.logout}
      >
        로그아웃
      </button>
    </div>
  );
}
