import React, { useContext, useState } from 'react'
import { stores, StoresProvider } from 'app/providers/Store/stores'
import './styles/index.scss'
import { Theme, ThemeContext } from './providers/ThemeProvider/lib/ThemeContext'
import { AppRouter } from 'app/router'

import { Header } from 'widgets/Header'
import { ToggleSwitch } from 'widgets/ToggleSwitch'
import { useTheme } from 'app/providers/ThemeProvider'


export const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <StoresProvider value={stores}>
        <div className={`app ${theme}`}>
          <Header />
          <ToggleSwitch/>
          <AppRouter />
          {/* <div className={`app ${theme}`}>{<GamePage />}</div> */}
        </div>
    </StoresProvider>
  )
}
