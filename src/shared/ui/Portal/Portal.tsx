import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode // children - это то что мы телепортируем
  elem?: HTMLElement // то куда мы это телепортируем
}

export const Portal = (props: Props) => {
  const { children, elem = document.body } = props; // задали значение боди на случай если не указали элемент
  return createPortal(children, elem);
};
