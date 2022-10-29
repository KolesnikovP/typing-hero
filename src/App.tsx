import React, { useContext, useState } from "react";
import Header from "./Components/Header/Header";
import ToggleSwitch from "./Components/ToggleSwitch/ToggleSwitch";
import TypingInput from "./Components/TypingInput/TypingInput";
import { stores, StoresProvider } from "./Store/stores";
import './styles/index.scss';
import { Theme, ThemeContext } from "./theme/themeContext";
import useTheme from "./theme/useTheme";


export const App = (): JSX.Element => {
  const {theme, toggleTheme} = useTheme()

  return (
    <StoresProvider value={stores}>
      <ToggleSwitch toggleTheme={toggleTheme} isActive={theme === Theme.DARK}>DarkMode</ToggleSwitch>
      <div className={`app ${theme}`}>
        <Header />
        <TypingInput />
        <div className='box'>
          <h2>test less</h2>
        </div>
        <div className='card'>
          <h2>test sass</h2>
        </div>
      </div>
    </StoresProvider>)
}
