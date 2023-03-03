import React, {
  memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from 'app/router/ui/RequireAuth';

export const AppRouter = memo(() => {
  const renderWithAuthWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <div className='page-wrapper'>{route.element}</div>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithAuthWrapper)}
      </Routes>
    </Suspense>
  );
});
