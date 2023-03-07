import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { GamePage } from 'pages/GamePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticlesDetailPage } from 'pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  TEMP = 'temp',
  MAIN = 'main',
  ABOUT = 'about',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
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
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  // last
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
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
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticlesDetailPage />,
    authOnly: true,
  },
  [AppRoutes.RESULTS]: {
    path: RoutePath.results,
    element: <>result page in progress</>,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
