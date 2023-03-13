import React, { ReactNode, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'shared/ui/Icon/Icon.module.scss';
import HomeIconSVG from '../../assets/icons/HomeIcon.svg';
import ChevronIconLeftSVG from '../../assets/icons/ChevronIconLeft.svg';
import LightIconSVG from '../../assets/icons/Light.svg';
import UserIconSVG from '../../assets/icons/userIcon.svg';
import UserIconTestSVG from '../../assets/icons/userIconTest.svg';
import ArticleIconSVG from '../../assets/icons/article-20-20.svg';
import EyeIconSVG from '../../assets/icons/eye-20-20.svg';
import CalendarIconSVG from '../../assets/icons/calendar-20-20.svg';

import styles from './Icon.module.scss';

export enum IconName {
  HOME_ICON = 'homeIcon',
  LIGHT_ICON = 'lightIcon',
  USER_ICON = 'userIcon',
  USER_ICON_TEST = 'userIconTest',
  CHEVRON_LEFT_ICON = 'chevronLeftIcon',
  ARTICLE_ICON = 'articleIcon',
  EYE_ICON = 'eyeIcon',
  CALENDAR_ICON = 'calendarIcon'
}

const icons: Record<IconName, ReactNode> = {
  [IconName.HOME_ICON]: <HomeIconSVG />,
  [IconName.LIGHT_ICON]: <LightIconSVG />,
  [IconName.USER_ICON]: <UserIconSVG />,
  [IconName.USER_ICON_TEST]: <UserIconTestSVG />,
  [IconName.CHEVRON_LEFT_ICON]: <ChevronIconLeftSVG />,
  [IconName.ARTICLE_ICON]: <ArticleIconSVG />,
  [IconName.EYE_ICON]: <EyeIconSVG />,
  [IconName.CALENDAR_ICON]: <CalendarIconSVG />,
};

interface IconProps {
  type?: IconName;
  color?: string;
  transform?: 'rotate90' | 'rotate180';
  className?: string;
  Svg?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = (props: IconProps) => {
  const {
    color, transform, type = IconName.HOME_ICON, className, Svg,
  } = props;

  if (Svg) {
    return (
      <Svg className={classNames(cls.icon, {}, [className])} />
    );
  }

  return (
    <span
      style={{ color }}
      className={classNames(
        styles.icon,
        {
          [styles.icon_rotate90]: transform === 'rotate90',
          [styles.icon_rotate180]: transform === 'rotate180',
        },
        [className],
      )}
    >
      {icons[type]}
    </span>
  );
};
