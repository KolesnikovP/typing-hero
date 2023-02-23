import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ToggleSwitch } from 'widgets/ToggleSwitch';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        {SidebarItemList.map(({
          path, text, icon, authOnly,
        }) => (
          <SidebarItem
            key={text}
            path={path}
            text={text}
            icon={icon}
            collapsed={collapsed}
            authOnly={authOnly}
          />
        ))}
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
});
