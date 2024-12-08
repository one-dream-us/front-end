import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Router';
import Toast from './components/common/Toast';
import './index.css';
import LoginModal from './components/common/LoginModal';
import useLoginModalStore from './store/useLoginModalStore';
import TrackRoute from './components/common/TrackRoute';

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

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <TrackRoute />
        <AppRoutes />
        <Toast />
        {isLoginModalOpen && <LoginModal />}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
