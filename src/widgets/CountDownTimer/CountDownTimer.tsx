import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import cls from './CountDownTimer.module.scss';

interface CountDownTimerProps {
  className?: string
  onExpirePreloader: () => void
  target: number
  isPreload: boolean
}

export const CountDownTimer = (props: CountDownTimerProps) => {
  const {
    className, onExpirePreloader, isPreload, target,
  } = props;

  const { t } = useTranslation();

  const time = new Date();
  time.setSeconds(time.getSeconds() + target);

  const {
    seconds,
    isRunning,
    start,
    resume,
    restart,
    // eslint-disable-next-line no-use-before-define
  } = useTimer({ expiryTimestamp: time, autoStart: false, onExpire: () => onExpirePreloader() });

  useEffect(() => {
    if (isPreload) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreload]);

  return (
    <div className={classNames(cls.CountDownTimer, {}, [className])}>
      {seconds}
    </div>
  );
};
