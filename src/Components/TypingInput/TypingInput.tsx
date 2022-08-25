import { Button, Input } from 'antd';
import React, { useState } from 'react';

const { TextArea } = Input;

const TypingInput: React.FC = () => {
  const [text, setText] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <TextArea
        showCount
        maxLength={300}
        style={{ height: 320, width: 600 }}
        onChange={onChange}
        placeholder={text}
      />
      <Button type="primary">Primary Button</Button>
    </>
  );
};

export default TypingInput;
