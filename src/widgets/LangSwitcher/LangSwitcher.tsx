import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { IoLanguage } from 'react-icons/io5';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      // square
      onClick={toggleLang}
    >
      <IoLanguage size={18} />
      {!short && <span className={cls.Placeholder}>{t(short ? 'shortLanguage' : 'language')}</span>}
    </Button>
  );
});
