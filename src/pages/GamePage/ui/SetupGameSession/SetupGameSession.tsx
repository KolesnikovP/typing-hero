import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import { Button } from 'shared/ui/Button/Button';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getTypingText } from 'features/GameSession/model/selectors/getTypingText/getTypingText';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { gameSessionActions } from 'features/GameSession/model/slice/gameSessionSlice';
import {
  getGameSessionMistakes,
} from 'features/GameSession/model/selectors/getGameSessionMistakes/getGameSessionMistakes';
import {
  getGameSessionSumLetters,
} from 'features/GameSession/model/selectors/getGameSessionSumLetters/getGameSessionSumLetters';
import { Modal } from 'shared/ui/Modal/Modal';
import { TimerSelect } from 'entities/TimerSelect';
import { Switch } from 'shared/ui/Switch/Switch';
import cls from './SetupGameSession.module.scss';

interface SetupGameSessionProps {
  className?: string
  isCustomText: boolean
}

export const SetupGameSession = (props: SetupGameSessionProps) => {
  const { className, isCustomText } = props;
  const [customText, setCustomText] = useState('');
  // const [isCustomText, setIsCustomText] = useState(false);
  const [isOpenSetupModal, setIsOpenSetupModal] = useState(false);
  const dispatch = useAppDispatch();

  const { t } = useTranslation('gamepage');

  const onChangeTypingArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCustomText(e.target.value);
  };

  const onSelectTimeHandler = useCallback((value: number | string) => {
    dispatch(gameSessionActions.setTimer(Number(value)));
  }, [dispatch]);

  const onSubmitTypingText = () => {
    setIsOpenSetupModal(false);
    if (isCustomText) {
      dispatch(gameSessionActions.setTypingText(customText));
    }
  };

  const onCloseModal = useCallback(() => {
    setIsOpenSetupModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpenSetupModal(true);
  }, []);

  const customTextHandler = useCallback(() => {
    dispatch(gameSessionActions.setIsCustomText(!isCustomText));
  }, [dispatch, isCustomText]);

  const onDefaultSettingsState = useCallback(() => {
    dispatch(gameSessionActions.setInitialState());
  }, [dispatch]);

  return (
    <div className={classNames(cls.SetupGameSessionWrapper, {}, [])}>
      <Button className={className} type='button' onClick={onOpenModal}>
        {t('Настройки')}
      </Button>
      <Modal isOpen={isOpenSetupModal} onClose={onCloseModal}>
        <div className={cls.SetupGameSessionModal}>
          <TimerSelect
            className={classNames('', {}, [cls.modalItem])}
            onChange={onSelectTimeHandler}
          />
          <Switch
            className={classNames('', {}, [cls.modalItem])}
            placeholder={`${t('Использовать свой текст?')}:`}
            onChange={customTextHandler}
          />
          {isCustomText
          && (
            <TextArea
              name='textFromInputTest'
              id='textFromInputTest'
              placeholder={t('Вставьте свой текст')}
              onChange={onChangeTypingArea}
            />
          )}
          <div className={cls.buttonsGroup}>
            <Button
              className={classNames(cls.defaultBtn, {}, [cls.btn])}
              type='button'
              onClick={onDefaultSettingsState}
            >
              {t('По умолчанию')}
            </Button>

            <Button
              className={classNames(cls.submitBtn, {}, [cls.btn])}
              type='button'
              onClick={onSubmitTypingText}
            >
              {t('Применить')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
