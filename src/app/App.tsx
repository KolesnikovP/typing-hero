import React, { useContext, useState } from 'react'
import { stores, StoresProvider } from 'app/providers/Store/stores'
import './styles/index.scss'
import { Theme, ThemeContext } from './providers/ThemeProvider/lib/ThemeContext'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { GamePage } from 'pages/GamePage'
import { AppRouter } from 'app/router'

import { Header } from 'widgets/Header'
import { ToggleSwitch } from 'widgets/ToggleSwitch'


export const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <StoresProvider value={stores}>
      <ThemeProvider>
        <div className={`app ${theme}`}>
          <Header />
          <ToggleSwitch toggleTheme={toggleTheme} isActive={theme === Theme.DARK}>
            DarkMode
          </ToggleSwitch>
          <AppRouter />
          {/* <div className={`app ${theme}`}>{<GamePage />}</div> */}
        </div>
      </ThemeProvider>
    </StoresProvider>
  )
}
