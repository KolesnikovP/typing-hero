import { UserOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { FaRegKeyboard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Header.module.scss';

const items = [
  {
    label: 'Войти',
    key: 'login',
    icon: <UserOutlined />,
  },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={styles.Header}>
      <span className={styles.LogoWrapper}>
        <FaRegKeyboard size={22} />
        <span>T-Hero</span>
      </span>
      {userAuthData
        ? (
          <Button type='button' theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>{t('Выйти')}</Button>
        )
        : (
          <Button type='button' theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>{t('Войти')}</Button>
        )}
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};

export default Header;
