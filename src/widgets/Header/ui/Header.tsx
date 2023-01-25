import { UserOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

const items = [
  {
    label: 'Войти',
    key: 'login',
    icon: <UserOutlined />,
  },
];

const Header: React.FC = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={styles.Header}>
      <Button type='button' theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('login')}</Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        some text
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minus?
      </Modal>
    </div>
  );
};

export default Header;
