import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import TrackRoute from '../TrackRoute';
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
          className={`min-h-screen w-full px-[16px] pt-[52px] desktop:pt-[80px] ${pathname === '/course-complete' ? 'bg-white' : 'bg-quiz-bg'}`}
        >
          <Outlet />
        </main>
      </div>
      <TrackRoute />
      <Toast />
      <LoginModal />
      <LoginConfirmModal />
    </>
  );
}
