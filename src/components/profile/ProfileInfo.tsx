import { UserInfoData } from '@/types/interface';
import { formatDate } from '@/utils/myScrapUtils';
import { memo } from 'react';

function ProfileInfo({ createdAt, email }: Pick<UserInfoData, 'email' | 'createdAt'>) {
  const info = [
    { title: '이메일', data: email },
    { title: '가입일자', data: formatDate(createdAt) ?? '??' },
    { title: '가입경로', data: '카카오 소셜 회원가입' },
  ];
  console.log('re');
  return (
    <>
      {info.map((item) => (
        <div
          key={item.data}
          className='flex h-[42px] w-[169px] flex-col items-start justify-between border-none text-sm no-underline'
        >
          <span className='font-medium text-custom-black'>{item.title}</span>
          <span className='font-medium text-custom-gray-600'>{item.data}</span>
        </div>
      ))}
    </>
  );
}
export default memo(ProfileInfo);
