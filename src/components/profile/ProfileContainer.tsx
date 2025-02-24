import MyProfileNickname from './MyProfileNickname';
import Calendar from '../attendance/Calendar';
import WithdrawButton from './WithdrawButton';
import ProfileInfo from './ProfileInfo';
import ProfileSkeleton from './ProfileSkeleton';
import iconStarLess from '@/assets/P2_5d/icon_star_none_lesscone.png';
import flame from '@/assets/P2_5d/icon_flame.png';
import { getProfileBannerText } from '@/utils/profile/profileUtis';
import useProfileInfo from '@/hooks/mission/useProfileInfo';

export default function ProfileContainer() {
  const { data, isLoading } = useProfileInfo();

  const myInfo = (() => {
    return [
      { title: '이메일', data: data.userInfo?.email || '' },
      {
        title: '가입일자',
        data: data.userInfo?.createdAt.split('T')[0]?.replaceAll('-', '.') as string,
      },
      {
        title: '가입경로',
        data: `${data.userInfo?.provider === 'kakao' ? '카카오' : '구글'} 소셜 회원가입`,
      },
    ];
  })();

  // const CONTINUOUS_DAY = 0;
  const { bottom, top } = getProfileBannerText(data?.continuousDays);

  if (isLoading || !data) return <ProfileSkeleton />;
  return (
    <div className='m-auto w-[343px] md:w-[353px]'>
      {/* 프사,이름 */}
      <MyProfileNickname name={data?.userInfo?.name || ''} />

      {/* 달력 */}
      <div className='m-auto mb-[20px] w-full'>
        <div id={data?.continuousDays > 0 ? 'banner-continuous' : 'banner-not-continuous'}>
          <div className='absolute left-[20px] top-[13px]'>
            <span className='text-[16px] font-medium'>{top}</span>
            <div className='flex items-center justify-center gap-x-[6px]'>
              <h2 className='text-[18px] font-bold'>{bottom}</h2>
              <img src={flame} alt='' className='h-[17px] w-[13px]' />
            </div>
          </div>
        </div>
        <Calendar />
        <div className='flex h-[40px] w-full items-center justify-center gap-x-[28px] rounded-[10px] border-[0.5px] border-[#F3F3F3] bg-white'>
          <div className='flex h-[16px] w-[124px] items-center justify-between text-[12px] text-[#797979]'>
            <div className='size-4 rounded-full bg-[#BBFFE0]'></div>
            <span>오늘의 미션 1/2 성공</span>
          </div>

          <div className='flex h-[16px] w-[124px] items-center justify-between text-[12px] text-[#797979]'>
            <img src={iconStarLess} alt='mission clear icon' className='size-4' />
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
