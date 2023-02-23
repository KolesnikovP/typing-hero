import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { Icon, IconName } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  path: string
  text: string
  icon: IconName
  collapsed: boolean
  authOnly?: boolean
}

// @memo - это HOC которые пока не изменятся пропсы не будет ререндерить компонент
export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    path, text, icon, collapsed, authOnly,
  } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      to={path}
      theme={AppLinkTheme.HOVER}
    >
      <Icon className={cls.icon} type={icon} />
      <span className={cls.link}>
        {text}
      </span>
    </AppLink>
  );
});
