import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ToggleSwitch } from 'widgets/ToggleSwitch';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath.main}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>
            Главная
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.profile}
        >
          <ProfileIcon className={cls.icon} />
          <span className={cls.link}>
              Профиль
          </span>
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.link}>О проекте</AppLink>
      </div>
      <Button
        data-testid='sidebar-toggle'
        type='button'
        onClick={() => setCollapsed((prevState) => !prevState)}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <BugButton />
      <div className={cls.switchers}>
        <ToggleSwitch />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
