import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import userEvent from '@testing-library/user-event';
import pageState from '@/store/admin/adminHome/pageState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import currentTabState from '@/store/admin/adminHome/currentTabState';
import PaginationButtonContainer, { PaginationButton } from './PaginationButton';

describe('PaginationButton', () => {
  test('렌더링 확인, 함수 호출 확인', async () => {
    const handleNextPage = vi.fn();
    const handlePrevPage = vi.fn();
    const user = userEvent.setup();
    render(
      <PaginationButton
        currentPage={1}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isFirstPage={true}
        isLastPage={false}
        lastPage={5}
      />,
    );
    const prevButton = screen.getByTestId('prev btn');
    const nextButton = screen.getByTestId('next btn');
    const span = screen.getByText(/페이지 1 \/ 5/i);
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    expect(span).toBeInTheDocument();
    await user.click(prevButton!);
    expect(handlePrevPage).not.toBeCalled();
    await user.click(nextButton!);
    expect(handleNextPage).toBeCalled();
  });

  test('container test', async () => {
    const user = userEvent.setup();
    currentTabState.setState({ currentTab: 'uploaded' });
    pageState.setState({
      page: 1,
      resetPage: vi.fn(),
      handleNextPage: (lastPage) => {
        pageState.setState((prev) => ({
          page: prev.page === lastPage ? lastPage : prev.page + 1,
        }));
      },
      handlePrevPage: vi.fn(),
    });
    vi.spyOn(pageState.getState(), 'handleNextPage');
    render(
      <QueryClientProvider client={new QueryClient()}>
        <PaginationButtonContainer />
      </QueryClientProvider>,
    );
    const prevButton = screen.getByTestId('prev btn');
    const nextButton = screen.getByTestId('next btn');

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    await user.click(nextButton!);
    expect(pageState.getState().handleNextPage).toBeCalled();
    expect(pageState.getState().page).toBe(2);
    expect(nextButton).toBeDisabled();
  });
});
