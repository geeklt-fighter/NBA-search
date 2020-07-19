import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { PlayerProvider } from './context';


ReactDOM.render(
  <PlayerProvider>
    <Router>
      <App />
    </Router>
  </PlayerProvider>

  ,
  document.getElementById('root')
);

