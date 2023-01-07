import {
  Suspense, FC,
} from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/router';

import { Header } from 'widgets/Header';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Theme, ThemeContext } from './providers/ThemeProvider/lib/ThemeContext';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback='...loading'>
      <div className={`app ${theme}`}>
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
