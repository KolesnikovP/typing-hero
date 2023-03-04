import { ReactNode, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import HomeIconSVG from '../../assets/icons/HomeIcon.svg';
import ChevronIconLeftSVG from '../../assets/icons/ChevronIconLeft.svg';
import LightIconSVG from '../../assets/icons/Light.svg';
import UserIconSVG from '../../assets/icons/userIcon.svg';
import ArticleIconSVG from '../../assets/icons/article-20-20.svg';

import styles from './Icon.module.scss';

export enum IconName {
  HOME_ICON = 'homeIcon',
  LIGHT_ICON = 'lightIcon',
  USER_ICON = 'userIcon',
  CHEVRON_LEFT_ICON = 'chevronLeftIcon',
  ARTICLE_ICON = 'articleIcon'
}

const icons: Record<IconName, ReactNode> = {
  [IconName.HOME_ICON]: <HomeIconSVG />,
  [IconName.LIGHT_ICON]: <LightIconSVG />,
  [IconName.USER_ICON]: <UserIconSVG />,
  [IconName.CHEVRON_LEFT_ICON]: <ChevronIconLeftSVG />,
  [IconName.ARTICLE_ICON]: <ArticleIconSVG />,
};

interface IconProps {
  type: IconName;
  color?: string;
  transform?: 'rotate90' | 'rotate180';
  className?: string;
}

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
