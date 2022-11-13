import React from 'react';
// import './styles/styles.css'
// import './styles/test.scss'
// import './styles/test.less'
import 'antd/dist/antd.css';

import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
