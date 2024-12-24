import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useLoginStore } from '@/store/useIsLoginStore';
import useLoginModalStore from '@/store/useLoginModalStore';
import { useEffect } from 'react';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';

export default function ProtectedRoute() {
  const { isLoading, data } = useAuthCheckQuery();
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);
  const { setIsOpen } = useLoginConfirmModalState();
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLoading && !data) {
      setIsOpen(true);
    }
  }, [isLoading, data, setIsLoginModalOpen]);

  useEffect(() => {
    if (data) {
      setIsLogin(true);
    }
  }, [data, setIsLogin]);

  if (!isLoading && !data) {
    return <Navigate to={pathname} />;
  }

  return <Outlet />;
}
