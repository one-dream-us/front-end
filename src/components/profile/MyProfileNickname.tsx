import profileImg from '@/assets/this_is_money_imgs/img_png/profile_small_active.png';

export default function MyProfileNickname({ name }: { name: string }) {
  return (
    <div style={{ gridArea: 'img' }} className='desktop:w-[201px]'>
      <img
        className='m-auto mb-[12px] h-[88px] w-[88px] rounded-full'
        src={profileImg}
        alt='profil-img'
      />
      <h1 className='text-center text-[18px] font-medium text-custom-black desktop:text-[22px]'>
        {name}
      </h1>
    </div>
  );
}
