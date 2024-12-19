import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='flex overflow-y-hidden flex-col justify-between w-full min-h-screen'>
      <Header />
      <main className='h-full w-full pt-[52px] desktop:pt-[80px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
