import { useCountdown } from '../hooks/useCountDown';
import cls from './Timer.module.scss';

const DateTimeDisplay = ({ value, type, isDanger }: {value: number, type: string, isDanger: boolean}) => (
  <div className={isDanger ? cls['countdown danger'] : cls.countdown}>
    <p>{value}</p>
    <span>{type}</span>
  </div>
);

const ExpiredNotice = () => (
  <div className={cls['expired-notice']}>
    <span>Expired!!!</span>
    <p>Please select a future date and time.</p>
  </div>
);

const ShowCounter = ({
  days, hours, minutes, seconds,
}: {days: any, hours: any, minutes: any, seconds: any}) => (
  <div className={cls['show-counter']}>
    <DateTimeDisplay value={days} type='Days' isDanger={days <= 3} />
    <p>:</p>
    <DateTimeDisplay value={hours} type='Hours' isDanger={false} />
    <p>:</p>
    <DateTimeDisplay value={minutes} type='Mins' isDanger={false} />
    <p>:</p>
    <DateTimeDisplay value={seconds} type='Seconds' isDanger={false} />
  </div>
);

export const Timer = ({ target } : {target: number}) => {
  const [days, hours, minutes, seconds] = useCountdown(target);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};
