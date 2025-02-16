import profileImg from '@/assets/this_is_money_imgs/img_png/profile_small_active.png';

export default function MyProfileNickname({ name }: { name: string }) {
  return (
    <div className='m-auto mb-[24px] h-auto w-[200px] px-[20px] text-center desktop:mb-[40px]'>
      <img
        src={profileImg}
        className='m-auto mb-[7px] h-[73px] w-[73px] desktop:h-[104px] desktop:w-[104px]'
        alt='profile-image'
      />
      <h1 className='text-[18px] font-bold text-custom-black desktop:text-[22px]'>{name}</h1>
    </div>
  );
}
