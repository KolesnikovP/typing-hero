import {
  Suspense, FC, useEffect,
} from 'react';
import { AppRouter } from 'app/router';

import { Header } from 'widgets/Header';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

export const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Suspense fallback='...loading'>
      <div className='app'>
        <Header />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
        {/* <div className={`app ${theme}`}>{<GamePage />}</div> */}
      </div>
    </Suspense>
  );
};
