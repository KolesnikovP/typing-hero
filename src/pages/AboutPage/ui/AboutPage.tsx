import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('aboutPage')}
      <div>
        test errors
        <BugButton />
      </div>
      <Counter />
    </div>
  );
};

export default AboutPage;
