import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { TimerSelectEnum } from 'entities/TimerSelect';

interface TimerSelectProps {
    className?: string;
    onChange?: (value: TimerSelectEnum) => void;
    readonly?: boolean;
}

const options = [
  { value: 30, content: '30 секунд' },
  { value: 60, content: '1 минута' },
  { value: 180, content: '3 минуты' },
  { value: 300, content: '5 минут' },
];

export const TimerSelect = memo(({
  className, onChange, readonly,
}: TimerSelectProps) => {
  const { t } = useTranslation('gamepage');

  const onSelectHandler = useCallback((value: string) => {
    onChange?.(value as unknown as TimerSelectEnum);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={`${t('Длина сессии')}: `}
      options={options}
      onSelect={onSelectHandler}
      disabled={readonly}
    />
  );
});
