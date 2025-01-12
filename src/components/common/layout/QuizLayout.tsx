import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import TrackRoute from '../TrackRoute';
import LoginModal from '../LoginModal';
import LoginConfirmModal from '../LoginConfirmModal';

export default function QuizLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <div className='flex min-h-screen w-full flex-col justify-between'>
        <Header />
        <main
          className={`min-h-screen w-full px-[16px] pt-[52px] desktop:pt-[80px] ${pathname === '/quiz-result' || pathname === '/random-quiz-result' ? 'bg-quiz-bg desktop:bg-white' : 'bg-quiz-bg'}`}
        >
          <Outlet />
        </main>
      </div>
      <TrackRoute />
      <LoginModal />
      <LoginConfirmModal />
    </>
  );
}
