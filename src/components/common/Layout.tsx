import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='min-h-screen w-full'>
      <Header />
      <main className='h-full w-full pt-24'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
