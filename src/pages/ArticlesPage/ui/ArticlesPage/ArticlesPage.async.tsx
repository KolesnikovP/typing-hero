import { lazy } from 'react';
// сделано только для проверки спеннеров и подгрузки - убрать!
export const ArticlesPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
  }),
);
