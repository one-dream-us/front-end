import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';
import Login from './Login';

const renderLogin = () => {
  const queryClient = new QueryClient();

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </BrowserRouter>,
  );
};
test('로그인 페이지 테스트', async () => {
  const back = vi.spyOn(window.history, 'back');
  renderLogin();
  const googleLoginBtn = screen.getByRole('link', { name: /구글 로그인/i });
  const kakaoLoginBtn = screen.getByRole('link', { name: /카카오 로그인/i });
  const nextBtn = screen.getByRole('button', { name: /다음에 할게요/i });

  expect(googleLoginBtn).toBeInTheDocument();
  expect(kakaoLoginBtn).toBeInTheDocument();
  expect(nextBtn).toBeInTheDocument();
  await userEvent.click(nextBtn);
  expect(back).toHaveBeenCalled();
});
