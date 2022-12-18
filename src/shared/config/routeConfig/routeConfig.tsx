import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { GamePage } from 'pages/GamePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  TEMP = 'temp',
  MAIN = 'main',
  ABOUT = 'about',
  RESULTS = 'results',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.TEMP]: '/',
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.RESULTS]: '/results',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.TEMP]: {
    path: RoutePath.temp,
    element: <GamePage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <GamePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.RESULTS]: {
    path: RoutePath.results,
    element: <>result page in progress</>,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <>profile page in progress</>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
