import { Button, Form, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react-lite'
import CustomSpan from './CustomSpan/CustomSpan'
import { useStores } from '../../hooks/storeHooks'
import { checkIgnoreKeys } from './Utils/checkIgnoreKeys'

const { TextArea } = Input

const TypingInput: React.FC = observer(() => {
  const [typingText, setTypingText] = useState<Array<string | number>>(
    'Enter text here and click "use this template"'.split('')
  )
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [currentKey, setCurrentKey] = useState<string>('')
  const [indexForCheck, setIndexForCheck] = useState<number>(0)
  const [isMistake, setIsMistake] = useState<boolean>(false)

  const onFinish = (values: { textFromInput: string | undefined }) => {
    console.log(values.textFromInput, 'onFinish')
    setIsStarted(true)
    if (values.textFromInput) {
      const textToArray: Array<string | number> = values.textFromInput.split('')
      setTypingText(textToArray)
    }
  }

  const { typingStore } = useStores()

  const keyChecker = (event: React.KeyboardEvent) => {
    if (checkIgnoreKeys(event.key)) {
      return
    }
    if (isStarted) {
      if (event.key === typingText[indexForCheck]) {
        setIndexForCheck((prevIndex) => prevIndex + 1)
        setCurrentKey(event.key)
        setIsMistake(false)
      } else {
        setIsMistake(true)
      }
    }
  }

  return (
    <div onKeyUp={keyChecker}>
      {typingText && (
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
              // isActive={currentKey === typingText[key]}/>
              // isActive={checkIsActive(typingText, index)}/>
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
            Use this template
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
export default TypingInput
