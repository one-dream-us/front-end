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

  useEffect(() => {
    if (data) {
      setIsLogin(true);
    }
  }, [data, setIsLogin]);

  if (!isLoading && !data) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return <Outlet />;
}
