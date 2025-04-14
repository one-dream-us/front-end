import ProviderWrapper from '@/utils/test/ProviderWrapper';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import AdminHome from './AdminHome';
import userEvent from '@testing-library/user-event';

describe('AdminHome', () => {
  test('searchParam update test', async () => {
    const user = userEvent.setup();
    render(
      <ProviderWrapper>
        <AdminHome />
      </ProviderWrapper>,
    );

    const table = await screen.findByRole('table');
    const nextButton = screen.getByTestId('next btn');
    const tabButton = screen.getByRole('combobox', { name: /업로드 유형 선택/i });

    expect(table).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(tabButton).toBeInTheDocument();
    expect(location.search).toEqual('?page=1&status=uploaded');
    await user.click(nextButton);
    expect(location.search).toEqual('?page=2&status=uploaded');
    await user.selectOptions(tabButton, 'scheduled');
    expect(location.search).toEqual('?page=1&status=scheduled');
  });
});
