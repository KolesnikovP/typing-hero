import React, { useContext, useState, Suspense } from 'react'
import { stores, StoresProvider } from 'app/providers/Store/stores'
import './styles/index.scss'
import { Theme, ThemeContext } from './providers/ThemeProvider/lib/ThemeContext'
import { AppRouter } from 'app/router'

import { Header } from 'widgets/Header'
import { useTheme } from 'app/providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'



export const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <>
      <Suspense fallback='...loading'>
    <StoresProvider value={stores}>
        <div className={`app ${theme}`}>
          <Header />
          <div className={'content-page'}>
            <Sidebar/>
            <AppRouter/>
          </div>
          {/* <div className={`app ${theme}`}>{<GamePage />}</div> */}
        </div>
    </StoresProvider>
      </Suspense>
    </>
  )
}
