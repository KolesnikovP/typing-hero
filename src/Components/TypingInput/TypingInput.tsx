import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import CustomSpan from './CustomSpan/CustomSpan'
import { useStores } from '../../hooks/storeHooks'

const { TextArea } = Input

const TypingInput: React.FC = observer(() => {
  const [typingText, setTypingText] = useState<Array<string | number>>('Enter text here and click "use this template"'.split(''))
  const [actionIsStarted, setActionIsStarted] = useState<boolean>(false)
  const [currentKey, setCurrentKey] = useState<string>('')
  const [indexForCheck, setIndexForCheck] = useState<number>(0)

  const onFinish = (values: { typingText: string }) => {
    // console.log(values)
    const textToArray: Array<string | number> = values.typingText.split('')
    setTypingText(textToArray)
  }

  const { typingStore } = useStores()

  const keyChecker = (event: React.KeyboardEvent) => {
    console.log(event.key, 'event.key');
    
      setCurrentKey(event.key)
  }

  const checkIsActive = (gameArray: Array<string | number>, currentIndex: number): boolean => {
    if(currentIndex == 0){
      return true
    } 
      // } else if (gameArray[currentIndex])
    return false
  }

  const isActive = (typingText: string, number: number, letter: string, event: React.KeyboardEvent): boolean => {
    const text = typingText.split('')
    if(event.key === text[number]){
      return true
    }
    return false
  }
  return (
    <div onKeyUp={keyChecker}>
      {typingText && (
        <div className='template'>
          {typingText.map((letter, key) => (
            <CustomSpan 
              key={key + Math.random().toString()}
              number={key} 
              letter={letter}
              // isActive={currentKey === typingText[key]}/>
              isActive={checkIsActive(typingText, key)}/>
              ))}
        </div>
      )}

      <Form onFinish={onFinish}>
        <Form.Item name={['typingText']}>
          <TextArea
            showCount
            maxLength={300}
            style={{ height: 320, width: 600 }}
            // onChange={onChange}
            placeholder={typingText.join('')}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' onClick={() => setActionIsStarted(true)}>
            Use this template
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
export default TypingInput
