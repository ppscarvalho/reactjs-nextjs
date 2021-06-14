import React from 'react';
import ReactDOM from 'react-dom';
import './style/global-styles.css';
import { Home } from './template/Home/index';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
