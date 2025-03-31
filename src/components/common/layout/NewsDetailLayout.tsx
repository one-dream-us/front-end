import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Toast from '../Toast';
import LoginModal from '../LoginModal';
import LoginConfirmModal from '../LoginConfirmModal';

export default function NewsDetailLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <div className='flex min-h-screen w-full flex-col justify-between'>
        <Header />
        <main
          className={`min-h-screen w-full px-[16px] pt-[52px] md:px-6 desktop:px-[129px] desktop:pt-[80px] ${pathname.includes('/newsComplete') ? 'bg-white' : 'bg-quiz-bg'}`}
        >
          <Outlet />
        </main>
      </div>
      <Toast />
      <LoginModal />
      <LoginConfirmModal />
    </>
  );
}
