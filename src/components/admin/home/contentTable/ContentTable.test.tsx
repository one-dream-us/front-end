import { findAllByRole, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ContentTableContainer from './ContentTable';
import { beforeEach } from 'node:test';
import pageState from '@/store/admin/adminHome/pageState';
import currentTabState from '@/store/admin/adminHome/currentTabState';
import ProviderWrapper from '@/utils/test/ProviderWrapper';

describe('ContentTable', () => {
  beforeEach(() => {
    pageState.setState({
      page: 1,
    });
    currentTabState.setState({
      currentTab: 'uploaded',
    });
  });

  test('container test', async () => {
    const { container } = render(
      <ProviderWrapper>
        <ContentTableContainer />
      </ProviderWrapper>,
    );

    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
    const td = await findAllByRole(container, 'cell');
    expect(td.length).toBe(50);
  });
});
