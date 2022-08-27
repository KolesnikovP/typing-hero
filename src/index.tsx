import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import './styles/test.scss'
import './styles/test.less'
import 'antd/dist/antd.css'
import TypingInput from './Components/TypingInput/TypingInput'
import Header from './Components/Header/Header'

const App = (): JSX.Element => (
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
)

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(<App />)
