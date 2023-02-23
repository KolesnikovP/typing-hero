import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    returnNull: false,
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { ru: { translations: {} } },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
