import { lazy } from 'react';
// сделано только для проверки спеннеров и подгрузки - убрать!
export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
  }),
);
