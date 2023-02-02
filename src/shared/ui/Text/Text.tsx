import { classNames } from 'shared/lib/classNames/classNames';
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
}

export const Text = (props: TextProps) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;

  const mods = {
    [cls.primary]: theme === TextTheme.PRIMARY,
    [cls.secondary]: theme === TextTheme.SECONDARY,
    [cls.error]: theme === TextTheme.ERROR,
  };

  return (
    <div className={classNames(cls.TextWrapper, mods, [className])}>
      {title && <p className={cls.Title}>{title}</p>}
      {text && <p className={cls.Text}>{text}</p>}
    </div>
  );
};
