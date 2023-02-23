import { MdLightMode, MdNightlight } from 'react-icons/md';
import React from 'react';
import cls from '../style.module.scss';

interface ThemeModeProps {
  mode: 'light' | 'dark'
  short?: boolean
}

export const ThemeMode = ({ mode, short }: ThemeModeProps) => (
  mode === 'light'
    ? (
      <span className={cls.ThemeMode}>
        <MdLightMode size={18} />
        {!short && <span className={cls.Placeholder}>Light</span>}
      </span>
    )
    : (
      <span className={cls.ThemeMode}>
        <MdNightlight size={18} />
        {!short && <span className={cls.Placeholder}>Dark</span>}
      </span>
    )
);
