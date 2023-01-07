import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { ComponentRenderOptions } from 'shared/lib/tests/componentRender/ComponentRender';

describe('sidebar test', () => {
  test('test render', () => {
    // это нужно чтоб ворнинги не вылетали при тестировании компонентов содержащих i18n
    const SidebarWithTranslation = withTranslation()(Sidebar);

    ComponentRenderOptions(<SidebarWithTranslation />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    ComponentRenderOptions(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
