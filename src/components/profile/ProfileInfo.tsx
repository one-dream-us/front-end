import { UserInfoData } from '@/types/interface';
import { formatDate } from '@/utils/myScrapUtils';

export default function ProfileInfo({
  createdAt,
  email,
}: Pick<UserInfoData, 'email' | 'createdAt'>) {
  return (
    <>
      <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
        <span>이메일</span>
        <span className='text-custom-gray-dark'>{email}</span>
      </div>
      <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
        <span>가입일자</span>
        <span className='text-custom-gray-dark'>{formatDate(createdAt) ?? '??'}</span>
      </div>
      <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
        <span>가입경로</span>
        <span className='text-custom-gray-dark'>카카오 소셜 회원가입</span>
      </div>
    </>
  );
}
