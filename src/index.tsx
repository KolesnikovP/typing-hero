import React from 'react'
import './styles/styles.css'
import './styles/test.scss'
import './styles/test.less'
import 'antd/dist/antd.css'
import TypingInput from './Components/TypingInput/TypingInput'
import Header from './Components/Header/Header'
import { stores, StoresProvider } from './Store/stores'
import { render } from 'react-dom'

const App = (): JSX.Element => (
  <StoresProvider value={stores}>
    <div className='container'>
      <Header />
      <TypingInput />
      <div className='box'>
        <h2>test less</h2>
      </div>
      <div className='card'>
        <h2>test sass</h2>
      </div>
    </div>
  </StoresProvider>
)

const container = document.getElementById('root')

render(
  <App />,
  document.getElementById('root')
  )
