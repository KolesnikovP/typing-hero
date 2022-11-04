import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import cls from './style.module.scss'

interface IToggleProps {
  toggleTheme: () => void
  isActive: boolean
  children: string
}
export const ToggleSwitch = ({toggleTheme, children, isActive}:IToggleProps) => {

  return (
    <div className={cls.ToggleSwitch}>
      <p className={cls.children}>{children}</p>
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked={isActive}
        onChange={toggleTheme}
      />
    </div>
  )
};
