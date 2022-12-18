import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('sidebar test', () => {
  test('test render', () => {
    // это нужно чтоб ворнинги не вылетали при тестировании компонентов содержащих i18n
    const SidebarWithTranslation = withTranslation()(Sidebar);

    renderWithTranslation(<SidebarWithTranslation />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
