import React, {
  ChangeEvent, FC, memo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Switch.module.scss';

interface ToggleSwitchProps {
  className?: string;
  placeholder?: string;
  onChange: () => void;
}

export const Switch = memo((props: ToggleSwitchProps) => {
  const { className, placeholder, onChange } = props;
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange();
    setIsChecked(e.target.checked);
  };

  const handlerOnClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classNames(cls.SwitchWrapper, {}, [className])}>
      {placeholder && <span className={cls.Placeholder}>{placeholder}</span>}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={cls.ToggleSwitch}>
        <input type='checkbox' onChange={handlerOnChange} defaultChecked={isChecked} />
        <span className={cls.Slider} />
        <span
          className={
            classNames(
              cls.Labels,
              { [cls.CheckedTrue]: isChecked, [cls.CheckedFalse]: !isChecked },
              [className],
            )
          }
        >
          {isChecked ? t('Да') : t('Нет')}
        </span>
      </label>
    </div>

  );
});
