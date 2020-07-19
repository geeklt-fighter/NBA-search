import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import SinglePlayer from './pages/SinglePlayer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <h6 className="menu">Players List</h6>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:slug" component={SinglePlayer} />
      </Switch>
    </div>
  );
}

export default App;
