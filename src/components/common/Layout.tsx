import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='flex min-h-screen w-full flex-col justify-between'>
      <Header />
      <main className='desktop:pt-[80px] h-full w-full pt-[52px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
