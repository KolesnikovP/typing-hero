import { Button, Form, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/providers/hooks/storeHooks'
import { checkIgnoreKeys } from 'shared/lib/Utils/checkIgnoreKeys'
import CustomSpan from './CustomSpan/CustomSpan'
import { generateText, mocTexts } from 'shared/assets/mocs/moc'
import { Modal } from 'shared/ui/Modal/Modal'
import { values } from 'mobx'
import { useTranslation } from 'react-i18next'
// import { useStores } from '../../hooks/storeHooks'

const { TextArea } = Input

export const GamePage: React.FC = observer(() => {
  const [typingText, setTypingText] = useState<Array<string|number>>(
    generateText().split('')
  )
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [currentKey, setCurrentKey] = useState<string>('')
  const [indexForCheck, setIndexForCheck] = useState<number>(0)
  const [isMistake, setIsMistake] = useState<boolean>(false)

  const onFinish = (values: { textFromInput: string | undefined }) => {
    console.log(values.textFromInput, 'onFinish')
    setCurrentKey('')
    setIndexForCheck(0)
    setIsStarted(true)
    if (values.textFromInput) {
      const textToArray: Array<string | number> = values.textFromInput.split('')
      setTypingText(textToArray)
    }
  }

  const modalHandler = (value: string): void => {
    // очищаем стейты
    setCurrentKey('')
    setIndexForCheck(0)
    // и новый стейт из модалки
    const arrayForTyping = value.split('')
    setTypingText(arrayForTyping)
    setIsStarted(true)
  }

  const { typingStore } = useStores()

  const keyChecker = (event: React.KeyboardEvent) => {
    if (checkIgnoreKeys(event.key)) {
      return
    }
    // if (isStarted) {
      if (event.key === typingText[indexForCheck]) {
        setIndexForCheck((prevIndex) => prevIndex + 1)
        setCurrentKey(event.key)
        setIsMistake(false)
      } else {
        setIsMistake(true)
      }
    }
  // }
  const {t} = useTranslation('gamepage')
  return (
    <div onKeyUp={keyChecker}>
      {typingText && isStarted && (
        <div className='template'>
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

      <Form onFinish={onFinish} name='basic'>
        <Form.Item name='textFromInput'>
          <TextArea maxLength={300} style={{ height: 120, width: 600 }} placeholder={typingText.join('')} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {t('customText')}
          </Button>
        </Form.Item>
      </Form>
      <Modal modalHandler={modalHandler}/>
    </div>
  )
})
