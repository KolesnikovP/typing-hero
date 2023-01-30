import { ReactNode, SVGProps, ReactElement } from 'react';
import ThemeIcon from 'shared/assets/icons/Light.svg';
// import cls from './Icon.module.scss';

export enum IconType {
  themeIcon = 'themeIcon',
}

interface IconProps extends SVGProps<SVGSVGElement> {
  type: IconType
  size?: number
}

export const Icon = (props: IconProps) => {
  const { type, size = 20 } = props;

  return (
  // {type === IconType.themeIcon && <ThemeIcon fontSize={size} />}
    <span>do it</span>
  );
};
