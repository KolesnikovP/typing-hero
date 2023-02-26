import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { checkIgnoreKeys } from 'shared/lib/Utils/checkIgnoreKeys';
import { Select } from 'shared/ui/Select/Select';
import { Timer } from 'widgets/Timer';
import CustomSpan from 'features/GameSession/ui/CustomSpan/CustomSpan';
import { Button } from 'shared/ui/Button/Button';
import { Form } from 'antd';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import { Modal } from 'shared/ui/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { gameSessionActions } from 'features/GameSession/model/slice/gameSessionSlice';
import {
  getGameSessionMistakes,
} from 'features/GameSession/model/selectors/getGameSessionMistakes/getGameSessionMistakes';
import {
  getGameSessionSumLetters,
} from 'features/GameSession/model/selectors/getGameSessionSumLetters/getGameSessionSumLetters';
import { getTypingText } from 'features/GameSession/model/selectors/getTypingText/getTypingText';
import { TimerSelect } from 'entities/TimerSelect';
import cls from './GameSession.module.scss';

interface GameSessionProps {
  className?: string
}

export const GameSession = (props: GameSessionProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>('');
  const [indexForCheck, setIndexForCheck] = useState<number>(0);
  const [isMistake, setIsMistake] = useState<boolean>(false);
  const refText = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const mistakesCounter = useSelector(getGameSessionMistakes);
  const lettersSum = useSelector(getGameSessionSumLetters);
  const typingText = useSelector(getTypingText);

  const onFinish = (values: { textFromInput: string | undefined }) => {
    setCurrentKey('');
    setIndexForCheck(0);
    refText.current?.focus();
    if (values.textFromInput) {
      dispatch(gameSessionActions.setTypingText(values.textFromInput));
    }
  };

  const modalHandler = (value: string): void => {
    // очищаем стейты
    setCurrentKey('');
    setIndexForCheck(0);
    // и новый стейт из модалки
    const textToArray = value.split('');
    dispatch(gameSessionActions.setTypingText(textToArray));
    // setTypingText(textToArray);
    refText.current?.focus();
  };

  const keyChecker = (event: React.KeyboardEvent) => {
    if (checkIgnoreKeys(event.key)) {
      return;
    }
    if (event.key === typingText[indexForCheck]) {
      setIndexForCheck((prevIndex) => prevIndex + 1);
      setCurrentKey(event.key);
      setIsMistake(false);
    } else {
      setIsMistake(true);
    }
  };

  useEffect(() => {
    if (isMistake) {
      dispatch(gameSessionActions.setMistakeCount());
      // setMistakeCounter((prevState) => prevState + 1);
    }
  }, [dispatch, isMistake]);

  useEffect(
    () => {
      if (typingText.length) dispatch(gameSessionActions.setLetterCount(typingText));
    },
    [dispatch, typingText],
  );

  const { t } = useTranslation('gamepage');

  // const [selectedTimer, setSelectedTimer] = useState<number>(1);
  // const [countDownTimer, setCountDownTimer] = useState(0);
  // const onSelectHandler = useCallback((value: number | string) => {
  //   const THREE_DAYS_IN_MS = Number(value) * 60 * 1000;
  //   const NOW_IN_MS = new Date().getTime();
  //   console.log(NOW_IN_MS, '<<<');
  //   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  //   setSelectedTimer(Number(value));
  //   setCountDownTimer(dateTimeAfterThreeDays);
  // }, []);

  return (
    <div onKeyUp={keyChecker}>
      {/* <Select */}
      {/*   defaultValue={selectedTimer} */}
      {/*   options={[{ value: 0.5, content: '30 секунд' }, { value: 1, content: '1 минута' }, { content: 3, data: '3 минуты' }]} */}
      {/*   onSelect={onSelectHandler} */}
      {/*   label='Продолжительность сессии: ' */}
      {/* /> */}
      {/* {isStarted && <Timer target={selectedTimer} />} */}
      {typingText && isStarted && (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex,jsx-a11y/tabindex-no-positive
        <div className={classNames(cls.TypingArea)} tabIndex={1} ref={refText}>
          {typingText.map((letter, index) => (
            <CustomSpan
              key={letter + Math.random().toString()}
              number={index}
              letterInGameArray={letter}
              letterOnKeyUp={currentKey}
              typingText={typingText}
              indexForCheck={indexForCheck}
              isMistake={isMistake}
            />
          ))}
        </div>
      )}
      <div>
        statistic
        <p>{lettersSum}</p>
        <p>
          mistakes:
          {mistakesCounter}
        </p>
      </div>
      <Button type='button' onClick={() => setIsStarted(true)}>Begin practice</Button>
      {/* eslint-disable-next-line jsx-a11y/tabindex-no-positive */}
      {/* <Form onFinish={onFinish} name='basic'> */}
      {/*   <Form.Item name='textFromInput'> */}
      {/* <TextArea name='textFromInputTest' id='textFromInputTest' defaultValue={typingText.join('')} /> */}
      {/* <TextArea maxLength={600} style={{ height: 120, width: 600 }} defaultValue={typingText.join('')} /> */}
      {/* </Form.Item> */}
      {/* <Form.Item> */}
      {/* <Button type='submit'> */}
      {/*   {t('customText')} */}
      {/* </Button> */}
      {/* </Form.Item> */}
      <button type='button' onClick={() => setIsOpen(true)}>modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          some text
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minus?
      </Modal>
      {/* </Form> */}
    </div>
  );
};
