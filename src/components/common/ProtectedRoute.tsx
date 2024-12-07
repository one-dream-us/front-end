import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { isLoading, data } = useAuthCheckQuery();

  if (!data && !isLoading) {
    alert('로그인 후 이용 가능합니다.');
    return <Navigate to={'/'} />;
  }
  return <Outlet />;
}
