import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { data } = useUserInfoQuery();

  if (!data) {
    alert('로그인 후 이용 가능합니다.');
    return <Navigate to={'/'} />;
  }
  return <Outlet />;
}
