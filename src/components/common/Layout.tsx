import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import TrackRoute from './TrackRoute';
import Toast from './Toast';
import LoginModal from './LoginModal';
import LoginConfirmModal from './LoginConfirmModal';

export default function Layout() {
  return (
    <>
      <div className='flex min-h-screen w-full flex-col justify-between'>
        <Header />
        <main className='h-full w-full pt-[52px] desktop:pt-[80px]'>
          <Outlet />
        </main>
        <Footer />
      </div>
      <TrackRoute />
      <Toast />
      <LoginModal />
      <LoginConfirmModal />
    </>
  );
}
