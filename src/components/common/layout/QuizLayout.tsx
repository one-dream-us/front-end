import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import TrackRoute from '../TrackRoute';
import Toast from '../Toast';
import LoginModal from '../LoginModal';
import LoginConfirmModal from '../LoginConfirmModal';

export default function QuizLayout() {
  return (
    <>
      <div className='flex min-h-screen w-full flex-col justify-between'>
        <Header />
        <main className='absolute left-0 top-0 min-h-screen w-full bg-quiz-bg px-[16px]'>
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
