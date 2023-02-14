import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import UserIcon from 'shared/assets/icons/userIcon.svg';
import { IconName } from 'shared/ui/Icon/Icon';

export interface SidebarItemType {
  path: string
  text: string
  icon: IconName
}
export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    icon: IconName.HOME_ICON,
  },
  {
    path: RoutePath.results,
    text: 'Активность',
    icon: IconName.HOME_ICON,
  },
  {
    path: RoutePath.temp,
    text: 'Статьи',
    icon: IconName.HOME_ICON,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: IconName.HOME_ICON,
  },
  {
    path: RoutePath.about,
    text: 'О проекте',
    icon: IconName.HOME_ICON,
  },
];
