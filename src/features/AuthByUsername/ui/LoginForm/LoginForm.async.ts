import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';
// сделано только для проверки спеннеров и подгрузки - убрать!
export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500);
  }),
);
