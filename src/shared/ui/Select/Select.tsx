import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  memo, ReactNode, SelectHTMLAttributes, useMemo,
} from 'react';
import cls from './Select.module.scss';

type OptionsType = {
  value: string | number
  data?: ReactNode
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onSelect'>

interface SelectProps extends HTMLSelectProps{
  className?: string
  label?: string
  options: OptionsType[]
  onSelect?: (value: string) => void
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
      {label && <label htmlFor={label}>{label}</label>}
      <select
        className={classNames(cls.Select)}
        id={label}
        onChange={onSelectHandler}
        {...otherProps}
      >
        {options.map(({ value, data }) => (
          <option key={value} value={value}>{data || value}</option>
        ))}
      </select>
    </div>
  );
});
