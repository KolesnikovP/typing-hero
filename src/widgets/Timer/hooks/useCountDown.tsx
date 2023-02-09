import { useEffect, useState } from 'react';
import { getMsToTimeValues } from 'shared/lib/Utils/getMsToTimeValues';
import { convertMinuteToSecond } from 'shared/lib/Utils/convertSecondToTimesValues';

export const useCountdown = (targetDate: number) => {
  const initialState = convertMinuteToSecond(targetDate);
  const [countDown, setCountDown] = useState(initialState || 60);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(countDown, 'countDown');
      setCountDown((prevState) => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countDown]);

  return [countDown, countDown, countDown, countDown];
};

// prev version
//
// const useCountdown = (targetDate: any) => {
//   const countDownDate = new Date(targetDate).getTime();
//
//   const [countDown, setCountDown] = useState(
//     countDownDate - new Date().getTime(),
//   );
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDown - new Date().getTime());
//     }, 1000);
//
//   return getMsToTimeValues(countDown);
// };
//
// export { useCountdown };
