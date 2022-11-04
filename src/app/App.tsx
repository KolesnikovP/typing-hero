import React, { useContext, useState } from 'react'
import { stores, StoresProvider } from 'app/providers/Store/stores'
import './styles/index.scss'
import { Theme, ThemeContext } from './providers/ThemeProvider/lib/ThemeContext'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { GamePage } from 'pages/GamePage'
<<<<<<< Updated upstream
=======
import { AppRouter } from 'app/router'
import { Header } from 'widgets/Header'
import { ToggleSwitch } from 'widgets/ToggleSwitch'
>>>>>>> Stashed changes

export const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <StoresProvider value={stores}>
      <ThemeProvider>
        <ToggleSwitch toggleTheme={toggleTheme} isActive={theme === Theme.DARK}>
          DarkMode
        </ToggleSwitch>
        <div className={`app ${theme}`}>
          <Header />
          <GamePage />
        </div>
      </ThemeProvider>
    </StoresProvider>
  )
}
