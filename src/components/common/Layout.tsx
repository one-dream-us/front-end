import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='min-h-screen w-full'>
      <Header />
      <main className='h-full w-full sm:pt-[52px] lg:pt-[80px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
