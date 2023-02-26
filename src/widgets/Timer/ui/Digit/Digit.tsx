import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Digit.module.scss';

interface DigitProps {
  className?: string
  value: number
  title?: string
}

export const Digit = (props: DigitProps) => {
  const { className, value, title } = props;
  const { t } = useTranslation();

  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return (
    <div className={cls.Container}>
      <div className={cls.Title}>{title}</div>
      <div className={cls.DigitContainer}>
        <div className={cls.SingleDigit}>
          {leftDigit}
        </div>
        <div className={cls.SingleDigit}>
          {rightDigit}
        </div>
      </div>
    </div>
  );
};
