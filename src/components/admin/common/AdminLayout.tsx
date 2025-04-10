import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';

export default function AdminLayout() {
  return (
    <div className=''>
      <AdminHeader />

      <main className='admin-layout pt-[80px]'>
        <Outlet />
      </main>
    </div>
  );
}
