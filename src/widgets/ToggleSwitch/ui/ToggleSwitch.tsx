import React, { ChangeEvent, FC, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ThemeMode } from './ThemeMode/ThemeMode';
import cls from './style.module.scss';

interface IToggleProps {
  className?: string
}

interface ToggleSwitchProps {
  className?: string;
  short: boolean;
}

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { className, short } = props;
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme !== 'app_light_theme');

  const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggleTheme();
    setIsChecked(e.target.checked);
  };

  const handlerOnClick = () => {
    toggleTheme();
    setIsChecked(!isChecked);
  };

  return (
    !short
      ? (
        <label className={classNames(cls.ToggleSwitch, {}, [className])}>
          <input type='checkbox' onChange={handlerOnChange} defaultChecked={isChecked} />
          <span className={cls.Slider} />
          <span
            className={
              classNames(
                cls.Labels,
                { [cls.LightMode]: isChecked, [cls.DarkMode]: !isChecked },
                [className],
              )
            }
          >
            {isChecked ? <ThemeMode mode='light' /> : <ThemeMode mode='dark' />}
          </span>
        </label>
      )
      : (
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          size={ButtonSize.L}
          square
          className={cls.ButtonShort}
          type='button'
          onClick={handlerOnClick}
        >
          {isChecked ? <ThemeMode mode='light' short /> : <ThemeMode mode='dark' short />}
        </Button>
      )
  );
};
