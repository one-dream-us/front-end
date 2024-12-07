import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useLoginStore } from '@/store/useIsLoginStore';
import useLoginModalStore from '@/store/useLoginModalStore';
import { useEffect } from 'react';

export default function ProtectedRoute() {
  const { isLoading, data } = useAuthCheckQuery();
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !data) {
      setIsLoginModalOpen(true);
    }
  }, [isLoading, data, setIsLoginModalOpen]);

  if (!isLoading && !data) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  if (data) {
    setIsLogin(true);
  }

  return <Outlet />;
}
