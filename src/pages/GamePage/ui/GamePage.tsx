import { Button, Form, Input } from 'antd';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from 'app/providers/hooks/storeHooks';
import { checkIgnoreKeys } from 'shared/lib/Utils/checkIgnoreKeys';
import { generateText, mocTexts } from 'shared/assets/mocs/moc';
import { Modal } from 'shared/ui/Modal/Modal';
import { values } from 'mobx';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './GamePage.module.scss';
import CustomSpan from './CustomSpan/CustomSpan';
// import { useStores } from '../../hooks/storeHooks'

const { TextArea } = Input;

export const GamePage: React.FC = observer(() => {
  const { typingStore } = useStores();

  const [typingText, setTypingText] = useState<Array<string|number>>(
    generateText().split(''),
  );
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>('');
  const [indexForCheck, setIndexForCheck] = useState<number>(0);
  const [isMistake, setIsMistake] = useState<boolean>(false);
  const [mistakeCounter, setMistakeCounter] = useState(0);
  const refText = useRef<HTMLDivElement>(null);

  const onFinish = (values: { textFromInput: string | undefined }) => {
    setCurrentKey('');
    setIndexForCheck(0);
    refText.current.focus();
    if (values.textFromInput) {
      const textToArray: Array<string | number> = values.textFromInput.split('');
      setTypingText(textToArray);
    }
  };

  const modalHandler = (value: string): void => {
    // очищаем стейты
    setCurrentKey('');
    setIndexForCheck(0);
    // и новый стейт из модалки
    const arrayForTyping = value.split('');
    setTypingText(arrayForTyping);
    refText.current.focus();
  };

  const keyChecker = (event: React.KeyboardEvent) => {
    if (checkIgnoreKeys(event.key)) {
      return;
    }
    // if (isStarted) {
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
      setMistakeCounter((prevState) => prevState + 1);
    }
  }, [isMistake]);

  const { t } = useTranslation('gamepage');
  return (
    <div onKeyUp={keyChecker}>
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
        <p>{typingText.length}</p>
        <p>
          mistakes:
          {mistakeCounter}
        </p>
      </div>
      <button type='button' onClick={() => setIsStarted(true)}>Begin practice</button>
      {/* eslint-disable-next-line jsx-a11y/tabindex-no-positive */}
      <Form onFinish={onFinish} name='basic'>
        <Form.Item name='textFromInput'>
          <TextArea maxLength={600} style={{ height: 120, width: 600 }} defaultValue={typingText.join('')} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {t('customText')}
          </Button>
        </Form.Item>
      </Form>
      <Modal modalHandler={modalHandler} />
    </div>
  );
});
