import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

export default function Layout() {
  return (
    <div className='w-full h-screen'>
      <Header />
      <main className='w-full h-full pt-24'>
        <Outlet />
      </main>
    </div>
  );
}
