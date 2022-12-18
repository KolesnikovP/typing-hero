import { Button, Modal as ModalAnt } from 'antd';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  className?: string
  modalHandler: (value: string) => void
}

export const Modal = ({ className, modalHandler }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    modalHandler(value);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation('gamepage');
  return (
    <>
      <Button type='primary' onClick={showModal}>
        {t('openModal')}
      </Button>
      <ModalAnt title='Basic Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <TextArea
          defaultValue='Enter text for typing'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter text for typing'
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </ModalAnt>
    </>
  );
};
