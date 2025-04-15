import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
}
