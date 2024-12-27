import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Router';
import Toast from './components/common/Toast';
import './index.css';
import LoginModal from './components/common/LoginModal';
import TrackRoute from './components/common/TrackRoute';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <TrackRoute />
        <AppRoutes />
        <Toast />
        <LoginModal />
        <LoginConfirmModal />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
