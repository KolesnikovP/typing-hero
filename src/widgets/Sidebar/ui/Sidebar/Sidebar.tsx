import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import React, { useState } from 'react'
import { ToggleSwitch } from 'widgets/ToggleSwitch'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={() => setCollapsed(prevState => !prevState)}>toggle</button>
      <div className={cls.switchers}>
      <ToggleSwitch/>
      <LangSwitcher/>
      </div>
    </div>
  );
};
