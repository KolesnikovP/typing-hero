import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ToggleSwitch } from 'widgets/ToggleSwitch';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type='button' onClick={() => setCollapsed((prevState) => !prevState)}>toggle</button>
      <BugButton />
      <div className={cls.switchers}>
        <ToggleSwitch />
        <LangSwitcher />
      </div>
    </div>
  );
};
