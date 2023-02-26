import { useTimer } from 'react-timer-hook';
import { Digit } from 'widgets/Timer/ui/Digit/Digit';
import { useEffect, useState } from 'react';
import cls from './Timer.module.scss';

interface TimerProps {
  onExpireTime: () => void
  // onExpirePreloader: () => void
  target: number
  isStart: boolean
}

export const Timer = (props : TimerProps) => {
  const {
    target, isStart, onExpireTime,
  } = props;
  const time = new Date();
  time.setSeconds(time.getSeconds() + target);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
    // eslint-disable-next-line no-use-before-define
  } = useTimer({ expiryTimestamp: time, autoStart: false, onExpire: () => onExpireTime() });

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + target);
    restart(time, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  useEffect(() => {
    if (isStart) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  useEffect(() => {
    if (!isRunning) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + target);
      restart(time, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  return (
    <div className={cls.TimerContainer}>
      {/* {days !== undefined ? <Digit value={days} title='DAYS' /> : null} */}
      {/* {days !== undefined ? ( */}
      {/*   <span className={cls.SeparatorContainer}> */}
      {/*     <span className={cls.Separator} /> */}
      {/*     <span className={cls.Separator} /> */}
      {/*   </span> */}
      {/* ) : null} */}
      {/* <Digit value={hours} title='HOURS' /> */}
      {/* <span className={cls.SeparatorContainer}> */}
      {/*   <span className={cls.Separator} /> */}
      {/*   <span className={cls.Separator} /> */}
      {/* </span> */}
      <Digit value={minutes} title='MINUTES' />
      <span className={cls.SeparatorContainer}>
        <span className={cls.Separator} />
        <span className={cls.Separator} />
      </span>
      <Digit value={seconds} title='SECONDS' />
    </div>
  );
};
