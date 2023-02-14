import { lazy } from 'react';
// сделано только для проверки спеннеров и подгрузки - убрать!
export const ProfilePageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
  }),
);
