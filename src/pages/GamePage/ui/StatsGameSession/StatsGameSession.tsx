import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useEffect } from 'react';
import cls from './StatsGameSession.module.scss';

interface StatsGameSessionProps {
  className?: string
  letterSum: number
  mistakeCounter: number
  speed: number
}

export const StatsGameSession = (props: StatsGameSessionProps) => {
  const {
    className, letterSum, mistakeCounter, speed,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.StatsGameSession, {}, [className])}>
      <div>
        statistic
        <p>{letterSum}</p>
        <p>
          mistakes:
          {mistakeCounter}
        </p>
        <p>
          speed:
          {speed}
        </p>
      </div>
    </div>
  );
};
