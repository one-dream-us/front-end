import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import userEvent from '@testing-library/user-event';
import NavigateTabButtonContainer from './NavigateTabButton';

describe('NavigateTab component', () => {
  const renderNavigateTab = () => {
    render(<NavigateTabButtonContainer />);
  };

  beforeEach(() => renderNavigateTab());
  test('ui test', async () => {
    // renderNavigateTab();
    const selectTab = screen.getByRole('combobox', { name: /업로드 유형 선택/i });
    const uploadedOption = screen.getByRole('option', {
      name: /업로드 완료/i,
    });
    const scheduledOption = screen.getByRole('option', {
      name: /업로드 예정/i,
    });
    const draftOption = screen.getByRole('option', {
      name: /임시 저장/i,
    });

    expect(selectTab).toBeInTheDocument();
    expect(uploadedOption).toBeInTheDocument();
    expect(scheduledOption).toBeInTheDocument();
    expect(draftOption).toBeInTheDocument();
    expect(selectTab).toHaveValue('uploaded');
  });

  test('select option test', async () => {
    const selectTab = screen.getByRole('combobox', { name: /업로드 유형 선택/i });
    const uploadedOption = screen.getByRole('option', {
      name: /업로드 완료/i,
    });
    const scheduledOption = screen.getByRole('option', {
      name: /업로드 예정/i,
    });
    const draftOption = screen.getByRole('option', {
      name: /임시 저장/i,
    });

    await userEvent.selectOptions(selectTab, scheduledOption);
    expect(selectTab).toHaveValue('scheduled');
    await userEvent.selectOptions(selectTab, draftOption);
    expect(selectTab).toHaveValue('draft');
    await userEvent.selectOptions(selectTab, uploadedOption);
    expect(selectTab).toHaveValue('uploaded');
  });
});
