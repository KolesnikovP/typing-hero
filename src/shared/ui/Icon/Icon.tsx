import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import HomeIconSVG from '../../assets/icons/HomeIcon.svg';
import LightIconSVG from '../../assets/icons/Light.svg';
import UserIconSVG from '../../assets/icons/userIcon.svg';

import styles from './Icon.module.scss';

export enum IconName {
  HOME_ICON = 'homeIcon',
  LIGHT_ICON = 'lightIcon',
  USER_ICON = 'userIcon',
}

const icons: Record<IconName, ReactNode> = {
  homeIcon: <HomeIconSVG />,
  lightIcon: <LightIconSVG />,
  [IconName.USER_ICON]: <UserIconSVG />,
};

type IconProps = {
  type: IconName;
  color?: string;
  transform?: 'rotate90' | 'rotate180';
  className?: string;
};

export const Icon = (props: IconProps) => {
  const {
    color, transform, type, className,
  } = props;
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
