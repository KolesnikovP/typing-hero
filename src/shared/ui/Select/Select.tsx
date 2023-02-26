import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  memo, ReactNode, SelectHTMLAttributes, useMemo,
} from 'react';
import cls from './Select.module.scss';

type OptionsType = {
  value: string | number
  content?: ReactNode
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onSelect'>

interface SelectProps extends HTMLSelectProps{
  className?: string
  label?: string
  options: OptionsType[]
  onSelect?: (value: any) => void
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, onSelect, ...otherProps
  } = props;

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // если onChange не передан, то ничего не делаем
    onSelect?.(e.target.value);
  };

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && <span className={cls.Label}>{label}</span>}
      <select
        className={classNames(cls.Select)}
        id={label}
        onChange={onSelectHandler}
        {...otherProps}
      >
        {options.map(({ value, content }) => (
          <option key={value} value={value}>{content || value}</option>
        ))}
      </select>
    </div>
  );
});
