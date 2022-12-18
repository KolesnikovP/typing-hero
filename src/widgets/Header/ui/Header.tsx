import {
  AppstoreOutlined, HomeOutlined, ProfileOutlined, UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const items: MenuProps['items'] = [
  {
    label: 'Главная',
    key: '/main',
    icon: <HomeOutlined />,
  },
  {
    label: 'Режим',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Результаты',
    key: '/results',
    icon: <ProfileOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Профиль',
    key: '/profile',
    icon: <UserOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(`${e.keyPath}`);
  };

  return <Menu className={styles.Header} onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};

export default Header;
