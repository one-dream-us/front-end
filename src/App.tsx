import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Router';
import Toast from './components/common/Toast';
import './index.css';
import LoginModal from './components/common/LoginModal';
import useLoginModalStore from './store/useLoginModalStore';
import TrackRoute from './components/common/TrackRoute';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useLoginConfirmModalState from './store/login/useLoginConfirmModalStore';
import LoginConfirmModal from './components/common/LoginConfirmModal';

const App = (): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        retry: 1,
      },
    },
  });
  const isLoginModalOpen = useLoginModalStore((state) => state.isLoginModalOpen);
  const { isOpen: isLoginConfirmModalOpen } = useLoginConfirmModalState();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <TrackRoute />
        <AppRoutes />
        <Toast />
        {isLoginModalOpen && <LoginModal />}
        {isLoginConfirmModalOpen && <LoginConfirmModal />}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
