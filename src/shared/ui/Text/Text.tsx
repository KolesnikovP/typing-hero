import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: 'left' | 'center' | 'right'
  textSize?: 'size_s' | 'size_m' | 'size_l' | 'size_xl'
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, align = 'left', theme = TextTheme.PRIMARY, textSize = 'size_m',
  } = props;

  const mods = {
    [cls.primary]: theme === TextTheme.PRIMARY,
    [cls.secondary]: theme === TextTheme.SECONDARY,
    [cls.error]: theme === TextTheme.ERROR,
    [cls.left]: align === 'left',
    [cls.center]: align === 'center',
    [cls.right]: align === 'right',
    [cls.size_s]: textSize === 'size_s',
    [cls.size_m]: textSize === 'size_m',
    [cls.size_l]: textSize === 'size_l',
    [cls.size_xl]: textSize === 'size_xl',
  };

  return (
    <div className={classNames(cls.TextWrapper, mods, [className])}>
      {title && <p className={cls.Title}>{title}</p>}
      {text && <p className={cls.Text}>{text}</p>}
    </div>
  );
});
