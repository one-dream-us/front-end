import { useImgHover } from '@/hooks/ui/useImgHover';
import profile_main from '@/assets/this_is_money_imgs/img_png/Icon_profile_main.png';
import profile_active from '@/assets/this_is_money_imgs/img_png/icon_profile_active.png';
import { Link, useLocation } from 'react-router-dom';

export default function ProfileLink() {
  const { pathname } = useLocation();
  const profileHover = useImgHover();
  return (
    <Link to={'/profile'} aria-label='프로필 버튼으로 이동'>
      {/* desktop */}
      <img
        onMouseEnter={profileHover.handleMouseEnter}
        onMouseLeave={profileHover.handleMouseLeave}
        className={`hidden h-9 w-9 rounded-full md:block`}
        src={
          pathname === '/profile'
            ? profile_active
            : profileHover.isHover
              ? profile_active
              : profile_main
        }
        alt='profile-img'
        loading='lazy'
      />
    </Link>
  );
}
