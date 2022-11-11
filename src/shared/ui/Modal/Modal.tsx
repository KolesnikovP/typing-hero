import cls from './Modal.module.css'
import { Button, Modal as ModalAnt } from 'antd';
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea'

interface ModalProps {
  className?: string
  modalHandler: (value: string) => void
}

export const Modal = ({className,modalHandler}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    modalHandler(value)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <ModalAnt title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <TextArea
          defaultValue={"Enter text for typing"}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter text for typing"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </ModalAnt>
    </>
  );
};
