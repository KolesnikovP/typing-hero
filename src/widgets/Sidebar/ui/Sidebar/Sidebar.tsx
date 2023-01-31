import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ToggleSwitch } from 'widgets/ToggleSwitch';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaUserNinja } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FiActivity } from 'react-icons/fi';
import { BsExclamationSquare } from 'react-icons/bs';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath.main}
          theme={AppLinkTheme.HOVER}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.profile}
          theme={AppLinkTheme.HOVER}
        >
          <FiActivity size={18} className={cls.icon} />
          <span className={cls.link}>
            {t('Активность')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.profile}
          theme={AppLinkTheme.HOVER}
        >
          <ProfileIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Статьи')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.profile}
          theme={AppLinkTheme.HOVER}
        >
          <FaUserNinja size={18} className={cls.icon} />
          <span className={cls.link}>
            {t('Профиль')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.about}
          theme={AppLinkTheme.HOVER}
        >
          <BsExclamationSquare size={18} className={cls.icon} />
          <span className={cls.link}>
            {t('О проекте')}
          </span>
        </AppLink>
      </div>
      <Button
        data-testid='sidebar-toggle'
        type='button'
        onClick={() => setCollapsed((prevState) => !prevState)}
        className={cls.collapseBtn}
        size={ButtonSize.L}
      >
        {collapsed ? <AiOutlineDoubleRight size={18} /> : <AiOutlineDoubleLeft size={18} />}
      </Button>
      {/* <BugButton /> */}
      <div className={cls.switchers}>
        <LangSwitcher short={collapsed} className={cls.lang} />
        <ToggleSwitch short={collapsed} />
      </div>
    </div>
  );
};
