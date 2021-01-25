
import './App.css';
import NavBar from './component/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/layout/Dashboard';
import Pokemon from './component/pokemon/Pokemon';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
