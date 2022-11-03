import React from 'react'
// import './styles/styles.css'
// import './styles/test.scss'
// import './styles/test.less'
import 'antd/dist/antd.css'


import { render } from 'react-dom'
<<<<<<< Updated upstream
import { App } from './App'
import ThemeProvider from './theme/ThemeProvider'



// const container = document.getElementById('root')
=======
import { App } from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
>>>>>>> Stashed changes

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
  )
