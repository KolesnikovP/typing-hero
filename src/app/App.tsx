import React, { useContext, useState, Suspense, FC } from 'react'
import { stores, StoresProvider } from 'app/providers/Store/stores'
import './styles/index.scss'
import { AppRouter } from 'app/router'

import { Header } from 'widgets/Header'
import { useTheme } from 'app/providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'
import { Theme, ThemeContext } from './providers/ThemeProvider/lib/ThemeContext'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <Suspense fallback='...loading'>
      <StoresProvider value={stores}>
        <div className={`app ${theme}`}>
          <Header />
          <div className='content-page'>
            {/*<Sidebar />*/}
            <AppRouter />
          </div>
          {/* <div className={`app ${theme}`}>{<GamePage />}</div> */}
        </div>
      </StoresProvider>
    </Suspense>
  )
}
