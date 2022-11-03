import React from 'react'
// import './styles/styles.css'
// import './styles/test.scss'
// import './styles/test.less'
import 'antd/dist/antd.css'

import { render } from 'react-dom'
import { App } from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

// const container = document.getElementById('root')

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
