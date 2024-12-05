import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { isLoading, data } = useUserInfoQuery();

  if (!data && !isLoading) {
    alert('로그인 후 이용 가능합니다.');
    return <Navigate to={'/'} />;
  }
  return <Outlet />;
}
