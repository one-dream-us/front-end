import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import MyProfileNickname from './MyProfileNickname';
import Calendar from '../attendance/Calendar';
import WithdrawButton from './WithdrawButton';
import ProfileInfo from './ProfileInfo';

export default function ProfileContainer() {
  const { data: info, isLoading } = useUserInfoQuery(true);

  const myInfo = (() => {
    return [
      { title: '이메일', data: info?.email || '' },
      { title: '가입일자', data: info?.createdAt.split('T')[0].replaceAll('-', '.') as string },
      {
        title: '가입경로',
        data: `${info?.provider === 'kakao' ? '카카오' : '구글'} 소셜 회원가입`,
      },
    ];
  })();

  if (isLoading || !info) return;
  return (
    <div className='m-auto w-[343px] md:w-[353px]'>
      {/* 프사,이름 */}
      <MyProfileNickname name={info.name} />

      {/* 달력 */}
      <div className='m-auto mb-[20px] w-full'>
        <div className='h-[70px] w-full rounded-[8px] bg-black p-1 text-white'>img</div>
        <Calendar />
        <div className='flex h-[40px] w-full items-center justify-center gap-x-[28px] rounded-[10px] border-[0.5px] border-[#F3F3F3] bg-white'>
          <div className='flex h-[16px] w-[124px] items-center justify-between text-[12px] text-[#797979]'>
            <div className='size-4 rounded-full bg-[#BBFFE0]'></div>
            <span>오늘의 미션 1/2 성공</span>
          </div>

          <div className='flex h-[16px] w-[124px] items-center justify-between text-[12px] text-[#797979]'>
            <div className='size-4 rounded-full bg-[#06EA82]'></div>
            <span>오늘의 미션 2/2 성공</span>
          </div>
        </div>
      </div>

      {/* 회원 정보, 로그아웃 */}
      <ProfileInfo myInfo={myInfo} />

      {/* 회원 탈퇴 */}
      <WithdrawButton />
    </div>
  );
}
