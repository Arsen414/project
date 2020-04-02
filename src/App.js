import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Charts from './pages/Charts/Charts'
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Musician from './pages/Musician/Musician';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/charts">
          <Charts />
        </Route>
        <Route path="/musicians/:name">
          <Musician />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
