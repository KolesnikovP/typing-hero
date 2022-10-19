import { Button, Form, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react-lite'
import CustomSpan from './CustomSpan/CustomSpan'
import { useStores } from '../../hooks/storeHooks'

const { TextArea } = Input

const TypingInput: React.FC = observer(() => {
  const [typingText, setTypingText] = useState<Array<string | number>>('Enter text here and click "use this template"'.split(''))
  const [actionIsStarted, setActionIsStarted] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [currentKey, setCurrentKey] = useState<string>('')
  const [indexForCheck, setIndexForCheck] = useState<number>(0)

  const onFinish = (values: { textFromInput: string | undefined }) => {
    console.log(values.textFromInput, 'onFinish');
    if(values.textFromInput) {
      
      const textToArray: Array<string | number> = values.textFromInput.split('')
      setTypingText(textToArray)
      setActionIsStarted(true)
    }
  }

  const { typingStore } = useStores()

  const keyChecker = (event: React.KeyboardEvent) => {
    console.log(indexForCheck, 'indexForCheck')
    
    setIndexForCheck(prevIndex => prevIndex + 1)
    setCurrentKey(event.key)
  }

  // сейчас эта логика не отрабатывает потому что она не привязанна к событям onKeyUp - проверить эту дагадку
  const checkIsActive = (gameArray: Array<string | number>, currentIndex: number = 0): boolean => {
    if(currentIndex === 0){
      return true
    }
    else if(currentIndex === indexForCheck) {
      setIndexForCheck(prevIndexForCheck => prevIndexForCheck + 1)
      return true
    }
    return false
  }

  return (
    <div onKeyUp={keyChecker}>
      {typingText && (
        <div className='template'>
          {typingText.map((letter, index) => (
            <CustomSpan 
              key={index + Math.random().toString()}
              number={index} 
              letterInGameArray={letter}
              letterOnKeyUp={currentKey}
              typingText={typingText}
              indexForCheck={indexForCheck}
              // isActive={currentKey === typingText[key]}/>
              // isActive={checkIsActive(typingText, index)}/>
              />
              ))}
        </div>
      )}

      <Form onFinish={onFinish} name="basic">
        <Form.Item name='textFromInput'>
          <TextArea
            maxLength={300}
            style={{ height: 120, width: 600 }}
            placeholder={typingText.join('')}
          />
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
