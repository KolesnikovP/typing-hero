import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React from 'react';

interface IToggleProps {
  toggleTheme: () => void
  isActive: boolean
  children: string
}
const ToggleSwitch = ({toggleTheme, children, isActive}:IToggleProps) => {  

  return <>
    <p>{children}</p>
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked={isActive}
      onChange={toggleTheme}
    />
  </>
};

export default ToggleSwitch;
