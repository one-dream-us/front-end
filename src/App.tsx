import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Partytown } from '@qwik.dev/partytown/react';

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
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Partytown debug={true} forward={['dataLayer.push']} />
    </QueryClientProvider>
  );
};

export default App;
