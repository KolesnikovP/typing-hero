import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('aboutPage')}
      <div>
        test errors
        <BugButton />
      </div>
    </div>
  );
};

export default AboutPage;
