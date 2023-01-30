import { UserOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
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

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={styles.Header}>
      <span>Some Logo T-Hero</span>
      <Button type='button' theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>{t('login')}</Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </div>
  );
};

export default Header;
