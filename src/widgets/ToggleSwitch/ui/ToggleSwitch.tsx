import React, { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LightIcon from 'shared/assets/icons/Light.svg';
import NightIcon from 'shared/assets/icons/Night.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './style.module.scss';

interface IToggleProps {
  className?: string
}
export const ToggleSwitch: FC<IToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ToggleSwitch, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <LightIcon /> : <NightIcon />}
    </Button>
  );
};
