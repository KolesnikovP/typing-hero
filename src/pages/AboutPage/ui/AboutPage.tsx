import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const AboutPage = () => {
  const { t } = useTranslation('about');
  const [value, setValue] = useState('uoh');

  const onChange = (val: string): void => {
    setValue(val);
  };

  return (
    <div>
      {t('aboutPage')}
      <div>
        test errors
        <BugButton />
      </div>
      <Counter />
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default AboutPage;
