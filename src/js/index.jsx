import React from 'react';
import ReactDOM from 'react-dom';
import css from '../../styles/styles';
import App from './components/App';
import AppState from '/components/AppState';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);
