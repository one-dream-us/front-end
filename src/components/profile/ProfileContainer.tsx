import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import ProfileSkeleton from './ProfileSkeleton';
import { formatUserName } from '@/utils/formatUserName';
import authApi from '@/services/authApi';
import MyScrapViewCount from './MyScrapViewCount';
import MyProfileNickname from './MyProfileNickname';
import ProfileInfo from './ProfileInfo';

export default function ProfileContainer() {
  const { data: info, isLoading } = useUserInfoQuery(true);

  console.log(info);

  if (isLoading) return <ProfileSkeleton />;
  return (
    <div
      id='profile-container'
      className='m-auto mb-[130px] h-[423px] w-[201px] desktop:m-0 desktop:ml-auto desktop:grid desktop:h-[241px] desktop:w-[1097px]'
    >
      <MyProfileNickname name={formatUserName(info?.email || '')} />
      <MyScrapViewCount />
      <ProfileInfo
        createdAt={info?.createdAt.split('T')[0].replaceAll('-', '.') as string}
        email={info?.email ?? ''}
      />

      <div
        style={{ gridArea: 'logout' }}
        role='button'
        className='m-auto flex h-[30px] w-[200px] cursor-pointer items-center justify-center rounded-lg bg-custom-gray-600 text-xs text-white transition-all duration-200 hover:bg-[#B5B5B5]'
        onClick={authApi.logout}
      >
        로그아웃
      </div>
    </div>
  );
}
