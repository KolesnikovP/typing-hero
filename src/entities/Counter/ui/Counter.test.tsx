import { screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { ComponentRenderOptions } from 'shared/lib/tests/componentRender/ComponentRender';
import { userEvent } from '@storybook/testing-library';

describe('Counter component', () => {
  test('show value counter', () => {
    ComponentRenderOptions(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('title-value')).toHaveTextContent('10');
  });
  test('increment', () => {
    ComponentRenderOptions(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('title-value')).toHaveTextContent('11');
  });
  test('decrement', () => {
    ComponentRenderOptions(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('title-value')).toHaveTextContent('9');
  });
});
