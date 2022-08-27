import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import CustomSpan from './CustomSpan/CustomSpan'
import { useStores } from '../../hooks/storeHooks'

const { TextArea } = Input

const TypingInput: React.FC = observer(() => {
  const [typingText, setTypingText] = useState<string>('Enter text here and click "use this template"')

  const onFinish = (values: { typingText: string }) => {
    console.log(values)
    setTypingText(values.typingText)
  }

  const { typingStore } = useStores()
  const { next } = typingStore
  console.log(next, 'next')
  typingStore.changeNext()
  console.log(next, 'next')
  console.log(typingStore, 'typing')
  return (
    <div>
      {typingText && (
        <div className='template'>
          {typingText.split('').map((letter: string, key) => (
            <CustomSpan letter={letter} />
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
          <Button type='primary' htmlType='submit'>
            Use this template
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
export default TypingInput
