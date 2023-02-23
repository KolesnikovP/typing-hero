import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

// Omit используется для того, чтобы не передавать в компонент Input ненужные атрибуты
// это нужно для того, чтобы мы могли написать свой onChange и value, и не перезаписать его
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

// @onChange - по дефолту onChange принимает event, а нам нужно передать наверх значение
interface InputProps extends HTMLInputProps{
  className?: string
  value?: string
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    autoFocus,
    type = 'text',
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      focusRef.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // если onChange не передан, то ничего не делаем
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      <input
        className={cls.Input}
        ref={focusRef}
        type={type}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
