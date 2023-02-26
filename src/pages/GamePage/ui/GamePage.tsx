import React, { useCallback, useEffect, useState } from 'react';
import { GameSession } from 'features/GameSession';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  gameSessionActions,
  gameSessionReducer,
} from 'features/GameSession/model/slice/gameSessionSlice';
import { useTranslation } from 'react-i18next';
import { TimerSelect } from 'entities/TimerSelect';
import { Timer } from 'widgets/Timer';
import { TypingBoard } from 'pages/GamePage/ui/TypingBoard/TypingBoard';
import { useSelector } from 'react-redux';
import { getTypingText } from 'features/GameSession/model/selectors/getTypingText/getTypingText';
import { checkIgnoreKeys } from 'shared/lib/Utils/checkIgnoreKeys';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { StatsGameSession } from 'pages/GamePage/ui/StatsGameSession/StatsGameSession';
import {
  getGameSessionMistakes,
} from 'features/GameSession/model/selectors/getGameSessionMistakes/getGameSessionMistakes';
import {
  getGameSessionSumLetters,
} from 'features/GameSession/model/selectors/getGameSessionSumLetters/getGameSessionSumLetters';
import { Button } from 'shared/ui/Button/Button';
import {
  getGameSessionIsStarted,
} from 'features/GameSession/model/selectors/getGameSessionIsStarted/getGameSessionIsStarted';
import {
  getSelectedTimer,
} from 'features/GameSession/model/selectors/getSelectedTimer/getSelectedTimer';
import {
  getIsCustomText,
} from 'features/GameSession/model/selectors/getIsCustomText/getIsCustomText';
import { getSpeed } from 'features/GameSession/model/selectors/getSpeed/getSpeed';
import { getCharsTyped } from 'features/GameSession/model/selectors/getCharsTyped/getCharsTyped';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  getIsPreloaderActive,
} from 'features/GameSession/model/selectors/getIsPreloaderActive/getIsPreloaderActive';
import { SetupGameSession } from './SetupGameSession/SetupGameSession';
import cls from './GamePage.module.scss';

const reducers: ReducersList = {
  profile: gameSessionReducer,
};

export const GamePage: React.FC = () => {
  const { t } = useTranslation('gamepage');

  const dispatch = useAppDispatch();
  const typingText = useSelector(getTypingText);
  const mistakeCounter = useSelector(getGameSessionMistakes);
  const letterSum = useSelector(getGameSessionSumLetters);
  const isStarted = useSelector(getGameSessionIsStarted);
  const isPreloadActive = useSelector(getIsPreloaderActive);
  const selectedTimer = useSelector(getSelectedTimer);
  const isCustomText = useSelector(getIsCustomText);
  const speed = useSelector(getSpeed);
  const charsTyped = useSelector(getCharsTyped);

  const [currentKey, setCurrentKey] = useState<string>('');
  const [indexForCheck, setIndexForCheck] = useState<number>(0);
  const [isMistake, setIsMistake] = useState<boolean>(false);

  const onStartHandler = useCallback(() => {
    dispatch(gameSessionActions.setIsPreloadActive(true));
    // dispatch(gameSessionActions.setIsStarted(true));
  }, [dispatch]);

  const onExpireTime = useCallback(() => {
    dispatch(gameSessionActions.setIsStarted(false));
  }, [dispatch]);

  const onExpirePreloader = useCallback(() => {
    dispatch(gameSessionActions.setIsPreloadActive(false));
    dispatch(gameSessionActions.setIsStarted(true));
    document.getElementById('typingBoard')?.focus();
  }, [dispatch]);

  const keyChecker = (event: React.KeyboardEvent) => {
    if (isStarted) {
      if (checkIgnoreKeys(event.key)) {
        return;
      }
      if (event.key === typingText[indexForCheck]) {
        setIndexForCheck((prevIndex) => prevIndex + 1);
        setCurrentKey(event.key);
        setIsMistake(false);
        dispatch(gameSessionActions.setCharsTyped());
      } else {
        setIsMistake(true);
      }
    }
  };

  useEffect(() => {
    if (isMistake) {
      dispatch(gameSessionActions.setMistakeCount());
    }
  }, [dispatch, isMistake]);

  useEffect(
    () => {
      if (typingText.length) dispatch(gameSessionActions.setLetterCount(typingText));
    },
    [dispatch, typingText],
  );

  useEffect(() => {
    dispatch(gameSessionActions.setSpeed());
  }, [charsTyped, dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div onKeyPress={keyChecker}>
        {/* <GameSession /> */}
        <StatsGameSession
          letterSum={letterSum}
          mistakeCounter={mistakeCounter}
          speed={speed}
        />
        <Timer
          target={selectedTimer}
          isStart={isStarted}
          onExpireTime={onExpireTime}
        />
        <div className={cls.ButtonsGroup}>
          <Button
            className={classNames('', {}, [cls.btn])}
            type='button'
            onClick={onStartHandler}
          >
            Старт
          </Button>
          <SetupGameSession
            className={cls.btn}
            isCustomText={isCustomText}
          />
          <Button
            className={classNames('', {}, [cls.btn])}
            type='button'
          >
            Заново
          </Button>
        </div>
        <TypingBoard
          isPreloadActive={isPreloadActive}
          onExpirePreloader={onExpirePreloader}
          typingText={typingText}
          indexForCheck={indexForCheck}
          isMistake={isMistake}
          currentKey={currentKey}
          isStart={isStarted}
        />
      </div>
    </DynamicModuleLoader>
  );
};
