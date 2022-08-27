import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { nanoid } from 'nanoid'
import styles from './style.module.css'
import CustomSpan from './CustomSpan/CustomSpan'

const { TextArea } = Input

const TypingInput: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [typingText, setTypingText] = useState<string>('Enter text here and click "use this template"')
  const [isActive, setIsActive] = useState<boolean>(false)

  const onFinish = (values: { typingText: string }) => {
    console.log(values)
    setTypingText(values.typingText)
  }

  const check = (word?: string): void => {
    console.log(word)
    setIsActive((prevState) => !prevState)
  }
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
}

export default TypingInput
