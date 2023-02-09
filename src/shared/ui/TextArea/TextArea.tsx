import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, TextareaHTMLAttributes } from 'react';
import cls from './TextArea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  children?: ReactNode
}

export const TextArea = (props: TextAreaProps) => {
  const {
    className, children, cols = 80, rows = 12, ...otherProps
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.TextAreaWrapper, {}, [className])}>
      <textarea className={classNames(cls.TextArea)} {...otherProps}>
        {children}
      </textarea>
    </div>
  );
};
