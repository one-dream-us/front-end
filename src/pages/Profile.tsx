import ProfileContainer from '@/components/profile/ProfileContainer';
import WithdrawButton from '@/components/profile/WithdrawButton';

export default function Profile() {
  return (
    <div className='px-4 py-[40px] md:px-[24px] desktop:m-auto desktop:max-w-[1440px] desktop:px-[128px]'>
      <h1 className='mb-[24px] text-[22px] font-bold text-custom-black'>프로필</h1>
      <ProfileContainer />
      <WithdrawButton />
    </div>
  );
}
