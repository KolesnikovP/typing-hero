import {
  Suspense, FC, useEffect,
} from 'react';
import { AppRouter } from 'app/router';

import { Header } from 'widgets/Header';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const userInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Suspense fallback='...loading'>
      <div className='app'>
        <Header />
        <div className='content-page'>
          <Sidebar />
          {userInited && <AppRouter />}
        </div>
        {/* <div className={`app ${theme}`}>{<GamePage />}</div> */}
      </div>
    </Suspense>
  );
};
