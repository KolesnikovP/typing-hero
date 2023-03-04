import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { IconName } from 'shared/ui/Icon/Icon';

export interface SidebarItemType {
  path: string
  text: string
  icon: IconName
  authOnly?: boolean
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
    path: RoutePath.articles,
    text: 'Статьи',
    icon: IconName.ARTICLE_ICON,
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
    authOnly: true,
  },
  {
    path: RoutePath.about,
    text: 'О проекте',
    icon: IconName.HOME_ICON,
  },
];
