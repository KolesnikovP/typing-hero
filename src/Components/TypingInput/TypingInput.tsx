import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import CustomSpan from './CustomSpan/CustomSpan'
import { useStores } from '../../hooks/storeHooks'

const { TextArea } = Input

const TypingInput: React.FC = observer(() => {
  const [typingText, setTypingText] = useState<string>('Enter text here and click "use this template"')
  const [actionIsStarted, setActionIsStarted] = useState<boolean>(false)
  const [currentKey, setCurrentKey] = useState<string>('')

  const onFinish = (values: { typingText: string }) => {
    console.log(values)
    setTypingText(values.typingText)
  }

  const { typingStore } = useStores()

  const keyChecker = (event: React.KeyboardEvent) => {
    if (actionIsStarted) {
      setCurrentKey(event.key)
    }
  }
  return (
    <div onKeyUp={keyChecker}>
      {typingText && (
        <div className='template'>
          {typingText.split('').map((letter: string, key: number) => (
            <CustomSpan key={key} letter={letter} isActive={currentKey === letter} />
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
            placeholder={typingText}
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
