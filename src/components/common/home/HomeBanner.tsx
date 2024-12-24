import banner_mobile from '@/assets/imgs_v2/banner_mobile.png';
import banner_tablet from '@/assets/imgs_v2/banner_tablet.png';
import banner_web from '@/assets/imgs_v2/banner_web.png';
export default function HomeBanner() {
  return (
    <div className='mb-[40px] md:mb-[60px] desktop:mb-[80px]'>
      {' '}
      <div className='bg-custom-cream-light'>
        <img src={banner_mobile} className='block px-4 py-5 md:hidden' alt='' />
        <img src={banner_tablet} className='hidden px-4 py-5 md:block desktop:hidden' alt='' />
        <img
          src={banner_web}
          className='m-auto hidden h-full max-w-[1440px] px-[129px] desktop:block'
          alt=''
        />
      </div>
    </div>
  );
}
