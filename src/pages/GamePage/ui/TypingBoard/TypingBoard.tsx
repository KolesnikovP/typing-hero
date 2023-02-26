import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import CustomSpan from 'features/GameSession/ui/CustomSpan/CustomSpan';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTypingText } from 'features/GameSession/model/selectors/getTypingText/getTypingText';
import { checkIgnoreKeys } from 'shared/lib/Utils/checkIgnoreKeys';
import { Timer } from 'widgets/Timer';
import { CountDownTimer } from 'widgets/CountDownTimer/CountDownTimer';
import cls from './TypingBoard.module.scss';

interface TypingBoardProps {
  onExpirePreloader: () => void
  className?: string
  typingText: (string | number)[]
  currentKey: string
  indexForCheck: number
  isMistake: boolean
  isStart: boolean
  isPreloadActive: boolean
}

// TODO быть может логичнее держать логику выше
export const TypingBoard = (props: TypingBoardProps) => {
  const {
    className, isPreloadActive, typingText, currentKey, indexForCheck, isMistake, isStart, onExpirePreloader,
  } = props;
  const { t } = useTranslation();

  if (!isStart) {
    return (
      <div className={classNames(cls.inactiveBoard)}>
        <span>Нажми &quot;Старт&quot; чтобы начать игру</span>
        <CountDownTimer onExpirePreloader={onExpirePreloader} target={3} isPreload={isPreloadActive} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.TypingBoardWrapper, { [cls.inactiveBoard]: isStart })}>
      <div id='typingBoard' className={classNames(cls.TypingBoard)} tabIndex={-1}>
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
    </div>
  );
};
