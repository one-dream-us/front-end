import { UserInfoData } from '@/types/interface';

function ProfileInfo({
  createdAt,
  email,
  provider,
}: Pick<UserInfoData, 'email' | 'createdAt' | 'provider'>) {
  const info = [
    { title: '이메일', data: email },
    { title: '가입일자', data: createdAt },
    { title: '가입경로', data: `${provider === 'kakao' ? '카카오' : '구글'} 소셜 회원가입` },
  ];
  return (
    <div
      style={{ gridArea: 'user-info' }}
      className='mb-[8px] flex h-[198px] w-full flex-col justify-between gap-y-[20px] rounded-[10px] border border-custom-gray-200 p-4 desktop:row-span-3 desktop:mb-0 desktop:h-[241px] desktop:w-[811px] desktop:p-[32px]'
    >
      {info.map((item) => (
        <div key={item.title} className='h-[42px] w-[169px] text-[12px] desktop:text-[14px]'>
          <h2 className='mb-[8px] font-medium'>{item.title}</h2>
          <span className='select-none border-none text-custom-gray no-underline'>{item.data}</span>
        </div>
      ))}
    </div>
  );
}
export default ProfileInfo;
