import { UserInfoData } from '@/types/interface';
import { formatDate } from '@/utils/myScrapUtils';

export default function ProfileInfo({
  createdAt,
  email,
}: Pick<UserInfoData, 'email' | 'createdAt'>) {
  return (
    <>
      <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-sm'>
        <span className='font-medium text-custom-black'>이메일</span>
        <span className='text-custom-gray-600'>{email}</span>
      </div>
      <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-sm'>
        <span className='font-medium text-custom-black'>가입일자</span>
        <span className='text-custom-gray-600'>{formatDate(createdAt) ?? '??'}</span>
      </div>
      <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-sm'>
        <span className='font-medium text-custom-black'>가입경로</span>
        <span className='text-custom-gray-600'>카카오 소셜 회원가입</span>
      </div>
    </>
  );
}
